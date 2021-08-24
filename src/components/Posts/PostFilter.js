import React from 'react';
import grid from "../../img/menu.svg";
import search from "../../img/search.svg";
import Select from "../Sort/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="d-flex flex-md-nowrap w-100 justify-content-between">
            <div className="input-group d-flex w-75 mx-2">
                <input value={filter.query}
                       onChange={e => setFilter({...filter, query: e.target.value})} type="text" className="form-control border border-primary" placeholder="Search news" aria-label="Имя пользователя"
                       aria-describedby="basic-addon1"/>
                <span className="input-group-text bg-white border-primary" id="basic-addon1"><img src={search} alt="search"/></span>
            </div>
            <div className="d-flex align-items-center mx-4">
                <div className="mx-2">
                    <img src={grid} alt="grid"/>
                </div>
                <Select value={filter.sort}
                        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                        defaultValue="Sort at:"
                        options={[
                            {value: 'title', name: "Title"},
                            {value: 'description', name: "Description"},
                            {value: 'author', name: "Author"},
                        ]}/>
            </div>
        </div>
    );
};

export default PostFilter;
