import { AccordionDetails } from "@mui/material";
import style from './style.module.css';
import React from "react";

export const FAQDetails: React.FC<{ item: string }> = ({ item }) => {
    const resposta = item.split('\n')

    function isNumberOrHyphen(texto: string) {
        const padrao = /^[\d-]/;
        return padrao.test(texto);
    }

    function isHyphen(texto: string) {
        const padrao = /^-/;
        return padrao.test(texto);
    }

    function renderElement(match: string): JSX.Element {
        if (match.startsWith('__') && match.endsWith('__')) {
            return <strong>{match.slice(2, -2)}</strong>;
        } else if (match.startsWith('*') && match.endsWith('*')) {
            return <em>{match.slice(1, -1)}</em>;
        } else if (match.startsWith('~~') && match.endsWith('~~')) {
            const link = match.slice(2, -2);
            return <a href={link} target="_blank" className={style.underline}>{link}</a>;
        }
        return <>{match}</>;
    }

    return (
        <AccordionDetails className={`regular-text--small ${style.accordion_details}`}>
            {resposta.map((i, index) => (
                <p key={index} className={
                    `
                    ${isNumberOrHyphen(i) ? style.p_numero : isHyphen(resposta[index - 1]) ? style.p_hifen : i == resposta[resposta.length - 2] ? style.p_no_margin : style.p}`
                }
                >
                    {i.split(/(__.*?__|\*.*?\*|~~.*?~~)/g).map((segment, idx) => (
                        <React.Fragment key={idx}>
                            {renderElement(segment)}
                        </React.Fragment>
                    ))}
                </p>
            ))}
        </AccordionDetails>
    )
}
