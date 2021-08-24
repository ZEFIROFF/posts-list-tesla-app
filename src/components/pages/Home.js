import React, {useMemo, useState} from 'react';
import AddPost from "../Posts/AddPost";
import addPost from "../../img/add.svg";
import PostList from "../Posts/PostList";
import PostFilter from "../Posts/PostFilter";

const Home = () => {
    const [posts, setPosts] = useState([
        {
            author: "CC Alan Ohnsman, Forbes Staff, \n Alan Ohnsman, Forbes Staff\n https://www.forbes.com/sites/alanohnsman/",
            title: "BB Fisker EV Plans For Underused Foxconn Site Hit Snag On Wisconsin Auto Sales Rules",
            description: "AA The Los Angeles startup intends to make low-cost electric vehicles in the U.S. with Foxconn as soon as late 2023.",
            publishedAt: "2021-08-09T15:59:35Z",
            href: 'https://www.businessinsider.com/elon-musk-mark-cuban-dogecoin-cryptocurrency-exchange-dallas-mavericks-2021-8',
            id: 1
        },
        {
            author: "BB GlobeNewswire",
            title: "AA New Energy Vehicle Taxi Market worth USD 176.95 Billion by 2027, registering a CAGR of 28.82% - Report by Market Research Future (MRFR)",
            description: "CC New York, Aug. 09, 2021 (GLOBE NEWSWIRE) -- New Energy Vehicle (NEV) Taxi Market Overview: According to a comprehensive research report by Market Research Future (MRFR), “New Energy Vehicle Taxi Market Research Report, Vehicle Type, Range Type, Vehicle Class,…",
            publishedAt: "2021-08-09T15:59:00Z",
            href: '',
            id: 2
        },
        {
            author: "AA Manish Nepal",
            title: "CC Why super consumers are the next marketing frontier: Eddie Yoon",
            description: "BB usage of a product or a brand than the average user. But although power users have some overlapping traits with super consumers, they are not the same. And that is exactly what Eddie dives deep into, in his book 'Superconsumers' and on The ABM Conversations P…",
            publishedAt: "2021-08-16T04:24:58Z",
            href: 'https://www.yaagneshwaran.com/blog/superconsumers/',
            id: 3
        },
        {
            author: "Angela Dennis",
            title: "Hackers caught offering money to employees to deploy ransomware | #cybersecurity | #cyberattack | #cybersecurity | #infosecurity | #hacker",
            description: "hackers caught offering,deploy ransomware,abnormal security,corporate workers,ransomware #cybersecurity #cyberattack,million,money to employees,employee,benefited hackers worldwide,kingdom and demon,employees to deploy,hacker quickly",
            publishedAt: "2021-08-20T20:15:00Z",
            href: "https://nationalcybersecurity.com/hackers-caught-offering-money-to-employees-to-deploy-ransomware-cybersecurity-cyberattack-cybersecurity-infosecurity-hacker/",
            id: 4
        }
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log(filter)
        if (filter.sort) {

            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedPostsAndSearched = useMemo(() => {
        console.log(sortedPosts)
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        let deleteArray = posts.filter(function (p) {
            return p.id !== post
        })
        setPosts(deleteArray)
    }

    return (
        <div className="my-5">

            <AddPost create={createPost}/>

            <form className="d-flex justify-content-between my-3">
                <PostFilter filter={filter} setFilter={setFilter}/>
                <div className="ml-3 d-flex align-items-center">
                    <div className="d-flex mx-2" data-bs-placement="bottom"
                         title="Here you can create posts in our application." data-bs-toggle="tooltip">
                        <button type="button" className="border-0 bg-white" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            <img src={addPost} alt="add post"/>
                        </button>
                    </div>
                </div>
            </form>

            <div className="news-list">
                <PostList remove={removePost} posts={sortedPostsAndSearched} title="Tesla news"/>
            </div>
        </div>
    );
};
export default Home;
