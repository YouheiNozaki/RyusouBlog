import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { withTheme } from 'emotion-theming';
import {
  Heading,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
  FormControl,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/core';

import HeadComponent from '../components/templates/Head';
import Layout from '../components/templates/Layout';
import { ShareButton } from '../components/molecules/ShareButton';

import { axiosPostInstance } from '../lib/api';
import { FormData } from '../types';

const ContactPage: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<FormData>();

  function onSubmit(values: FormData) {
    axiosPostInstance({
      data: values,
      url: 'https://ryusou-mtkh.microcms.io/api/v1/contacts',
    })
      .then(() => {
        router.push('/success');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <HeadComponent
        title={'RyusouBlog'}
        description={'お問い合わせのページです'}
        keyword={'Contact'}
        image={'./hero.png'}
        url={'https://ryusou-blog.now.sh/contact'}
      />
      <Layout>
        <Heading>Contact</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired margin="6">
            <FormLabel htmlFor="FirstName">
              First Name
              <Input
                type="text"
                placeholder="First name"
                name="firstName"
                ref={register({ required: true, maxLength: 80 })}
                marginBottom="4"
              />
            </FormLabel>
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
            <FormLabel htmlFor="LastName">
              Last Name
              <Input
                type="text"
                placeholder="Last name"
                name="lastName"
                ref={register({ required: true, maxLength: 100 })}
                marginBottom="4"
              />
            </FormLabel>
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
            <FormLabel htmlFor="LastName">
              Your Email
              <Input
                type="email"
                placeholder="Email"
                name="email"
                aria-describedby="email-helper-text"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
            </FormLabel>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
            <FormHelperText id="email-helper-text" marginBottom="4">
              We'll never share your email address.
            </FormHelperText>
            <FormLabel htmlFor="Inquiry">
              Inquiry
              <Textarea
                type="text"
                placeholder="body"
                name="body"
                ref={register({ required: true })}
              />
            </FormLabel>
            <FormErrorMessage>
              {errors.body && errors.body.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" variantColor="teal" marginLeft="6">
            Submit
          </Button>
        </form>
        <ShareButton
          title={'りゅーそうブログコンタクトページ'}
          url={`https://ryusou-mtkh.now.sh/contact/`}
        />
      </Layout>
    </>
  );
};

export default withTheme(ContactPage);
