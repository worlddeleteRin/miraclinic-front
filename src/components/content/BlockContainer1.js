import { 
    defaultBlockContainerImage,
    defaultBlockContainerContent,
} from '@/helpers/content';

import ReactMarkdown from 'react-markdown';


function BlockContainer (props) {
    const imgSrc = props?.imgsrc ? props.imgsrc : defaultBlockContainerImage
    const content = props?.content ? prop.content : defaultBlockContainerContent

    const imageBlock = (
        <div
            className=""
        >
            <img
            className="object-contain max-h-[500px]"
                src={imgSrc}
            />
        </div>
    )
    const contentBlock = (
        <div className="tracking-wide font-light">
            <ReactMarkdown>
                { content }
            </ReactMarkdown>
        </div>
    )
    return (
        <div 
            className="max-w-screen-lg mx-auto px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
            { imageBlock }
            { contentBlock }
        </div>
    )
}

export default BlockContainer
