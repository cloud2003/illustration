import React, {ReactElement} from "react";
import {
    FaPuzzlePiece,
    FaRadiation,
    FaRadiationAlt,
    FaSatelliteDish,
    FaSave,
    FaScrewdriver,
    FaScroll,
    FaSearchDollar,
    FaSpider,
    FaStamp,
    FaStar,
    FaUnlock,
    FaSync,
    FaSyringe,
    FaTable,
    FaRoad,
    FaTableTennis,
    FaUsers,
    FaWalking,
    FaRing,
    FaRobot,
    FaRocket,
    FaSchool,
    FaTaxi,
    FaTeeth,
    FaTenge,
    FaTimes,
    FaUserMd
} from "react-icons/fa";
import {ListContainer, BtnIcon} from "./styles";
import {TooltipBox} from "./styles";

export const MenuView = (): ReactElement => {
    const menuItems = [
        { icon: <FaPuzzlePiece />, title: 'Puzzle' },
        { icon: <FaWalking />, title: 'Walking' },
        { icon: <FaUsers />, title: 'Users' },
        { icon: <FaSpider />, title: 'Spider' },
        { icon: <FaStamp />, title: 'Stamp' },
        { icon: <FaStar />, title: 'Star', },
        { icon: <FaSatelliteDish />, title: 'SatelliteDish' },
        { icon: <FaSave />, title: 'Save' },
        { icon: <FaScrewdriver />, title: 'Screwdriver' },
        { icon: <FaScroll />, title: 'Scroll' },
        { icon: <FaSearchDollar />, title: 'SearchDollar' },
        { icon: <FaRadiationAlt />, title: 'RadiationAlt' },
        { icon: <FaRing />, title: 'Ring' },
        { icon: <FaRoad />, title: 'Road' },
        { icon: <FaRobot />, title: 'Robot' },
        { icon: <FaRocket />, title: 'Rocket' },
        { icon: <FaRadiation />, title: 'Radiation' },
        { icon: <FaUnlock />, title: 'Unlock' },
        { icon: <FaSync />, title: 'Sync' },
        { icon: <FaSyringe />, title: 'Syringe' },
        { icon: <FaTableTennis />, title: 'TableTennis' },
        { icon: <FaTable />, title: 'Table' },
        { icon: <FaSchool />, title: 'School' },
        { icon: <FaTaxi />, title: 'Taxi' },
        { icon: <FaTeeth />, title: 'Teeth' },
        { icon: <FaTenge />, title: 'Tenge' },
        { icon: <FaTimes />, title: 'Times' },
        { icon: <FaUserMd />, title: 'UserMd' },
    ];

    return (
        <ListContainer>
            {menuItems.map((item, index) => {
                return (
                    <BtnIcon
                        key={index}
                        className="btn-icon"
                    >
                        {item.icon}
                        <TooltipBox className="tooltip">{item.title}</TooltipBox>
                    </BtnIcon>
                );
            })}
        </ListContainer>
    );
};
