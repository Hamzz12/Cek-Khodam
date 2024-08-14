  // import axios from 'axios'
  // import { useState } from 'react'
  import Swap from './Components/Swap'
  import Swal from 'sweetalert2'

  
  function App() {

    // const [data, setData] = useState([])  
    // const HandleCek = () => {

    //     axios.get("http://localhost:8082/")
    //     .then((res) => {
    //         console.log(res.data)
    //         setData(res.data)

    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     }) 
    //     {data.map((user) => {
    //      Swal.fire({
    //        title: "Selamat",
    //        html: `Khodam Anda Adalah ${user.nama.bold()}`,
    //        icon: "success",
    //      })
    //     })}
        
    //   }
    const HandleCek = ()=> {
    const name = document.querySelector('#name').value
    const namaKhodam = [
      'Katak Beracun',
      'Kelinci Bersayap',
      'Kuda Terbang',
      'Sapi Betina',
      'Kambing Hitam',
      'Cacing Anggora',
      'Kupu Kupu Imut',
      'Babi Tobrut',
      'Kucing Belang',
      'Sapi Qurban',
      'Teringgiling Imut',
      'Macan Ompong',
      'Singa Autis',
      'Tutup Panci',
      'Rawa Rontek',
      'Karbu Rusak',
      'Knalpot Rusak',
      'Bungkus Semen',
      'Naga Emas',
      'Tobrut Jahat',
      'Tobrut Baik',
      'Buaya Putih',
      'Tutup Termos'
    ]
    const randomText = Math.floor(Math.random() * namaKhodam.length)
    const resultText = namaKhodam[randomText]
    const khodam = `Khodam Anda Adalah ${resultText.bold()}` 
    

    Swal.fire({
             title: `Selamat ${name.toUpperCase()}`,
             html: `${khodam}`,
             icon: "success",
           })

    
    }
    



    return (
      <div>
        <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost text-xl">Cek Khodam Online</a>
    </div>
    <div className="navbar-end">
    <Swap />
    </div>
  </div>

  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max">
      <h1 className="text-5xl font-bold mb-10">CEK KHODAM ONLINE GRATIS</h1>
      <input id="name"type="text" placeholder="Masukkan Nama Anda di sini" className="input input-bordered w-full max-w-md rounded-lg mx-2 my-10" />
    <button className="btn btn-primary font-bold" type='submit' onClick={()=>{HandleCek()}}>Cek Khodam</button>
    <br />
    <progress className="progress w-56"></progress>
    <p>Cek Khodam BY Ilham Maulana</p>
      </div>  
    </div>
  </div>
      </div>
    )
  }

  export default App
