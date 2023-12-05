'use client'

import { Tables } from "@/app/getContentfulData";
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react"
import style from './style.module.css'
import { FAQSummary } from "../FAQSummary";

interface FAQInterface {
    pergunta: string;
    resposta: string;
}

interface Categoria {
    nomeDaCategoria: string;
    perguntasDessaCategoria: Tables<FAQInterface>[]
}

interface FAQProps {
    categorias: Tables<Categoria>[],
}

export const FAQSection: React.FC<FAQProps> = ({
    categorias,
}) => {

    const [value, setValue] = useState(0);
    const [itemFAQ, setItemFAQ] = useState(categorias[0].fields.perguntasDessaCategoria)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <section className={`container`}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tabs example"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: '#8742ff'
                    }
                }}
                className={style.tabs}
            >
                {categorias.map((i) => (
                    <Tab
                        key={i.fields.nomeDaCategoria}
                        label={i.fields.nomeDaCategoria}
                        className={`${style.tab} regular-text`}
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                color: '#8742ff',
                            }
                        }}
                        onClick={() => setItemFAQ(i.fields.perguntasDessaCategoria)}></Tab>
                ))}
            </Tabs>
            <FAQSummary item={itemFAQ} />
        </section >
    )
}
