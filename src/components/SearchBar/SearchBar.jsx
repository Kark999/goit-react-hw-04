import css from "./SearchBar.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const SearchBar = ({ onsearchQuery }) => {
  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },
    validationSchema: Yup.object({
      searchTerm: Yup.string().required("Search term is required"),
    }),
    onSubmit: async (values) => {
      try {
        if (!values.searchTerm) {
          toast.error("Please enter a search term");
          return;
        }

        await onsearchQuery(values.searchTerm);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <header className={css.header}>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <input
          className={css.field}
          type="text"
          name="searchTerm"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.searchTerm}
        />
        {formik.touched.searchTerm && formik.errors.searchTerm && (
          <span className={css.error}>{formik.errors.searchTerm}</span>
        )}

        <button className={css.submitBtn} type="submit" aria-label="Search">
          🔍
        </button>
      </form>
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
