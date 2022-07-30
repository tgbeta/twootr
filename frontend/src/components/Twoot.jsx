import React, { useState } from 'react';
import axios from "axios";

export default function Twoot(props) {

    return (
        <section>
            <div>
                <h2>Compose Twoot</h2>
                <p>What are you humming about?</p>
                <input type='text' name='description' />
                <button>Twoot</button>
                <p>Character Count</p>
            </div>
        </section>
    );
}
