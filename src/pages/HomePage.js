/*import React from "react";

const HomePage = () => {
    return <h1>Dashboard</h1>;
};

export default HomePage;*/


import React from "react";
const HomePage = () =>{
    return(
        <div className="container">
          <div className="py-4">
              <h1>Dashboard</h1>  
              <table class="table">
                <thead>
                  <tr className="bg-dark text-white">
                    <th scope="col">No</th>
                    <th scope="col">Lokasi Barbershop</th>
                    <th scope="col">Nama Akun</th>
                    <th scope="col">Total Sesi</th>
                    <th scope="col">Total Service</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Jakarta Timur</td>
                    <td>elzania98</td>
                    <td>10 jam</td>
                    <td>9 Pelanggan</td>
                  </tr>
                  <tr>
                   <th scope="row">2</th>
                   <td>Bekasi 3</td>
                   <td>primde_elsa</td>
                   <td>10 jam 30 menit</td>
                   <td>8 Pelanggan</td>
                  </tr>
                  <tr>
                   <th scope="row">3</th>
                   <td> Bandung 2</td>
                   <td>jungkookie.97</td>
                   <td>11 jam</td>
                   <td>10 Pelanggan</td>
                  </tr>
               </tbody>
             </table>              
          </div> 
        </div>
    );
}

export default HomePage;