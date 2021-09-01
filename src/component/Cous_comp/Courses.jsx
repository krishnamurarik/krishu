import React from 'react'
import Home from "../Home"
import Card from "./Card"
import html from "./img/html.png"
import css from "./img/css.jpg"
import bootstrap from "./img/bootstrap.png"
import mt from "./img/mt-css.png"
import js from "./img/JS.png"
import jquery from "./img/jquery.jpg"
import angular from "./img/anguler.png"
import react from "./img/react_js.png"
import vue from "./img/vue.jpg"
import node from "./img/node.jpg"
import deno from "./img/deno.jpg"
import mongo from "./img/mongo.png"
import php from "./img/php.jpg"
import ci from "./img/ci.jpg"
import lareval from "./img/lareval.png"
import mysql from "./img/mysql.jpg"
import paython from "./img/pathon.jpg"
import django from "./img/django.jpg"
import Footer from "../Footer"
import Bg from "./bg_image"
import Basic from "../Our_Basice"

function Courses() {
    return (
        <>
        <Home/>
        <Bg/>
        <div className="container-fluid mb-5  Card-bg">
        <div className="container py-3">
            <div className="row">
            <Basic Course="All Courses"   />
            <Card img={html} heding="html " />
            <Card img={css} heding="css " />
            <Card img={bootstrap} heding="bootstrap " />
            <Card img={mt} heding="MATERIALIZE CSS " />
            <Card img={js} heding="JS" />
            <Card img={jquery} heding="jquery" />
            <Card img={angular} heding="angular" />
            <Card img={react} heding="react js " />
            <Card img={vue} heding="vue  js " />
            <Card img={node} heding="node js " />
            <Card img={deno} heding="deno js " />
            <Card img={mongo} heding="mongo js" />
            <Card img={php} heding="php " />
            <Card img={ci} heding="ci framwork " />
            <Card img={lareval} heding="lareval " />
            <Card img={mysql} heding="mysql database " />
            <Card img={paython} heding="paython " />
            <Card  heding="django" img={django} />
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default Courses
