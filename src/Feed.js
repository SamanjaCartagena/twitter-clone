import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>
            <TweetBox/>
            <Post displayName="Sonny Sangha"
            username='sssangha' verified='true'
            text='Yoo its working'
            avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            image="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg"
            
            
            />
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}

export default Feed
