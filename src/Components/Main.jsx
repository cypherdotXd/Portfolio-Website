import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react'
import ImagePage from './ImagePage';

export default function Main() {

	return (
		<main className={`p-6 mb-12 absolute top-0 left-0 right-0 bg-[#080202] text-slate-200 rounded-xl font-sans`}>
      <h1 className="text-2xl font-bold mb-4"> My Games</h1>
			<ul>
				<li> <ImagePage/> </li>
				<li> <ImagePage/> </li>
				<li> <ImagePage/> </li>
			</ul>
    </main>
	)
}
