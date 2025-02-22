"use client";

import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import { guideSchema } from '@/lib/validations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Form,
    FormControl,  
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import FileUpload from '@/components/FileUpload';
import ColorPicker from '../ColorPicker';
import { updateGuide } from '@/lib/admin/actions/guides';
import { toast } from '@/hooks/use-toast';

interface EditGuideFormProps {
    guideData: {
        id: string;
        title: string;
        author: string;
        classCategory: string;
        coverUrl: string;
        coverColor: string;
        description: string;
        summary: string;
        videoUrl: string | null;
        createdAt: Date | null;
    } | null;
}

const EditGuideForm = ({ guideData } : EditGuideFormProps) => {

    const [ pickerColor, setPickerColor ] = useState("");
    const [ videoPath, setVideoPath ] = useState("");
    const [ descriptionValue, setDescriptionValue ] = useState("");
    const [ summary, setSummary ] =  useState("");
    const router = useRouter();
    const form = useForm<z.infer<typeof guideSchema>>({
        resolver: zodResolver(guideSchema),
        defaultValues: {
            title: '',
            author: '',
            description: '',
            summary: '',
            classCategory: '',
            coverUrl: '',
            coverColor: '',
            videoUrl: '',
        }
    })

    useEffect(() => {
        //initialize the values
        setVideoPath(guideData?.videoUrl as string)
        setDescriptionValue(guideData?.description as string);
        setSummary(guideData?.summary as string);
    }, [guideData?.description])
      
    //get the values of the fields in the form
    const onSubmit = async(values: z.infer<typeof guideSchema>) => {
        const result = await updateGuide(values, guideData?.id as string);

        if (result.success) {
            toast({
                title: "Updated",
                description: "The guide has been successfully updated.",
            });
            router.push(`/admin/guides`);
        } else {
            toast({
                title: "Error",
                description: result.message,
                variant: 'destructive'

            })
        }
    };

    return (
        <Form {...form}>
            <form id='authForm' onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name={"title"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Guide Title
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder={guideData?.title}
                                    {...field}
                                    className='guide-edit-form_input'
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"author"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Author
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder={guideData?.author}
                                    {...field}
                                    className='guide-edit-form_input'
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"classCategory"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Class
                            </FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} required {...field}>
                                    <SelectTrigger className="guide-form_input">
                                        <SelectValue defaultValue={guideData?.classCategory} placeholder={guideData?.classCategory}/>
                                    </SelectTrigger>
                                    <SelectContent className='bg-light-600'>
                                        <SelectItem value="General">General</SelectItem>
                                        <SelectItem value="Acolyte">Acolyte</SelectItem>
                                        <SelectItem value="Swordsman">Swordsman</SelectItem>
                                        <SelectItem value="Archer">Archer</SelectItem>
                                        <SelectItem value="Merchant">Merchant</SelectItem>
                                        <SelectItem value="Thief">Thief</SelectItem>
                                        <SelectItem value="Mage">Mage</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />    
                <FormField
                    control={form.control}
                    name={"coverUrl"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Cover Image
                            </FormLabel>
                            <FormControl>
                                <FileUpload
                                    type="bookimage"
                                    accept="image/*"
                                    placeholder="Upload a cover image"
                                    folder="guides/cover"
                                    variant="light"
                                    onFileChange={field.onChange}
                                    value={field.value ? field.value : guideData?.coverUrl}
                                    currentPath={guideData?.coverUrl}
                                    currentColor={pickerColor ? pickerColor : guideData?.coverColor}
                                />
                            </FormControl>
                        <FormMessage/>
                        </FormItem>
                    )}
                />  
                <FormField
                    control={form.control}
                    name={"coverColor"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Cover Color
                            </FormLabel>
                            <FormControl>
                                <ColorPicker 
                                    value={field.value ? field.value : guideData?.coverColor} 
                                    onPickerChange={(color: string) => {
                                        field.onChange(color);
                                        setPickerColor(color);
                                    }}
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"videoUrl"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Youtube Video URL (embed)
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder={guideData?.videoUrl ? guideData.videoUrl : "youtube/embed/"}
                                    {...field}
                                    onChange={(e)=> {
                                        setVideoPath(e.target.value)
                                        field.onChange(e)
                                    }}
                                    value={videoPath}
                                    className='guide-edit-form_input'
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"description"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Gudie Description
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Guide Description'
                                    {...field}
                                    rows={10}
                                    onChange={(e) => {
                                        setDescriptionValue(e.target.value);
                                        field.onChange(e);
                                    }}
                                    value={descriptionValue}
                                    className='guide-form_input'
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"summary"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Gudie Summary
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Guide Summary'
                                    {...field}
                                    rows={10}
                                    onChange={(e) => {
                                        setSummary(e.target.value);
                                        field.onChange(e);
                                    }}
                                    value={summary}
                                    className='guide-form_input'
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='guide-form_btn text-white'>
                    Update Guide
                </Button>
            </form>
        </Form>
    )
}

export default EditGuideForm;