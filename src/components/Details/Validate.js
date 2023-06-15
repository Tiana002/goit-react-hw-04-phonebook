import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required(''),
  number: Yup.string().min(7).max(13).required(''),
});
export { schema };