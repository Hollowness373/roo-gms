"use client";

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { ZodType } from 'zod';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { FIELD_NAMES, FIELD_TYPES } from '@/constants';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import {
    Form,
    FormControl,  
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{success: boolean; error?: string}>;
    type: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit } : Props<T>) => {
    const router = useRouter()
    const isSignIn = type === 'SIGN_IN';

    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
      })
     
      const handleSubmit: SubmitHandler<T> = async(data) => {
        const result = await onSubmit(data);

        if(result.success) {
            toast({
                title: isSignIn ? 'Welcome !' : 'Success',
                description: isSignIn ? 'You have successfully signed in.' : 'You have successfully signed up.'
            });

            router.push("/")
        } else {
            toast({
                title: `${isSignIn ? 'Wrong Credentials' : ' Error Singing Up'}`,
                description: isSignIn ? "Invalid email or password" : "An error occurred.",
                variant: "destructive",
            })
        }
      }
      return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-2xl font-semibold text-white">
                {isSignIn ? "Welcome back to Panda's website" : 'Create your account'}
            </h1>
            <p className="text-light-100">
                {isSignIn ? 'Access the guides, simulations, and stay updated with the guilds update and events.' : 'Please provide and complete all necessary fields to gain access.'}
            </p>
            
            <Form {...form}>
                <form id='authForm' onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem >
                                <FormLabel className='capitalize'>
                                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                                </FormLabel>
                                <FormControl>
                                    {field.name === 'classId' ? (
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger className="form-input">
                                                <SelectValue placeholder="Select Class" />
                                            </SelectTrigger>
                                            <SelectContent className='bg-dark-300 text-light-100'>
                                                <SelectItem value="Acolyte">Acolyte</SelectItem>
                                                <SelectItem value="Swordsman">Swordsman</SelectItem>
                                                <SelectItem value="Archer">Archer</SelectItem>
                                                <SelectItem value="Merchant">Merchant</SelectItem>
                                                <SelectItem value="Thief">Thief</SelectItem>
                                                <SelectItem value="Mage">Mage</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        ) : (
                                        <Input 
                                            required 
                                            type= {FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                                            {...field}
                                            className='form-input'
                                        />
                                        )
                                    }   
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type="submit" className='form-btn'>{isSignIn ? 'Sign In' : 'Sign Up'}</Button>
                </form>
            </Form>
            <p className="text-center text-base font-medium">
                {isSignIn ? 'New to Panda? ' : 'Already have an account? '}
                <Link href={isSignIn ? '/sign-up' : '/sign-in'} className='font-bold text-primary'>
                    {isSignIn ? 'Create an account' : 'Sign in'}
                </Link>
            </p>
        </div>
      )
}

export default AuthForm