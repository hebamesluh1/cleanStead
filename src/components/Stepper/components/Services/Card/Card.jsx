import React, { useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'


const Card = ({ title, subtitle }) => {
    const [openSubTitle, setOpenSubTitle] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [counters, setCounters] = useState(0);

    const toggleSubTitle = () => {
        setOpenSubTitle(!openSubTitle)
    }
    const toggleShowDetails = () => {
        setShowDetails(!showDetails);
    }
    const addCounter = () => {
        setCounters((prev) => prev + 1)
    }
    const minusCounter = () => {
        if (counters > 0) {
            setCounters((prev) => prev - 1)
        }
    }
    return (
        <div className='border border-borderColor my-3 rounded-2xl p-3'>
            <div className='flex justify-between'>
                <div className="title text-lg">
                    {title}
                </div>
                <div className="showmore flex items-center gap-[10px] cursor-pointer" onClick={toggleSubTitle}>
                    {openSubTitle ?
                        <>
                            <MdOutlineExpandMore className='text-btnColor' />
                            <h3 className='text-btnColor'>
                                عرض أقل
                            </h3>
                        </>
                        :
                        <>
                            <MdOutlineExpandMore className='text-btnColor' />
                            <h3 className='text-btnColor'>
                                رؤية الخدمات
                            </h3>
                        </>
                    }
                </div>
            </div>
            {openSubTitle &&
                <div className='border-t border-solid border-borderColor my-3'>
                    {subtitle.map((item) => (
                        <div className="subtitle border border-borderColor my-3 rounded-2xl p-3">
                            <div className='flex justify-between items-center'>
                                <div className="checkbox">
                                    <label className='flex align-items justify-center items-center gap-[10px] '>
                                        <input type="checkbox" />
                                        <img src={item.img} alt="" width="80px" height="80px" className='rounded-2xl' />
                                        <h4>{item.subtitles}</h4>
                                    </label>
                                </div>
                                <div className="price">
                                    {item.price}$
                                </div>
                                <div className="counter flex items-center gap-[10px]">
                                    <button className='text-iconsColor bg-footerBg buttonStyle' onClick={addCounter}>+</button>
                                    <p className='border border-footerBg buttonStyle '>{counters}</p>
                                    <button className='text-iconsColor bg-footerBg buttonStyle ' onClick={minusCounter}>-</button>
                                </div>
                                <div className="showDetails flex items-center gap-[10px] cursor-pointer" onClick={toggleShowDetails}>
                                    {
                                        showDetails ? <>
                                            <MdOutlineExpandMore className='text-btnColor' />
                                            <h3 className='text-btnColor'>عرض أقل</h3>
                                        </> :
                                            <>
                                                <MdOutlineExpandMore className='text-btnColor' />
                                                <h3 className='text-btnColor'>رؤية التفاصيل</h3>
                                            </>
                                    }
                                </div>
                            </div>
                            {
                                showDetails && <div className='pt-4'>
                                    <h4 className='text-sm text-textColor my-2'>العناصر التي ستيم تنظيفها في هذه الغرفة</h4>
                                    <ul className='text-sm list-disc my-2 p-4 leading-8'>
                                        {item.details.map((singleItem) => (
                                            <li>{singleItem.detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Card

