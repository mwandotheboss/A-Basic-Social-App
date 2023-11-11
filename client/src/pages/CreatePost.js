import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must input a Title!'),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then((response) => {
      console.log('Post Created');
    });
  };
  return (
    <div className='createPostPage'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='formContainer'>
          <label>Title: </label>
          <ErrorMessage name='title' component='span' />
          <Field
            id='inputCreatePost'
            name='title'
            placeholder='Input post title'
          />
          <label>Post: </label>
          <ErrorMessage name='postText' component='span' />
          <Field
            id='inputCreatePost'
            name='postText'
            placeholder='Input Post content'
          />
          <label>Username: </label>
          <ErrorMessage name='username' component='span' />
          <Field
            id='inputCreatePost'
            name='username'
            placeholder='Input username 3-15 characters'
          />

          <button type='submit'> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;