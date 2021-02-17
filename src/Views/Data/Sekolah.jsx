import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import useDarkMode from "../../Const/useDarkMode";

function Sekolah(props) {
  const [theme] = useDarkMode();
  return (
    <div className="accordion" id="accordionExample">
      <div className={`accordion-item border-bottom ${theme}-theme`}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.kode}`}
          >
            {props.judul}
          </button>
        </h2>
        <div id={props.kode} className="accordion-collapse collapse">
          <div className="accordion-body">
            <h6 className="fw-bold">NPSN</h6>
            <span className="text-muted">{props.npsn}</span>
          </div>
          <div className="accordion-body">
            <h6 className="fw-bold">Bentuk Sekolah</h6>
            <span className="text-muted">{props.bentuk}</span>
          </div>
          <div className="accordion-body">
            <h6 className="fw-bold">Status Sekolah</h6>
            <span className="text-muted">{props.status}</span>
          </div>
          <div className="accordion-body">
            <h6 className="fw-bold">Alamat Sekolah</h6>
            <span className="text-muted">{props.alamat}</span>
          </div>
          <div className="accordion-body">
            <h6 className="fw-bold">Provinsi Sekolah</h6>
            <span className="text-muted">{props.propinsi}</span>
          </div>
          <div className="accordion-body">
            <h6 className="fw-bold">Kabupaten Sekolah</h6>
            <span className="text-muted">{props.kabupaten}</span>
          </div>
          <div className="accordion-body">
            <h6 className="fw-bold">Kecamatan Sekolah</h6>
            <span className="text-muted">{props.kecamatan}</span>
          </div>
          <div className="accordion-body">
            <a
              className="btn"
              href={`https://www.google.com/maps/search/?api=1&query=${props.lintang},${props.bujur}`}
              target="blank"
              role="button"
            >
              CARI ALAMAT <FaMapMarkedAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sekolah;
