import { useEffect, useState } from "react"
import SpacesApi from "../Api/baseUrl/spacesApi"

const Rightcards = () => {

  const [populars, setPopulars] = useState([]);
  const [emailData, setEmailData] = useState({
    email: '',
  });
  const [error, setError] = useState({
    email: '',
  })

  const fetchPopular = async () => {
    const response = await SpacesApi.blogs.populartopics
    setPopulars(response.data)
    // console.log(response.data)
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmailData({
      ...emailData,
      [id]: value,
    });
  }

  const handleSubscribe = async (e) => {
    e.preventDefault();

    let valid = true;
    const newError = {...error}

    if(!emailData.email || !emailData.email.includes('@')){
      newError.email = "Enter a valid Email address"
      valid = false;
    }else {
      newError.email = "";
    }
    setError(newError);

    if(valid){
      SpacesApi.subscribe.sub(emailData)
      .then(response => {
        alert(response.data)
      }).catch(error => {
        alert(error.message)
        // console.log(error)
      })
    }

  }

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div className="w-full ml-2 lg:w-1/3">
      <div className="mb-4">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
        <ul>
          {populars.map((popular, index) => (
            <li key={index} className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
              <div className="flex items-center text-gray-600 cursor-pointer">
                <span className="inline-block h-4 w-4 bg-gray-600 mr-3"></span>
                {popular}
                <span className="text-gray-500 ml-auto"></span>
                <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-dotted">

        {/* subscribe */}
        <div className="p-1 mt-4 mb-4">
          <h5 className="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
          <p className="text-gray-600">
            Subscribe to our newsletter. We deliver the best health related articles to your inbox
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              onChange={handleChange}
              value={emailData.email}
              id="email"
              placeholder="your email address"
              className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            <button
              className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div >
  )
}
export default Rightcards
