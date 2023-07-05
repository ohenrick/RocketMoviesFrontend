// import { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { FiArrowLeft } from 'react-icons/fi';
// import { AiOutlineClockCircle } from 'react-icons/ai';

// import { Container, Author, Tags } from "./styles";

// import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

// import { Header } from "../../components/Header";
// import { Section } from "../../components/Section";
// import { Tag } from "../../components/Tag";
// import { ButtonText } from '../../components/ButtonText';
// import { api } from '../../services/api';
// import { useAuth } from '../../hooks/auth';
// import { MovieItem } from '../../components/MovieItem';

// export function Details() {
//   const [data, setData] = useState(null)

//   const params = useParams()

//   const { user } = useAuth()

//   const avatarUrl = user.avatar
//     ? `${api.defaults.baseURL}/files/${user.avatar}`
//     : avatarPlaceholder

//   useEffect(() => {
//     async function fetchNote() {
//       const response = await api.get(`/notes/${params.id}`)
//       setData(response.data)
//     }

//     fetchNote()
//   }, [])

//   return (

//     <Container>
//       <header>
//             <Link to="/">
//               <ButtonText title='Voltar' icon={FiArrowLeft} />
//             </Link>
//       {
//         data &&
//         <Section title={data.title} stars={data.rating}>
//           <Author>
//             <img src={avatarUrl} alt={`Foto de ${user.name}`} />
//             <span className='author'>Por {user.name}</span>
//             <AiOutlineClockCircle />
//             <span className='time'>{data.created_at}</span>
//           </Author>
//           {
//             data.movie_tags &&
//             <Tags>
//               {
//                 data.movie_tags.map(tag => (
//                   <Tag
//                     key={String(tag.id)}
//                     title={tag.name}
//                   />
//                 ))
//               }
//             </Tags>
//           }

//         </Section>
//       }
//       </header>
//         <main>
//           <p>
//             {data.description}
//           </p>
//         </main>
//   </Container>
//   );
// }

import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";
import { Section } from "../Home/styles";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [data, setData] = useState(null);

  function goBack() {
    navigate(-1);
  }

  async function handleRemoveFilm() {
    const confirm = window.confirm("Tem certeza de querer eliminar o Filme?");
    if (confirm) {
      const response = await api.delete(`/notes/${params.id}`);
      setData(response.data);
      navigate("/");
    }
  }

  async function fetchNote() {
    const response = await api.get(`/notes/${params.id}`);
    setData(response.data);
  }

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <ButtonText
            title={
              <>
                {" "}
                <FiArrowLeft /> Voltar
              </>
            }
            onClick={goBack}
          />

          <div className="movieAndRating">
            <h1>{data.title}</h1>
            <Rating grade={data.rating}/>
          </div>

          <div className="authorAndDate">
            <img src={avatarUrl} alt={`${user.name} - photo`} />
            <h3>{`por ${user.name}`}</h3>
            <span>
              <BiTime />
              <span id="date">{data.created_at}</span>
            </span>
          </div>

          {data.tags && (
            <div className="tags">
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}
          <p>{data.description}</p>
          {}

          <footer>
            <Button title="Excluir Filme" onClick={handleRemoveFilm} />
          </footer>
        </main>
      )}
    </Container>
  );
}
