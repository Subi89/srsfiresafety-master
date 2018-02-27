import React, { Component } from 'react';
import {SideMenu} from 'react-sidemenu';
import sidemenuStyles from '../../node_modules/react-sidemenu/dist/react-sidemenu.min.css';

const style = {
    background: 'black',
    display: 'inline-block',
    maxWidth: '300px',
    margin: '0 0 1vh 0',
    height: 'auto',
    borderRadius: '15px',
    position: 'absolute',
    overflow: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
};

const items = [
    {divider: true, label: 'Our Products', value: 'main-nav'},
    {label: 'Fire Extinguishers', value: 'fireExtinguishers', icon: 'fa-fire-extinguisher',
        children: [
            {label: 'Powder Fire Extinguishers', value: 'powderFireExtinguishers'},
            {label: 'Clean Agent Fire Extinguishers', value: 'cleanAgentFireExtinguishers'},
            {label: 'Water Fire Extinguishers', value: 'waterFireExtinguishers'},
            {label: 'Foam Fire Extinguishers', value: 'foamFireExtinguishers'},
            {label: 'Carbon dioxide Fire Extinguishers', value: 'carbonDioxideFireExtinguishers'},
            {label: 'Water Mist Fire Extinguishers', value: 'waterMistFireExtinguishers'},
            {label: 'Backup Trolley Mount Fire Extinguishers', value: 'backupTrolleyFireExtinguishers'},
            {label: 'Automatic Fire Extinguishers', value: 'automaticFireExtinguishers'}
        ]
    },
    {label: 'Fire Hydrant System', value: 'fireHydrantSystem', icon: 'fa-automobile',
        children: [
            {label: 'Yard Fire Hydrant System', value: 'yardFireHydrantSystem'},
            {label: 'Hose Reel System', value: 'hoseReelSystem'},
            {label: 'Down Corner System', value: 'downCornerSystem'},
            {label: 'Dry Riser System', value: 'dryRiserSystem'},
            {label: 'Wet Riser System', value: 'wetRiserSystem'},
            {label: 'Automatic Sprinkler System', value: 'automaticSprinklerSystem'}
        ]
    },
    {label: 'Smoke And Fire Detection System', value: 'smokeAndFireDetectionSystem', icon: 'fa-automobile',
        children: [
            {label: 'Conventional Fire Alarm System', value: 'conventionalFireAlarmSystem'},
            {label: 'Addressable Fire Alarm System', value: 'addressableFireAlarmSystem'},
            {label: 'Stand Alone Fire Alarm System', value: 'standAloneFireAlarmSystem'}
        ]
    },
    {label: 'Escape Signs And Lighting System', value: 'escapeSignsAndLightingSystem', icon: 'fa-automobile',
        children: [
            {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
            {label: 'LED Sign Boards', value: 'ledSignBoards'},
            {label: 'Normal Sign Boards', value: 'normalSignBoards'},
            {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Personal Protective Equipments', value: 'safetySuits', icon: 'fa-automobile',
        children: [
            {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
            {label: 'LED Sign Boards', value: 'ledSignBoards'},
            {label: 'Normal Sign Boards', value: 'normalSignBoards'},
            {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Suppression Systems', value: 'escapeSignsAndDirectionalLightingSystem', icon: 'fa-automobile',
        children: [
            {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
            {label: 'LED Sign Boards', value: 'ledSignBoards'},
            {label: 'Normal Sign Boards', value: 'normalSignBoards'},
            {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Safety Suits', value: 'safetySuits', icon: 'fa-automobile',
        children: [
            {label: 'Boiler Suits', value: 'boilerSuits'},
            {label: 'Industrial Suits', value: 'industrialSuits'},
            {label: 'Fire Suits', value: 'fireSuits'}
        ]
    },
    {label: 'Personal Protective Equipment', value: 'personalProtetiveEquipment', icon: 'fa-automobile',
        children: [
            {label: 'Head Protection', value: 'headProtection'},
            {label: 'Eye Protection', value: 'eyeProtection'},
            {label: 'Ear Protection', value: 'earProtection'},
            {label: 'Face Protection', value: 'faceProtection'},
            {label: 'Hand Protection', value: 'handProtection'},
            {label: 'Leg Protection', value: 'legProtection'}
        ]
    },
    {label: 'Suppression System', value: 'suppressionSystem', icon: 'fa-automobile',
        children: [
            {label: 'Gas Suppression System', value: 'gasSuppressionSystem'},
            {label: 'Kitchen Suppression System', value: 'kitchenSuppressionSystem'},
            {label: 'Water Mist Suppression System', value: 'waterMistSuppressionSystem'}
        ]
    },
    {divider: true, label: 'Our Services', value: 'other'},
    {label: 'Fire safety Consultant', value: 'fireSafetyConsultant', icon: 'fa-beer'},
    {label: 'Fire NOC Approval', value: 'fireNocApproval', icon: 'fa-beer'},
    {label: 'Fire License Approval', value: 'fireLicenseApproval', icon: 'fa-beer'},
    {label: 'Fire Hydrant Drawing', value: 'fireHydrantDrawing', icon: 'fa-beer'},
    {label: 'Fire Training Certification', value: 'fireTrainingCertification', icon: 'fa-beer'},
    {label: 'Live Fire Extinguisher Demo', value: 'liveFireExtinguisherDemo', icon: 'fa-beer'},
    {divider: true, label: 'Other', value: 'other'},
    {label: 'About Us', value: 'aboutUs', icon: 'fa-beer'},
    {label: 'Contact Us', value: 'contactUs', icon: 'fa-beer'}
];

class sidemenu extends Component {
    render() {
        return(
            <div style={style}>
                <div className={"sidemenuStyles.Side-menu"}>
                    <SideMenu items={items}/>
                </div>
            </div>
        );
    }
}

export default sidemenu;