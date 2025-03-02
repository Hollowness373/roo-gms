"use client"

import React, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { adminUserSchema } from '@/lib/validations';
import { adminUpdateUser } from '@/lib/admin/actions/users';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Form,
    FormControl,  
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


interface EditUserFormProps {
    userData: {
        id: string;
        inGameName: string;
        classId: string;
    } | null;
}

const EditUserForm = ({ userData }: EditUserFormProps) => {

    const router = useRouter();
    const form = useForm<z.infer<typeof adminUserSchema>>({
            resolver: zodResolver(adminUserSchema),
            defaultValues: {
                inGameName: '',
                password: '',
                classId: '',
            }
    });

    const { reset } = form;

    useEffect(() => {
            if (userData) {
            // Reset the form with the userData.
            reset({
                inGameName: userData.inGameName,
                classId: userData.classId,
            });
            }
        }, [userData, reset]);
    

    //get the values of the fields in the form
    const onSubmit = async(values: z.infer<typeof adminUserSchema>) => {
        if (values.password.length < 8 && values.password.length > 1){
            toast({
                title: "Error",
                description: "Password must contain atleast 8 characters",
                variant: "destructive"
            });
            return
        }
        const result = await adminUpdateUser(values, userData?.id as string);

        if (result.success) {
            toast({
                title: "Updated",
                description: "User data has been successfully updated.",
            });
            router.push(`/admin/users`);
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
            <form id='editUserForm' onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name={"inGameName"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                In-Game Name
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder={userData?.inGameName}
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
                    name={"classId"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Class
                            </FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} required {...field}>
                                    <SelectTrigger className="guide-form_input">
                                        <SelectValue defaultValue={userData?.classId} placeholder={userData?.classId}/>
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
                    name={"password"}
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1' >
                            <FormLabel className='text-base font-normal text-dark-500'>
                                Reset User Password
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder={`Reset only upon user's request`}
                                    {...field}
                                    className='guide-form_input'
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                /> 
                <Button type="submit" className='guide-form_btn text-white'>
                    Update User
                </Button>
            </form>
        </Form>
    )
}

export default EditUserForm