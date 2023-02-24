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
             navigate('../dashboard')



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
                        > {loading ? "Loading..." : "Let's Go!"}

                        </button>
                    </p>
                </div>
                </div>
                </div>


</div>
  )
}

export default Otp