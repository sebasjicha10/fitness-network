import React from 'react'
import { FlatList } from 'react-native'

import Row from "./Row"
import { posts } from "../posts"

const Posts = () => {

    const renderPost = ({ item }) => (
        <Row {...item} />
    )

    return (
        <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={item => item.postID}
        />
    )
}

 
export default Posts