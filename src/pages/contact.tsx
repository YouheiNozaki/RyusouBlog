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
import fetch from 'isomorphic-unfetch';

import HeadComponent from '../components/templates/Head';
import Layout from '../components/templates/Layout';
import { ShareButton } from '../components/molecules/ShareButton';

import { FormData } from '../types/index';
import { MICROCMS_ENDPOINT } from '../constants';

const ContactPage: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<FormData>();

  function onSubmit(values: FormData) {
    fetch(MICROCMS_ENDPOINT + '/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WRITE-API-KEY': `${process.env.x_api_key}`,
      },
      body: JSON.stringify(`${values}`),
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
            <FormLabel htmlFor="FirstName">First Name</FormLabel>
            <Input
              type="text"
              placeholder="First name"
              id="FirstName"
              name="firstName"
              ref={register({ required: true, maxLength: 80 })}
              marginBottom="4"
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
            <FormLabel htmlFor="LastName">Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Last name"
              id="LastName"
              name="lastName"
              ref={register({ required: true, maxLength: 100 })}
              marginBottom="4"
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
            <FormLabel htmlFor="Email">Your Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              id="Email"
              name="email"
              aria-describedby="email-helper-text"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
            <FormHelperText
              id="email-helper-text"
              marginBottom="4"
              color="gray.600"
            >
              I'll never share your email address.
            </FormHelperText>
            <FormLabel htmlFor="Inquiry">Inquiry</FormLabel>
            <Textarea
              type="text"
              placeholder="body"
              id="Inquiry"
              name="body"
              ref={register({ required: true })}
            />
            <FormErrorMessage>
              {errors.body && errors.body.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            variantColor="teal"
            marginLeft="6"
            color="black"
            backgroundColor="teal.400"
          >
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
