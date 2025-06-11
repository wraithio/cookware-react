import React from 'react'

const FooterComponent = () => {
  return (
    <div className='md:mt-12 bg-green-950 xl:py-20 py-12 px-4 text-white xl:text-2xl gap-8 md:text-xl text-sm'>
        <div className="flex xl:gap-0 gap-3">
            <div className="col-8">
                <div className="flex xl:text-2xl gap-8 md:text-xl text-sm text-start">
                    {/* <div className="flex flex-col gap-4">
                        <h3><b>ABOUT OUR HOME</b></h3>
                        <h3>ABOUT US</h3>
                        <h3>CAREERS</h3>
                        <h3>PRIVACY</h3>
                        <h3>MEDIA AND RELATIONS</h3>
                    </div> */}
                    <div className="flex flex-col gap-4">
                    <h3><b>PRODUCTS</b></h3>
                        <h3>COOKWARE</h3>
                        <h3>BAKEWARE</h3>
                        <h3>BEST SELLERS</h3>
                        <h3>ACCESSORIES</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                    <h3><b>CUSTOMER SERVICE</b></h3>
                        <h3>CONTACT US</h3>
                        <h3>ORDER STATUS</h3>
                        <h3>RETURN AND EXCHANGES</h3>
                        <h3>FAQS</h3>
                    </div>
                </div>
            </div>
            <div className="col-4 flex flex-col gap-3 xl:text-2xl text-md text-start ">
                <h3>Subscribe to our newsletter to be the first to know about new products and special events!</h3>
                <input type="text" placeholder='Enter email address' className='xl:text-lg text-sm w-full md:w-[75%]' />
                <button className="w-fit text-start border-2 border-white text-white bg-transparent px-8 py-2 hover:text-green-950 hover:bg-white">SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent