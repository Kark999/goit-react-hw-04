import css from "./SearchBar.module.css";
// import toast from "react-hot-toast";
// import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { searchTerm: "" };

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required("Search term is required"),
});

const SearchBar = ({ onsearchQuery }) => {
  const handleSubmit = (values) => {
    onsearchQuery(values.searchTerm);
  };

  // const searchTermFieldId = useId();

  return (
    <header className={css.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={searchFormSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="searchTerm"
            // id={searchTermFieldId}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage
            className={css.error}
            name="searchTerm"
            component="span"
          />

          <button className={css.submitBtn} type="submit" aria-label="Search">
            🔍
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;

// const SearchBar = ({ onSubmit, fetchPhotos }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!searchTerm.trim()) {
//       toast.error("Please enter a search term.");
//       return;
//     }

//     fetchPhotos(searchTerm);
//   };

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <>
//       <header className={css.header}>
//         <form className={css.form} onSubmit={handleSubmit}>
//           <input
//             className={css.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={searchTerm}
//             onChange={handleChange}
//           />
//           <button className={css.submitBtn} type="submit">
//             🔍
//           </button>
//         </form>
//       </header>
//     </>
//   );
// };

// export default SearchBar;
