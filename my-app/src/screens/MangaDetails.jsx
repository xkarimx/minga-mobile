import { View, Text, Image, ScrollView, Button, TouchableOpacity, ImageBackground } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import actions from '../store/Manga/actions.js'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import bg from '../../images/bg5.jpg'

const { captureManga, captureChapter } = actions;
function MangaDetailsScreen() {
    const id = '6418b8f9b447d534f335807d';//aca va const {id}=useparams()-> depende de la ruta que viene de mangas
    const page = Number(useParams().page)
    const dispatch = useDispatch()
    const [pagina, setPagina] = useState(0);
    const [chapter, setChapter] = useState({});
    const [capitulo, setCapitulo] = useState(true);
    let chapters = useSelector(store => store.mangas.chapter);
    const manga = useSelector(store => store.mangas.manga);

    useEffect(() => {
        dispatch(captureManga({ manga_id: id }))
    }, [])

    useEffect(() => {
        dispatch(captureChapter({ manga_id: id, page: page }));
    }, [page, capitulo]);

    useEffect(() => {
        setChapter(chapters[0] || {});
    }, [chapters]);
    return (
        <ImageBackground source={bg}>
        <ScrollView>
            <View style={{
                width: '100%',
                height: 70,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25,
                    color: '#ae3c6d',
                    height: 'auto'
                }}>{manga?.title}</Text>
                <Image
                    source={{ uri: 'https://i.postimg.cc/r0py0TmR/logo.png' }}
                    style={{
                        width: 50,
                        height: 50,
                        marginRight: 20
                    }} />
            </View>
            <Image
                source={{ uri: manga?.cover_photo }}
                style={{
                    width: '90%', height: 400,
                    marginTop: 15,
                    marginLeft: 18,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 0,
                }}
            />
            <View style={{
                width: '100%',
                height: 70,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    textAlign: 'center',
                    width: 150,
                    margin: 30,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 5,
                    fontSize: 30,
                    height: 50,
                    color: '#ae3c6d'
                }}>{manga.author_id?.name}</Text>
                <Text style={{
                    textAlign: 'center',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 5,
                    fontSize: 30,
                    width: 150,
                    margin: 30,
                    fontSize: 30,
                    height: 50,
                    color: '#ae3c6d'
                }}>{manga.category_id?.name}</Text>
            </View>

            <Text style={{
                textAlign: 'justify',
                margin: 20, fontSize: 20,
                height: 'auto',
                color: 'rgb(248, 246, 247)'
            }}>{manga?.description}</Text>

            <View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'rgb(248, 246, 247)'
                }}>{chapter?.name}</Text>
            </View>
            <View>
                {chapters?.length > 0 ?
                    chapters?.map(chapter => (
                        <View key={chapter?._id} style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 20
                        }}>
                            <Image style={{
                                width: 200,
                                height: 200,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 0,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 30,
                            }}
                                source={{ uri: chapter?.manga_id.cover_photo }} alt={chapter?.title} />
                            <Text style={{
                                textAlign: 'justify',
                                margin: 10,
                                fontSize: 30,
                                height: 'auto',
                                color: 'rgb(248, 246, 247)'
                            }}>{chapter.title}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Chapter', { chapterId: chapter?._id, page: 0 })} >
                                <Text style={{
                                    textAlign: 'center',
                                    borderRadius: 30,
                                    width: 200,
                                    margin: 10,
                                    fontSize: 30,
                                    height: 50,
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    borderRadius: 10,
                                    color: '#ae3c6d'
                                }}>Read</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                    :
                    null
                }
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }} >
                    {pagina !== 1 && (
                        <TouchableOpacity onPress={() =>/*'/mangas/' + manga._id  + */  setPagina(pagina - 1)} /*ver bien la ruta*/
                            style={{
                                textAlign: 'center',
                                width: 150,
                                height: 30,
                                color: 'rgb(245, 118, 184)'
                            }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    width: 150,
                                    fontSize: 20,
                                    height: 50,
                                    color: '#ae3c6d'
                                }}>prev</Text>
                        </TouchableOpacity>
                    )}

                    {chapters?.length === 4 && (
                        <TouchableOpacity onPress={() =>/*'/mangas/' + manga._id  + */ setPagina(pagina + 1)} /*ver bien la ruta*/
                        style={{
                            textAlign: 'center',
                            width: 150,
                            height: 30,
                            color: 'rgb(245, 118, 184)'
                        }}>
                            <Text style={{
                                    textAlign: 'center',
                                    width: 150,
                                    fontSize: 20,
                                    height: 50,
                                    color: '#ae3c6d'
                                }}>next</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    </ImageBackground>
    )


}
export default MangaDetailsScreen