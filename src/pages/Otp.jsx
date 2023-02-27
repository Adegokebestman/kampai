import React, { useState,useEffect } from 'react';
import kanpai from '../data/kanpai.png';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const OTP_URL = "/auth/SendverificationCode";
const OTP_VERIFY = '/auth/VerifyVerificationCode'

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const email = localStorage.getItem('email');

  const navigate = useNavigate();
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
      };

      useEffect(() => {
        const verifyUser = async () => {
          try {
            const response = await axios.post(OTP_URL, {
              email,

            }, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              },
              data: {
                email
              }
            });
            console.log('sends request onMount:',response.data)
            setLoading(false);
          } catch (error){
            console.error(error);
            setLoading(false)
          }
        };
        verifyUser();
      }, [accessToken, email]);


      //handle OTP submition
      const handleSubmit = async (event) => {
        event.preventDefault();
        const code = otp.join('');
        console.log('otpCode:',code)
        // Validate OTP code
        if (/^\d{4}$/.test(code)) {
          try {
            setLoading(true);
            const response = await axios.post(OTP_VERIFY, {
              email,
              code
            }, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              },
            });
            console.log(response.data);

             // throw new Error('Failed to verify OTP');
             navigate('../login')



            setError(null);
          } catch (error) {
            setError('Failed to verify OTP');
          } finally {
           setLoading(false);
          }
        } else {
          setError('Please enter a valid 4-digit OTP code.');
        }
      };

  return (

    <div className='bg-[#FF7E20]  h-screen'>
	 <div className='pt-40'>
   <div className="row">
                <div className="col text-center">
                    <h2 className='text-2xl text-white font-semibold mb-10'>We Just Sent you a Code</h2>
        <img src={kanpai} style={{width:'190px'}} className="mb-10 block ml-auto mr-auto" />
        {error && <div className="font-bold text-lg text-red-600 error">{error}</div>}

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field p-5 w-14 h-14 rounded-xl border-white boxShadow m-5"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p hidden>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button hidden
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>

                        <button style={{background: 'linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)'}}
                            className=" w-3/12 p-3 mt-10 text-2xl font-semibold text-center rounded-sm text-white"
                           disabled={loading} onClick={handleSubmit}
                        > {loading ?
                        <span>
                         <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>verifying </span> : "Let's Go!"}

                        </button>
                    </p>
                </div>
                </div>
                </div>


</div>
  )
}

export default Otp