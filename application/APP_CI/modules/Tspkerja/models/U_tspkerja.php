<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_tspkerja extends CI_Model {

function updateDT(){
    $this->load->database();
    $data = array(
            'spk_doc' => $this->input->post('spk_doc'),
            'spk_date' => $this->input->post('spk_date'),
            'spk_nopo' => $this->input->post('spk_nopo'),
            'spk_delivery' => $this->input->post('spk_delivery'),
            'spk_customer' => $this->input->post('customer_id'),
            'spk_bahannama' => $this->input->post('spk_bahannama'),
            'spk_jenisbahan' => $this->input->post('spk_jenisbahan'),
            'spk_merk' => $this->input->post('spk_merk'),
            'spk_glasin' => $this->input->post('spk_glasin'),
            'spk_bentuk' => $this->input->post('spk_bentuk'),
            'spk_ukuranP' => $this->input->post('spk_ukuranL'),
            'spk_gap' => $this->input->post('spk_gap'),
            'spk_porporasi' => $this->input->post('spk_porporasi'),
            'spk_mataperbaris' => $this->input->post('spk_mataperbaris'),
            'spk_jumlahpisau' => $this->input->post('spk_jumlahpisau'),
            'spk_matapisau' => $this->input->post('spk_matapisau'),
            'spk_warnacetakan' => $this->input->post('spk_warnacetakan'),
            'spk_qtyname' => $this->input->post('spk_qtyname'),
            'spk_totalname' => $this->input->post('spk_totalname'),
            'spk_qtyorder' => $this->input->post('spk_qtyorder'),
            'spk_upporder' => $this->input->post('spk_upporder'),
            'spk_totalorder' => $this->input->post('spk_totalorder'),
            'spk_core' => $this->input->post('spk_core'),
            'spk_arahgulungan' => $this->input->post('spk_arahgulungan'),
            'spk_sensor' => $this->input->post('spk_sensor'),
            'bahan_digunakan' => $this->input->post('bahan_digunakan'),
            'ukuranP_digunakan' => $this->input->post('ukuranP_digunakan'),
            'ukuranL_digunakan' => $this->input->post('ukuranL_digunakan'),
            'keterangan_digunakan' => $this->input->post('keterangan_digunakan'),
            'jml_roll' => $this->input->post('jml_roll'),
            'total' => $this->input->post('total'),
            'total2' => $this->input->post('total2'),
            'spk_tglkirim' => $this->input->post('spk_tglkirim'),
            'spk_nosuratjalan' => $this->input->post('spk_nosuratjalan')
    );
    $this->db->where('spk_id', $this->input->post('spk_id'));

    if ( ! $this->db->update('tr_spk', $data))
    {
            $error = $this->db->error(); // Has keys 'code' and 'message'
    }else{
        $error = array(
            'success'=>true,
            'message'=>$this->input->post('spk_doc'). ' Update Successfuly'
        );
    }

    return json_encode($error);                 

}

function updatePROSES(){
    $this->load->database();
    $data = array(
            'spk_status' => 'PROSES',
    );
    $this->db->where('spk_id', $this->input->post('spk_id'));

    if ( ! $this->db->update('tr_spk', $data))
    {
            $error = $this->db->error(); // Has keys 'code' and 'message'
    }else{
        $error = array(
            'success'=>true,
            'message'=>$this->input->post('spk_doc'). ' Proses Pembuatan Produk'
        );
    }

    return json_encode($error);                 

}

function updateSELESAI(){
    $this->load->database();
    $data = array(
            'spk_status' => 'SELESAI',
    );
    $this->db->where('spk_id', $this->input->post('spk_id'));

    if ( ! $this->db->update('tr_spk', $data))
    {
            $error = $this->db->error(); // Has keys 'code' and 'message'
    }else{
        $error = array(
            'success'=>true,
            'message'=>$this->input->post('spk_doc'). ' PRODUK telah Selesai dibuat'
        );
    }

    return json_encode($error);                 

}
    
}
