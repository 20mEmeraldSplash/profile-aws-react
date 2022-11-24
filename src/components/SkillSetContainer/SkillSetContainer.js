import React, { Component } from 'react';
import sword_icon from "../../img/icon/ButtonIcons/sword.png";
import "./SkillSetContainer.css";

export default class SkillSetContainer extends Component {
    render(){
        return (
            <div className='SkillSetBox'>
                <div className='SkillSetTitle'>
                    <img src={sword_icon} alt="heart" height="100%"/>
                    SKILL SET
                    <img src={sword_icon} alt="heart" height="100%" className='flip-horizontally'/>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> Python </div>
                    <div className='SkillBar1' style={{width: '50%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> JavaScript/TypeScript </div>
                    <div className='SkillBar2' style={{width: '45%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> JAVA </div>
                    <div className='SkillBar3' style={{width: '30%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> HTML/CSS/SASS/SCSS </div>
                    <div className='SkillBar1' style={{width: '45%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> Angular </div>
                    <div className='SkillBar2' style={{width: '30%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> React JS </div>
                    <div className='SkillBar3' style={{width: '33%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> GitHub </div>
                    <div className='SkillBar1' style={{width: '50%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> Adobe XD </div>
                    <div className='SkillBar2' style={{width: '50%'}}></div>
                </div>
                <div className='SkillRow'>
                    <div className='SkillName'> Digital Painting </div>
                    <div className='SkillBar3' style={{width: '50%'}}></div>
                </div>
                
            </div>
        );
    }
}