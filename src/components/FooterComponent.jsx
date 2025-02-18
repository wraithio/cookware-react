import React from 'react'

const FooterComponent = () => {
  return (
    <div className='mt-12 bg-green-950 py-20 text-white'>
        <div className="row">
            <div className="col-8">
                <div className="row">
                    <div className="col-4 flex flex-col gap-4">
                        <h3 className='text-3xl text-start'><b>ABOUT OUR HOME</b></h3>
                        <h3 className='text-3xl text-start'>ABOUT US</h3>
                        <h3 className='text-3xl text-start'>CAREERS</h3>
                        <h3 className='text-3xl text-start'>PRIVACY</h3>
                        <h3 className='text-3xl text-start'>MEDIA AND RELATIONS</h3>
                    </div>
                    <div className="col-4 flex flex-col gap-4">
                    <h3 className='text-3xl text-start'><b>PRODUCTS</b></h3>
                        <h3 className='text-3xl text-start'>COOKWARE</h3>
                        <h3 className='text-3xl text-start'>BAKEWARE</h3>
                        <h3 className='text-3xl text-start'>BEST SELLERS</h3>
                        <h3 className='text-3xl text-start'>ACCESSORIES</h3>
                    </div>
                    <div className="col-4 flex flex-col gap-4">
                    <h3 className='text-3xl text-start'><b>CUSTOMER SERVICE</b></h3>
                        <h3 className='text-3xl text-start'>CONTACT US</h3>
                        <h3 className='text-3xl text-start'>ORDER STATUS</h3>
                        <h3 className='text-3xl text-start'>RETURN AND EXCHANGES</h3>
                        <h3 className='text-3xl text-start'>FAQS</h3>
                    </div>
                </div>
            </div>
            <div className="col-4 flex flex-col gap-3">
                <h3 className='text-2xl text-start'>Subscribe to our newsletter to be the first to know about new products and special events</h3>
                <input type="text" placeholder='Enter email address' />
                <button className="hover:text-green-950 hover:bg-white w-fit text-start border-2 border-white text-white bg-transparent  px-8 py-2">SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent