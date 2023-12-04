import React from 'react';
import {PagesType} from "../../data/dataState";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import { Error404 } from './Error404';

type PropsType ={
    pages: PagesType[]
}


export const Page: React.FC<PropsType> = ({pages}) => {

    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const onBackClickHandler =()=> {
        navigate(-1)
    }

    const onMainClickHandler = () => {
      navigate("/page/0")
    }


    return (




    <div>
        {location.pathname === '/page/0' && <div>SECRET TEXT</div>}
        {pages[Number(params.id)] ?
            <div>
                <div>{pages[Number(params.id)].heading}</div>
                <div>{pages[Number(params.id)].about}</div>
                <div>
                    <button onClick={onBackClickHandler}>back</button>
                    <button onClick={onMainClickHandler}>main</button>
                </div>

            </div>

        : <Navigate to={'/page/error'}/>


        }
        {/*<div>{pages[Number(params.id)].heading}</div>*/}
        {/*<div>{pages[Number(params.id)].about}</div>*/}
    </div>


    );
};

