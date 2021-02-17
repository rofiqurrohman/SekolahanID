import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "../Const/api";
import Sekolah from "./Data/Sekolah";
import useDarkMode from "./../Const/useDarkMode";

function Search() {
  const [theme] = useDarkMode();
  const [wilayah, setWilayah] = useState([]);
  const [kodewilayah, setKodewilayah] = useState("");
  const [tingkatan, setTingkatan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataSekolah, setDataSekolah] = useState([]);
  const [search, setSearch] = useState(null);

  const getWilayah = async () => {
    setIsLoading(true);
    try {
      let { data } = await axios.get("/wilayah");
      const wil = data.data;
      const optionsWilayah = wil.map((d) => ({
        value: d.kode_wilayah,
        label: d.nama,
      }));
      setWilayah(optionsWilayah);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  const getDataSekolah = async () => {
    setIsLoading(true);
    try {
      let res = await axios.get(
        `/sekolah?kode_wilayah=${kodewilayah.trim()}&bentuk=${tingkatan}`
      );
      setDataSekolah(res.data.data);
      setIsLoading(false);
      setSearch(null);
    } catch (e) {
      setIsLoading(false);
    }
  };

  const Jenjang = [
    { value: "sd", label: "SD" },
    { value: "smp", label: "SMP" },
    { value: "sma", label: "SMA" },
    { value: "smk", label: "SMK" },
  ];

  const filterValue = (inputValue) => {
    return wilayah.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterValue(inputValue));
      }, 1000);
    });

  const handleChangeWilayah = (e) => {
    setKodewilayah(e.value);
  };
  const handleChangeTingkatan = (e) => {
    setTingkatan(e.value);
  };

  const searchSekolah = dataSekolah
    .filter((i) => {
      if (search == null) {
        return i;
      } else {
        return i.sekolah.toLowerCase().includes(search.toLowerCase());
      }
    })
    .map((x) => {
      return (
        <Sekolah
          key={x.npsn}
          kode={x.sekolah.replace(/\s/g, "")}
          judul={x.sekolah}
          npsn={x.npsn}
          bentuk={x.bentuk}
          status={x.status === "S" ? <span>Swasta</span> : <span>Negeri</span>}
          alamat={x.alamat_jalan}
          propinsi={x.propinsi}
          kabupaten={x.kabupaten_kota}
          kecamatan={x.kecamatan}
          lintang={x.lintang}
          bujur={x.bujur}
        />
      );
    });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getWilayah();
  }, []);

  return (
    <div className={`content-search ${theme}-theme`}>
      <div className="container">
        <div className="row justify-content-center">
          <p className="text-center fs-4 mb-4">Pilih Wilayah</p>
          <div className="col-lg-4 mb-4">
            <p className="text-center fs-5">Wilayah yang di cari</p>
            <AsyncSelect
              cacheOptions
              loadOptions={promiseOptions}
              defaultOptions={wilayah}
              onChange={handleChangeWilayah.bind(this)}
              isLoading={isLoading}
              placeholder="pilih wilayah..."
              classNamePrefix="react-select"
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-lg-4 mb-4">
            <p className="text-center fs-5">Tingkatan Sekolah</p>
            <AsyncSelect
              cacheOptions
              defaultOptions={Jenjang}
              onChange={handleChangeTingkatan.bind(this)}
              placeholder="pilih tingkatan sekolah..."
              classNamePrefix="react-select"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="d-grid gap-2 col-md-4 mx-auto">
              <button
                type="button"
                className="btn"
                onClick={(e) => getDataSekolah()}
              >
                Cari Sekolah
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          {isLoading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : dataSekolah.length === 0 ? (
            <p className="text-center fs-5">Data tidak ditemukan</p>
          ) : (
            <React.Fragment>
              <div className="col-lg-6 col-md-10 mb-3">
                <form className="d-flex">
                  <input
                    className="form-control me-2 form-search"
                    onChange={handleSearch}
                    type="search"
                    placeholder="cari sekolahan..."
                  ></input>
                </form>
              </div>
              <div className="col-12 text-center">
                <p className="fs-6">
                  Terdapat {searchSekolah.length} data sekolah yang ditemukan
                </p>
              </div>
              <div className="col-lg-8">{searchSekolah}</div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
