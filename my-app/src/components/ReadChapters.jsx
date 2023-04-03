// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import Comment from '../../components/Comment/Comment';
// import { useDispatch, useSelector } from 'react-redux';
// import modalActions from '../../store/RenderCommentsModal/actions';
// import commentsActions from '../../store/Comments/actions';
// import fd from '../../images/next.png'
// import fi from '../../images/prev.png'

// export default function Page() {
//   const [chapter, setChapter] = useState({});
//   const [next, setNext] = useState('');
//   const [index, setIndex] = useState(0);
//   const { id, page } = useRoute().params;
//   const navigation = useNavigation();
//   const url = 'http://localhost:8080/api/chapters/';

//   const dispatch = useDispatch();
//   const modalState = useSelector(store => store.commentsModal.state);

//   const { renderModal } = modalActions;

//   const comments = useSelector(store => store.comments.comments);

//   useEffect(() => {
//     axios
//       .get(`${url}${id}`)
//       .then(response => {
//         setChapter(response.data.chapter);
//         setNext(response.data.next);
//       })
//       .catch(error => console.error(error));
//   }, [comments]);

//   const handlePrev = () => {
//     setIndex(index - 1);
//     navigation.navigate('Page', { id, page: index - 1 });
//     if (index <= 0) {
//       navigation.navigate('Manga', { manga_id: chapter.manga_id, page: 1 });
//     }
//   };

//   const handleNext = () => {
//     setIndex(index + 1);
//     navigation.navigate('Page', { id, page: index + 1 });
//     if (index >= chapter.pages.length - 1) {
//       navigation.navigate('Page', { id: next, page: 0 });
//     }
//   };

//   const handleRender = () => {
//     dispatch(renderModal({ state: true }));
//   };

//   const token = localStorage.getItem('token');
//   const headers = { headers: { Authorization: `Bearer ${token}` } };
//   const { getComments } = commentsActions;

//   useEffect(() => {
//     const url = 'http://localhost:8080/api/comments?chapter_id=' + id;
//     setTimeout(() => {
//       axios.get(url, headers).then(res => dispatch(getComments({ comments: res.data.comments })));
//     }, 100);
//   }, []);

//   return (
//     <>
//       {
//   token ?
//     <View style={styles.container}>
//       <View style={styles.chapter2}>
//         <Text style={styles.parrafoChapter2}> Cap N° {chapter.order} - {chapter.title} - Page {index} </Text>
//       </View>
//       <View style={styles.contenedorCapitulos}>
//         <TouchableOpacity style={styles.botonBack} onPress={handlePrev}>
//           <Image style={styles.flecha} source={fi} />
//         </TouchableOpacity>

//         <View style={styles.posi}>
//           <Image style={styles.mangaa} source={{ uri: chapter?.pages?.[index] }} />
//         </View>

//         <TouchableOpacity style={styles.botonNext} onPress={handleNext}>
//           <Image style={styles.flecha} source={fd} />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.chapter3}>
//         <TouchableOpacity onPress={handleRender}>
//           <Image style={styles.comment} source={require('path/to/comment')} /> {/* ESTA ABRE EL MODAL*/}
//         </TouchableOpacity>
//         <Text style={styles.parrafoChapter3}>{comments.length}</Text>
//         {modalState ? <Comment /> : null}
//       </View>
//     </View>
//     :
//     <View style={styles.noLogged}>
//       <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
//         <Text>Please Register or Login</Text>
//       </TouchableOpacity>
//     </View>
//       }
//       </>
//     );
//   }