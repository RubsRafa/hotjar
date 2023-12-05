import { Tables } from "@/app/getContentfulData"
import { Accordion, AccordionSummary } from "@mui/material"
import style from './style.module.css'
import { ExpandMore } from "@mui/icons-material";
import { FAQDetails } from "../FAQDetails";
import { useState } from "react";

interface FAQInterface {
    pergunta: string;
    resposta: string;
}

export const FAQSummary: React.FC<{ item: Tables<FAQInterface>[] }> = ({ item }) => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

    const handleAccordionChange = (pergunta: string) => {
        setExpandedItems((prevExpanded) => ({
            ...prevExpanded,
            [pergunta]: !prevExpanded[pergunta] // Inverte o valor do estado para o Accordion específico
        }));
    };
    return (
        <div className={style.remove_border}>
            {item.map((i) => (
                <Accordion
                    key={i.fields.pergunta}
                    disableGutters={true}
                    expanded={expandedItems[i.fields.pergunta] || false}
                    onChange={() => handleAccordionChange(i.fields.pergunta)}
                    className={style.box}
                >
                    <AccordionSummary
                        className={`${expandedItems[i.fields.pergunta] ? 'regular-text' : 'regular-text--small'} ${style.accordion_summary}`}
                        expandIcon={<ExpandMore className={style.expand_icon} sx={{ color: '#020202', fontSize: '1.5rem' }} />}
                    >
                        <span className={style.question_box}>
                            {expandedItems[i.fields.pergunta] ?
                                <strong>{i.fields.pergunta}</strong> :
                                i.fields.pergunta
                            }
                        </span>
                    </AccordionSummary>
                    <FAQDetails item={i.fields.resposta} />
                </Accordion >
            ))}
        </div>
    )
}