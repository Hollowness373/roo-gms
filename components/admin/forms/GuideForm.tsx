"use client";

import React from 'react'
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
import { createGuide } from '@/lib/admin/actions/guides';
import { toast } from '@/hooks/use-toast';

interface Props extends Partial<Guide> {
    type?: 'create' | 'update'
}

const GuideForm = ({ type, ...guide } : Props) => {

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
      
    //get the values of the fields in the form
    const onSubmit = async(values: z.infer<typeof guideSchema>) => {
        const result = await createGuide(values);

        if (result.success) {
            toast({
                title: "Guide Created",
                description: "The guide has been successfully created.",
            });
            router.push(`/admin/guides/${result.data.id}`);
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
                                    required
                                    placeholder='Guide Title'
                                    {...field}
                                    className='guide-form_input'
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
                                    required
                                    placeholder='Guide Author'
                                    {...field}
                                    className='guide-form_input'
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
                                        <SelectValue placeholder="Select Class"/>
                                    </SelectTrigger>
                                    <SelectContent className='bg-light-600'>
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
                                    type="image"
                                    accept="image/*"
                                    placeholder="Upload a cover image"
                                    folder="guides/cover"
                                    variant="light"
                                    onFileChange={field.onChange}
                                    value={field.value}
                                />
                            </FormControl>
                        <FormMessage />
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
                                    value={field.value} 
                                    onPickerChange={field.onChange}
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
                                    className='guide-form_input'
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
                                Guide Video
                            </FormLabel>
                            <FormControl>
                                <FileUpload
                                    type="video"
                                    accept="video/*"
                                    placeholder="Upload a video"
                                    folder="guides/video"
                                    variant="light"
                                    onFileChange={field.onChange}
                                    value={field.value}
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
                                    className='guide-form_input'
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='guide-form_btn text-white'>
                    Submit Guide
                </Button>
            </form>
        </Form>
    )
}

export default GuideForm