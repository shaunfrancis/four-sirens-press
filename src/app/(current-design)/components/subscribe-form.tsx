"use client";

import Image from 'next/image';
import { useState } from 'react';

const genres : { title : string, value : string }[] = [];/*[
    { title: "Rom-Com", value: "romcom" },
    { title: "Crime", value: "crime" },
    { title: "Historical", value: "historical" },
    { title: "Thriller", value: "thriller" },
    { title: "Dystopia", value: "dystopia" },
    { title: "Women's Fiction", value: "womensfiction" }
]*/

export default function SubscribeForm(){
    const [checked, setChecked] = useState<string[]>([]);

    const toggleCheckbox = (value : string) => {
        const newChecked : string[] = checked.slice();
        const index = newChecked.indexOf(value);
        if(index != -1) newChecked.splice(newChecked.indexOf(value), 1);
        else newChecked.push(value);

        setChecked(newChecked);
    };

    return(
        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src="/mail.jpg" alt="The Four Sirens Press newsletter being read on a tablet device" width={450} height={270} />
                </div>
                <div className="split-section-item">
                    <h2>Join Our Reader List</h2>
                    <p>Thank you for your interest in Four Sirens Press. We send out a newsletter every month containing all the latest news, cover reveals and behind-the-scenes peeks.</p>
                    <form id="subscribe-form" action="https://foursirenspress.us17.list-manage.com/subscribe/post" method="POST">
                        <input type="hidden" name="u" value="ff32ef21c73b8b7b916bf228e" />
                        <input type="hidden" name="id" value="ad64729692" />
                        <input type="email" name="MERGE0" placeholder="Email address" />
                        <input type="text" name="MERGE1" placeholder="Name" />
                        <div className="checkbox-containers" data-input="genres-input">
                        {
                            genres.map( ({title, value}, i) => {
                                return (
                                    <div key={i} className="checkbox-container" onClick={() => { toggleCheckbox(value) }}>
                                        <div className={"checkbox" + (checked.indexOf(value) != -1 ? " checked" : "")} data-value={value}></div>
                                        <div className="checkbox-label">{title}</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <input type="hidden" id="genres-input" name="MERGE3" value={ checked.join(";") }/>
                        <input type="submit" className="link-button" value="Join Now" />
                    </form>
                </div>
            </div>
            </section>
    )
}