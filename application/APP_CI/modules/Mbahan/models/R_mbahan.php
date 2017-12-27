<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class R_mbahan extends CI_Model {
   
function load_default($start,$limit,$filter){
    $dtfilter = json_decode($filter,true);

    $this->load->database();
    $this->db->select(' SQL_CALC_FOUND_ROWS m_bahan.*
                    ',FALSE);
    $this->db->from('m_bahan');
    $this->db->where("m_bahan.bahan_id <>", 0);
    $this->db->like('m_bahan.bahan_nama',$dtfilter[0]['value']);
    $this->db->or_like('m_bahan.bahan_jenis',$dtfilter[0]['value']);
    $this->db->limit($limit,$start);
    $this->db->order_by("m_bahan.bahan_id","DESC");
    $query = $this->db->get();
                    //return $db->last_query();
    $rows = $query->result_array();


    $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
    $count = $query2->row('hasil');

    $data = array(
                'TotalRows' => $count,
                    'Rows' => $rows
                 );
    return json_encode($data);   

}

function cbolist(){
    $this->load->database();
    $this->db->select(' m_bahan.*
                    ',FALSE);
    $this->db->from('m_bahan');
    $this->db->where("m_bahan.bahan_id<>", 0);
    $query = $this->db->get();
    $rows = $query->result_array();
    return json_encode($rows);   
    
}


}
