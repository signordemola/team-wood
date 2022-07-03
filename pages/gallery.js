import React from 'react'
import { createClient } from 'contentful'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'woods' })

    return {
        props: {
            woods: res.items
        }
    }

}

// const {title, slug, thumbnail} = wood.fields

const Gallery = ({woods}) => {
    

  return (
    <div className='bg-secondary text-white'>
        <div className='text-xl md:text-2xl lg:text-3xl font-light py-8 px-28 text-main'>
            My Latest Works:
        </div>
        <div  className='container mx-auto p-8 grid md:grid-cols-2 gap-10 tracking-wider font-semibold font-poppins'>
            {woods.map(wood => (
                <div key={wood.sys.id}>
                    <div>
                        <div className='mt-6 border-2 rounded-md border-main'>
                            <div>
                            <Image 
                                src={'https:' + wood.fields.thumbnail.fields.file.url}
                                width={800} height={800}
                                className='object-cover object-center'
                                alt='wood'
                            />
                            </div >
                            <p className='text-xl uppercase text-center py-6 bg-main'>{wood.fields.title}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Gallery