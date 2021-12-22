import React from 'react'
import Hardwood from "../services.jpg";
import Laminate from "../laminate.jpg";
import Carpet from "../carpet.jpg";
import Tile from "../tile.jpg";


const Services = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <img className="laminate" src={Hardwood} alt="Harwood"/>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1>Hardwood</h1>
          <h3>• Many types of patterns to fit any budget and styles</h3>
          <h3>• Precise laying of hardwood to ensure a quality finish</h3>
          <h3>• Proper framing around all types of obstructions</h3>
          <h3>• Trim installation</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="laminate-wrap">
            <img className="laminate" src={Laminate} alt="services"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="laminate-h1">Laminate</h1>
          <h3>• Correct preparation of door jams</h3>
          <h3>• Precise planning to have high quality finish</h3>
          <h3>• Specific installation of underlayment</h3>
          <h3>• Installation that will last through temperature and humidity </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="laminate-wrap">
            <img className="laminate" src={Carpet} alt="services"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="laminate-h1">Carpet</h1>
          <h3>• All types of carpet fibers: Triexta, nylon, polyester, olefin, and wool</h3>
          <h3>• Clean subfloor prior to installation</h3>
          <h3>• Precise installation of tackless strips to ensure proper fit</h3>
          <h3>• Ensuring precision trimming around obstacles</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="laminate-wrap">
            <img className="laminate" src={Tile} alt="services"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="laminate-h1">Tile</h1>
          <h3>• Professional preparation and installation</h3>
          <h3>• Grout work​</h3>
          <h3>• All types of tile: ceramic, porcelain, natural stone, mosaic, and glass tile</h3>
          <h3>• Excellent detail paying close attention to reference lines and spacers</h3>
          <h3>• Bathrooms, floors, walls, and back splashes</h3>
        </div>
      </div>
    </div>
  )
}

export default Services
