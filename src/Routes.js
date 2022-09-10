import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/detail-cabang">
                <h1>Detail Cabang</h1>
            </Route>
            <Route exact path="/perbandingan-cabang">
                <h1>Perbandingan Cabang</h1>
            </Route>
            <Route exact path="/pengaturan-akun">
                <h1>Pengaturan Akun</h1>
            </Route>
            <Route exact path="/pengaturan-perangkat">
                <h1>Pengaturan Perangkat</h1>
            </Route>
            <Route exact path="/performa-tukang-cukur">
                <h1>Performa Tukang Cukur</h1>
            </Route>
            <Route exact path="/pusat-bantuan">
                <h1>Pusat Bantuan</h1>
            </Route>
        </Switch>
    );

};

export default Routes;
