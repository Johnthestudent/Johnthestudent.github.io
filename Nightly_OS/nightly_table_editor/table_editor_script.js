//each boolean value in every array stands for a cell in the column of a, b, c and so on
let a_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let b_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let c_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let d_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let e_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let f_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let g_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let h_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let i_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let j_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let k_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let l_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let m_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let n_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let o_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let p_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let q_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let r_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let s_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let t_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let u_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let v_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let w_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let x_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let y_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let z_cells = [false, false, false, false, false, false, false, false, false, false, false, false, false];

//for making the switch back of the values easier, a multi-dimensional array made out of the arrays above is used
let table_cells = [
    a_cells, 
    b_cells, 
    c_cells, 
    d_cells, 
    e_cells, 
    f_cells, 
    g_cells, 
    h_cells, 
    i_cells, 
    j_cells, 
    k_cells, 
    l_cells, 
    m_cells, 
    n_cells, 
    o_cells, 
    p_cells, 
    q_cells, 
    r_cells,
    s_cells,
    t_cells,
    u_cells,
    v_cells,
    w_cells,
    x_cells,
    y_cells,
    z_cells];

//this functions sets the focus of all other cells false, so when clicking on one cell, only the clicked cell get true focus
function helper()
{
    for(let outer = 0; outer < table_cells.length; outer++)
    {
        for(let inner = 0; inner < 14; inner++)
        {
            table_cells[outer][inner] = false;
        }
    }
}

//If the user dobule clicks on a cell, then that cell will get its focus turn from false into true value
///cell is caught by its id
$("td").on("dblclick", function(){
    let id_check = this.id;
    //cell A
    if(id_check == "cell_a1")
    {
        helper();
        a_cells[0] = true;
    }
    else if(id_check == "cell_a2")
    {
        helper();
        a_cells[1] = true;
    }
    else if(id_check == "cell_a3")
    {
        helper();
        a_cells[2] = true;
    }
    else if(id_check == "cell_a4")
    {
        helper();
        a_cells[3] = true;
    }
    else if(id_check == "cell_a5")
    {
        helper();
        a_cells[4] = true;
    }
    else if(id_check == "cell_a6")
    {
        helper();
        a_cells[5] = true;
    }
    else if(id_check == "cell_a7")
    {
        helper();
        a_cells[6] = true;
    }
    else if(id_check == "cell_a8")
    {
        helper();
        a_cells[7] = true;
    }
    else if(id_check == "cell_a9")
    {
        helper();
        a_cells[8] = true;
    }
    else if(id_check == "cell_a10")
    {
        helper();
        a_cells[9] = true;
    }
    else if(id_check == "cell_a11")
    {
        helper();
        a_cells[10] = true;
    }
    else if(id_check == "cell_a12")
    {
        helper();
        a_cells[11] = true;
    }
    else if(id_check == "cell_a13")
    {
        helper();
        a_cells[12] = true;
    }
    //cell B
    else if(id_check == "cell_b1")
    {
        helper();
        b_cells[0] = true;
    }
    else if(id_check == "cell_b2")
    {
        helper();
        b_cells[1] = true;
    }
    else if(id_check == "cell_b3")
    {
        helper();
        b_cells[2] = true;
    }
    else if(id_check == "cell_b4")
    {
        helper();
        b_cells[3] = true;
    }
    else if(id_check == "cell_b5")
    {
        helper();
        b_cells[4] = true;
    }
    else if(id_check == "cell_b6")
    {
        helper();
        b_cells[5] = true;
    }
    else if(id_check == "cell_b7")
    {
        helper();
        b_cells[6] = true;
    }
    else if(id_check == "cell_b8")
    {
        helper();
        b_cells[7] = true;
    }
    else if(id_check == "cell_b9")
    {
        helper();
        b_cells[8] = true;
    }
    else if(id_check == "cell_b10")
    {
        helper();
        b_cells[9] = true;
    }
    else if(id_check == "cell_b11")
    {
        helper();
        b_cells[10] = true;
    }
    else if(id_check == "cell_b12")
    {
        helper();
        b_cells[11] = true;
    }
    else if(id_check == "cell_b13")
    {
        helper();
        b_cells[12] = true;
    }
    //cell C
    else if(id_check == "cell_c1")
    {
        helper();
        c_cells[0] = true;
    }
    else if(id_check == "cell_c2")
    {
        helper();
        c_cells[1] = true;
    }
    else if(id_check == "cell_c3")
    {
        helper();
        c_cells[2] = true;
    }
    else if(id_check == "cell_c4")
    {
        helper();
        c_cells[3] = true;
    }
    else if(id_check == "cell_c5")
    {
        helper();
        c_cells[4] = true;
    }
    else if(id_check == "cell_c6")
    {
        helper();
        c_cells[5] = true;
    }
    else if(id_check == "cell_c7")
    {
        helper();
        c_cells[6] = true;
    }
    else if(id_check == "cell_c8")
    {
        helper();
        c_cells[7] = true;
    }
    else if(id_check == "cell_c9")
    {
        helper();
        c_cells[8] = true;
    }
    else if(id_check == "cell_c10")
    {
        helper();
        c_cells[9] = true;
    }
    else if(id_check == "cell_c11")
    {
        helper();
        c_cells[10] = true;
    }
    else if(id_check == "cell_c12")
    {
        helper();
        c_cells[11] = true;
    }
    else if(id_check == "cell_c13")
    {
        helper();
        c_cells[12] = true;
    }
    //cell D
    else if(id_check == "cell_d1")
    {
        helper();
        d_cells[0] = true;
    }
    else if(id_check == "cell_d2")
    {
        helper();
        d_cells[1] = true;
    }
    else if(id_check == "cell_d3")
    {
        helper();
        d_cells[2] = true;
    }
    else if(id_check == "cell_d4")
    {
        helper();
        d_cells[3] = true;
    }
    else if(id_check == "cell_d5")
    {
        helper();
        d_cells[4] = true;
    }
    else if(id_check == "cell_d6")
    {
        helper();
        d_cells[5] = true;
    }
    else if(id_check == "cell_d7")
    {
        helper();
        d_cells[6] = true;
    }
    else if(id_check == "cell_d8")
    {
        helper();
        d_cells[7] = true;
    }
    else if(id_check == "cell_d9")
    {
        helper();
        d_cells[8] = true;
    }
    else if(id_check == "cell_d10")
    {
        helper();
        d_cells[9] = true;
    }
    else if(id_check == "cell_d11")
    {
        helper();
        d_cells[10] = true;
    }
    else if(id_check == "cell_d12")
    {
        helper();
        d_cells[11] = true;
    }
    else if(id_check == "cell_d13")
    {
        helper();
        d_cells[12] = true;
    }
    //cell E
    else if(id_check == "cell_e1")
    {
        helper();
        e_cells[0] = true;
    }
    else if(id_check == "cell_e2")
    {
        helper();
        e_cells[1] = true;
    }
    else if(id_check == "cell_e3")
    {
        helper();
        e_cells[2] = true;
    }
    else if(id_check == "cell_e4")
    {
        helper();
        e_cells[3] = true;
    }
    else if(id_check == "cell_e5")
    {
        helper();
        e_cells[4] = true;
    }
    else if(id_check == "cell_e6")
    {
        helper();
        e_cells[5] = true;
    }
    else if(id_check == "cell_e7")
    {
        helper();
        e_cells[6] = true;
    }
    else if(id_check == "cell_e8")
    {
        helper();
        e_cells[7] = true;
    }
    else if(id_check == "cell_e9")
    {
        helper();
        e_cells[8] = true;
    }
    else if(id_check == "cell_e10")
    {
        helper();
        e_cells[9] = true;
    }
    else if(id_check == "cell_e11")
    {
        helper();
        e_cells[10] = true;
    }
    else if(id_check == "cell_e12")
    {
        helper();
        e_cells[11] = true;
    }
    else if(id_check == "cell_e13")
    {
        helper();
        e_cells[12] = true;
    }
    //cell F
    else if(id_check == "cell_f1")
    {
        helper();
        f_cells[0] = true;
    }
    else if(id_check == "cell_f2")
    {
        helper();
        f_cells[1] = true;
    }
    else if(id_check == "cell_f3")
    {
        helper();
        f_cells[2] = true;
    }
    else if(id_check == "cell_f4")
    {
        helper();
        f_cells[3] = true;
    }
    else if(id_check == "cell_f5")
    {
        helper();
        f_cells[4] = true;
    }
    else if(id_check == "cell_f6")
    {
        helper();
        f_cells[5] = true;
    }
    else if(id_check == "cell_f7")
    {
        helper();
        f_cells[6] = true;
    }
    else if(id_check == "cell_f8")
    {
        helper();
        f_cells[7] = true;
    }
    else if(id_check == "cell_f9")
    {
        helper();
        f_cells[8] = true;
    }
    else if(id_check == "cell_f10")
    {
        helper();
        f_cells[9] = true;
    }
    else if(id_check == "cell_f11")
    {
        helper();
        f_cells[10] = true;
    }
    else if(id_check == "cell_f12")
    {
        helper();
        f_cells[11] = true;
    }
    else if(id_check == "cell_f13")
    {
        helper();
        f_cells[12] = true;
    }
    //cell G
    else if(id_check == "cell_g1")
    {
        helper();
        g_cells[0] = true;
    }
    else if(id_check == "cell_g2")
    {
        helper();
        g_cells[1] = true;
    }
    else if(id_check == "cell_g3")
    {
        helper();
        g_cells[2] = true;
    }
    else if(id_check == "cell_g4")
    {
        helper();
        g_cells[3] = true;
    }
    else if(id_check == "cell_g5")
    {
        helper();
        g_cells[4] = true;
    }
    else if(id_check == "cell_g6")
    {
        helper();
        g_cells[5] = true;
    }
    else if(id_check == "cell_g7")
    {
        helper();
        g_cells[6] = true;
    }
    else if(id_check == "cell_g8")
    {
        helper();
        g_cells[7] = true;
    }
    else if(id_check == "cell_g9")
    {
        helper();
        g_cells[8] = true;
    }
    else if(id_check == "cell_g10")
    {
        helper();
        g_cells[9] = true;
    }
    else if(id_check == "cell_g11")
    {
        helper();
        g_cells[10] = true;
    }
    else if(id_check == "cell_g12")
    {
        helper();
        g_cells[11] = true;
    }
    else if(id_check == "cell_g13")
    {
        helper();
        g_cells[12] = true;
    }
    //cell H
    else if(id_check == "cell_h1")
    {
        helper();
        h_cells[0] = true;
    }
    else if(id_check == "cell_h2")
    {
        helper();
        h_cells[1] = true;
    }
    else if(id_check == "cell_h3")
    {
        helper();
        h_cells[2] = true;
    }
    else if(id_check == "cell_h4")
    {
        helper();
        h_cells[3] = true;
    }
    else if(id_check == "cell_h5")
    {
        helper();
        h_cells[4] = true;
    }
    else if(id_check == "cell_h6")
    {
        helper();
        h_cells[5] = true;
    }
    else if(id_check == "cell_h7")
    {
        helper();
        h_cells[6] = true;
    }
    else if(id_check == "cell_h8")
    {
        helper();
        h_cells[7] = true;
    }
    else if(id_check == "cell_h9")
    {
        helper();
        h_cells[8] = true;
    }
    else if(id_check == "cell_h10")
    {
        helper();
        h_cells[9] = true;
    }
    else if(id_check == "cell_h11")
    {
        helper();
        h_cells[10] = true;
    }
    else if(id_check == "cell_h12")
    {
        helper();
        h_cells[11] = true;
    }
    else if(id_check == "cell_h13")
    {
        helper();
        h_cells[12] = true;
    }
    //cell I
    else if(id_check == "cell_i1")
    {
        helper();
        i_cells[0] = true;
    }
    else if(id_check == "cell_i2")
    {
        helper();
        i_cells[1] = true;
    }
    else if(id_check == "cell_i3")
    {
        helper();
        i_cells[2] = true;
    }
    else if(id_check == "cell_i4")
    {
        helper();
        i_cells[3] = true;
    }
    else if(id_check == "cell_i5")
    {
        helper();
        i_cells[4] = true;
    }
    else if(id_check == "cell_i6")
    {
        helper();
        i_cells[5] = true;
    }
    else if(id_check == "cell_i7")
    {
        helper();
        i_cells[6] = true;
    }
    else if(id_check == "cell_i8")
    {
        helper();
        i_cells[7] = true;
    }
    else if(id_check == "cell_i9")
    {
        helper();
        i_cells[8] = true;
    }
    else if(id_check == "cell_i10")
    {
        helper();
        i_cells[9] = true;
    }
    else if(id_check == "cell_i11")
    {
        helper();
        i_cells[10] = true;
    }
    else if(id_check == "cell_i12")
    {
        helper();
        i_cells[11] = true;
    }
    else if(id_check == "cell_i13")
    {
        helper();
        i_cells[12] = true;
    }
    //cell J
    else if(id_check == "cell_j1")
    {
        helper();
        j_cells[0] = true;
    }
    else if(id_check == "cell_j2")
    {
        helper();
        j_cells[1] = true;
    }
    else if(id_check == "cell_j3")
    {
        helper();
        j_cells[2] = true;
    }
    else if(id_check == "cell_j4")
    {
        helper();
        j_cells[3] = true;
    }
    else if(id_check == "cell_j5")
    {
        helper();
        j_cells[4] = true;
    }
    else if(id_check == "cell_j6")
    {
        helper();
        j_cells[5] = true;
    }
    else if(id_check == "cell_j7")
    {
        helper();
        j_cells[6] = true;
    }
    else if(id_check == "cell_j8")
    {
        helper();
        j_cells[7] = true;
    }
    else if(id_check == "cell_j9")
    {
        helper();
        j_cells[8] = true;
    }
    else if(id_check == "cell_j10")
    {
        helper();
        j_cells[9] = true;
    }
    else if(id_check == "cell_j11")
    {
        helper();
        j_cells[10] = true;
    }
    else if(id_check == "cell_j12")
    {
        helper();
        j_cells[11] = true;
    }
    else if(id_check == "cell_j13")
    {
        helper();
        j_cells[12] = true;
    }
    //cell K
    else if(id_check == "cell_k1")
    {
        helper();
        k_cells[0] = true;
    }
    else if(id_check == "cell_k2")
    {
        helper();
        k_cells[1] = true;
    }
    else if(id_check == "cell_k3")
    {
        helper();
        k_cells[2] = true;
    }
    else if(id_check == "cell_k4")
    {
        helper();
        k_cells[3] = true;
    }
    else if(id_check == "cell_k5")
    {
        helper();
        k_cells[4] = true;
    }
    else if(id_check == "cell_k6")
    {
        helper();
        k_cells[5] = true;
    }
    else if(id_check == "cell_k7")
    {
        helper();
        k_cells[6] = true;
    }
    else if(id_check == "cell_k8")
    {
        helper();
        k_cells[7] = true;
    }
    else if(id_check == "cell_k9")
    {
        helper();
        k_cells[8] = true;
    }
    else if(id_check == "cell_k10")
    {
        helper();
        k_cells[9] = true;
    }
    else if(id_check == "cell_k11")
    {
        helper();
        k_cells[10] = true;
    }
    else if(id_check == "cell_k12")
    {
        helper();
        k_cells[11] = true;
    }
    else if(id_check == "cell_k13")
    {
        helper();
        k_cells[12] = true;
    }
    //cell L
    else if(id_check == "cell_l1")
    {
        helper();
        l_cells[0] = true;
    }
    else if(id_check == "cell_b2")
    {
        helper();
        l_cells[1] = true;
    }
    else if(id_check == "cell_l3")
    {
        helper();
        l_cells[2] = true;
    }
    else if(id_check == "cell_l4")
    {
        helper();
        l_cells[3] = true;
    }
    else if(id_check == "cell_l5")
    {
        helper();
        l_cells[4] = true;
    }
    else if(id_check == "cell_l6")
    {
        helper();
        l_cells[5] = true;
    }
    else if(id_check == "cell_l7")
    {
        helper();
        l_cells[6] = true;
    }
    else if(id_check == "cell_l8")
    {
        helper();
        l_cells[7] = true;
    }
    else if(id_check == "cell_l9")
    {
        helper();
        l_cells[8] = true;
    }
    else if(id_check == "cell_l10")
    {
        helper();
        l_cells[9] = true;
    }
    else if(id_check == "cell_l11")
    {
        helper();
        l_cells[10] = true;
    }
    else if(id_check == "cell_l12")
    {
        helper();
        l_cells[11] = true;
    }
    else if(id_check == "cell_l13")
    {
        helper();
        l_cells[12] = true;
    }
    //cell M
    else if(id_check == "cell_m1")
    {
        helper();
        m_cells[0] = true;
    }
    else if(id_check == "cell_m2")
    {
        helper();
        m_cells[1] = true;
    }
    else if(id_check == "cell_m3")
    {
        helper();
        m_cells[2] = true;
    }
    else if(id_check == "cell_m4")
    {
        helper();
        m_cells[3] = true;
    }
    else if(id_check == "cell_m5")
    {
        helper();
        m_cells[4] = true;
    }
    else if(id_check == "cell_m6")
    {
        helper();
        m_cells[5] = true;
    }
    else if(id_check == "cell_m7")
    {
        helper();
        m_cells[6] = true;
    }
    else if(id_check == "cell_m8")
    {
        helper();
        m_cells[7] = true;
    }
    else if(id_check == "cell_m9")
    {
        helper();
        m_cells[8] = true;
    }
    else if(id_check == "cell_m10")
    {
        helper();
        m_cells[9] = true;
    }
    else if(id_check == "cell_m11")
    {
        helper();
        m_cells[10] = true;
    }
    else if(id_check == "cell_m12")
    {
        helper();
        m_cells[11] = true;
    }
    else if(id_check == "cell_m13")
    {
        helper();
        m_cells[12] = true;
    }
    //cell N
    else if(id_check == "cell_n1")
    {
        helper();
        n_cells[0] = true;
    }
    else if(id_check == "cell_n2")
    {
        helper();
        n_cells[1] = true;
    }
    else if(id_check == "cell_n3")
    {
        helper();
        n_cells[2] = true;
    }
    else if(id_check == "cell_n4")
    {
        helper();
        n_cells[3] = true;
    }
    else if(id_check == "cell_n5")
    {
        helper();
        n_cells[4] = true;
    }
    else if(id_check == "cell_n6")
    {
        helper();
        n_cells[5] = true;
    }
    else if(id_check == "cell_n7")
    {
        helper();
        n_cells[6] = true;
    }
    else if(id_check == "cell_n8")
    {
        helper();
        n_cells[7] = true;
    }
    else if(id_check == "cell_n9")
    {
        helper();
        n_cells[8] = true;
    }
    else if(id_check == "cell_n10")
    {
        helper();
        n_cells[9] = true;
    }
    else if(id_check == "cell_n11")
    {
        helper();
        n_cells[10] = true;
    }
    else if(id_check == "cell_n12")
    {
        helper();
        n_cells[11] = true;
    }
    else if(id_check == "cell_n13")
    {
        helper();
        n_cells[12] = true;
    }
    //cell O
    else if(id_check == "cell_o1")
    {
        helper();
        o_cells[0] = true;
    }
    else if(id_check == "cell_o2")
    {
        helper();
        o_cells[1] = true;
    }
    else if(id_check == "cell_o3")
    {
        helper();
        o_cells[2] = true;
    }
    else if(id_check == "cell_o4")
    {
        helper();
        o_cells[3] = true;
    }
    else if(id_check == "cell_o5")
    {
        helper();
        o_cells[4] = true;
    }
    else if(id_check == "cell_o6")
    {
        helper();
        o_cells[5] = true;
    }
    else if(id_check == "cell_o7")
    {
        helper();
        o_cells[6] = true;
    }
    else if(id_check == "cell_o8")
    {
        helper();
        o_cells[7] = true;
    }
    else if(id_check == "cell_o9")
    {
        helper();
        o_cells[8] = true;
    }
    else if(id_check == "cell_o10")
    {
        helper();
        o_cells[9] = true;
    }
    else if(id_check == "cell_o11")
    {
        helper();
        o_cells[10] = true;
    }
    else if(id_check == "cell_o12")
    {
        helper();
        o_cells[11] = true;
    }
    else if(id_check == "cell_o13")
    {
        helper();
        o_cells[12] = true;
    }
    //cell P
    else if(id_check == "cell_p1")
    {
        helper();
        p_cells[0] = true;
    }
    else if(id_check == "cell_p2")
    {
        helper();
        p_cells[1] = true;
    }
    else if(id_check == "cell_p3")
    {
        helper();
        p_cells[2] = true;
    }
    else if(id_check == "cell_p4")
    {
        helper();
        p_cells[3] = true;
    }
    else if(id_check == "cell_p5")
    {
        helper();
        p_cells[4] = true;
    }
    else if(id_check == "cell_p6")
    {
        helper();
        p_cells[5] = true;
    }
    else if(id_check == "cell_p7")
    {
        helper();
        p_cells[6] = true;
    }
    else if(id_check == "cell_p8")
    {
        helper();
        p_cells[7] = true;
    }
    else if(id_check == "cell_p9")
    {
        helper();
        p_cells[8] = true;
    }
    else if(id_check == "cell_p10")
    {
        helper();
        p_cells[9] = true;
    }
    else if(id_check == "cell_p11")
    {
        helper();
        p_cells[10] = true;
    }
    else if(id_check == "cell_p12")
    {
        helper();
        p_cells[11] = true;
    }
    else if(id_check == "cell_p13")
    {
        helper();
        p_cells[12] = true;
    }
    //cell Q
    else if(id_check == "cell_q1")
    {
        helper();
        q_cells[0] = true;
    }
    else if(id_check == "cell_q2")
    {
        helper();
        q_cells[1] = true;
    }
    else if(id_check == "cell_q3")
    {
        helper();
        q_cells[2] = true;
    }
    else if(id_check == "cell_q4")
    {
        helper();
        q_cells[3] = true;
    }
    else if(id_check == "cell_q5")
    {
        helper();
        q_cells[4] = true;
    }
    else if(id_check == "cell_q6")
    {
        helper();
        q_cells[5] = true;
    }
    else if(id_check == "cell_q7")
    {
        helper();
        q_cells[6] = true;
    }
    else if(id_check == "cell_q8")
    {
        helper();
        q_cells[7] = true;
    }
    else if(id_check == "cell_q9")
    {
        helper();
        q_cells[8] = true;
    }
    else if(id_check == "cell_q10")
    {
        helper();
        q_cells[9] = true;
    }
    else if(id_check == "cell_q11")
    {
        helper();
        q_cells[10] = true;
    }
    else if(id_check == "cell_q12")
    {
        helper();
        q_cells[11] = true;
    }
    else if(id_check == "cell_q13")
    {
        helper();
        q_cells[12] = true;
    }
    //cell R
    else if(id_check == "cell_r1")
    {
        helper();
        r_cells[0] = true;
    }
    else if(id_check == "cell_r2")
    {
        helper();
        r_cells[1] = true;
    }
    else if(id_check == "cell_r3")
    {
        helper();
        r_cells[2] = true;
    }
    else if(id_check == "cell_r4")
    {
        helper();
        r_cells[3] = true;
    }
    else if(id_check == "cell_r5")
    {
        helper();
        r_cells[4] = true;
    }
    else if(id_check == "cell_r6")
    {
        helper();
        r_cells[5] = true;
    }
    else if(id_check == "cell_r7")
    {
        helper();
        r_cells[6] = true;
    }
    else if(id_check == "cell_r8")
    {
        helper();
        r_cells[7] = true;
    }
    else if(id_check == "cell_r9")
    {
        helper();
        r_cells[8] = true;
    }
    else if(id_check == "cell_r10")
    {
        helper();
        r_cells[9] = true;
    }
    else if(id_check == "cell_r11")
    {
        helper();
        r_cells[10] = true;
    }
    else if(id_check == "cell_r12")
    {
        helper();
        r_cells[11] = true;
    }
    else if(id_check == "cell_r13")
    {
        helper();
        r_cells[12] = true;
    }
    //cell S
    else if(id_check == "cell_s1")
    {
        helper();
        s_cells[0] = true;
    }
    else if(id_check == "cell_s2")
    {
        helper();
        s_cells[1] = true;
    }
    else if(id_check == "cell_s3")
    {
        helper();
        s_cells[2] = true;
    }
    else if(id_check == "cell_s4")
    {
        helper();
        s_cells[3] = true;
    }
    else if(id_check == "cell_s5")
    {
        helper();
        s_cells[4] = true;
    }
    else if(id_check == "cell_s6")
    {
        helper();
        s_cells[5] = true;
    }
    else if(id_check == "cell_s7")
    {
        helper();
        s_cells[6] = true;
    }
    else if(id_check == "cell_s8")
    {
        helper();
        s_cells[7] = true;
    }
    else if(id_check == "cell_s9")
    {
        helper();
        s_cells[8] = true;
    }
    else if(id_check == "cell_s10")
    {
        helper();
        s_cells[9] = true;
    }
    else if(id_check == "cell_s11")
    {
        helper();
        s_cells[10] = true;
    }
    else if(id_check == "cell_s12")
    {
        helper();
        s_cells[11] = true;
    }
    else if(id_check == "cell_s13")
    {
        helper();
        s_cells[12] = true;
    }
    //cell T
    else if(id_check == "cell_t1")
    {
        helper();
        t_cells[0] = true;
    }
    else if(id_check == "cell_t2")
    {
        helper();
        t_cells[1] = true;
    }
    else if(id_check == "cell_t3")
    {
        helper();
        t_cells[2] = true;
    }
    else if(id_check == "cell_t4")
    {
        helper();
        t_cells[3] = true;
    }
    else if(id_check == "cell_t5")
    {
        helper();
        t_cells[4] = true;
    }
    else if(id_check == "cell_t6")
    {
        helper();
        t_cells[5] = true;
    }
    else if(id_check == "cell_t7")
    {
        helper();
        t_cells[6] = true;
    }
    else if(id_check == "cell_t8")
    {
        helper();
        t_cells[7] = true;
    }
    else if(id_check == "cell_t9")
    {
        helper();
        t_cells[8] = true;
    }
    else if(id_check == "cell_t10")
    {
        helper();
        t_cells[9] = true;
    }
    else if(id_check == "cell_t11")
    {
        helper();
        t_cells[10] = true;
    }
    else if(id_check == "cell_t12")
    {
        helper();
        t_cells[11] = true;
    }
    else if(id_check == "cell_t13")
    {
        helper();
        t_cells[12] = true;
    }
    //cell U
    else if(id_check == "cell_u1")
    {
        helper();
        u_cells[0] = true;
    }
    else if(id_check == "cell_u2")
    {
        helper();
        u_cells[1] = true;
    }
    else if(id_check == "cell_u3")
    {
        helper();
        u_cells[2] = true;
    }
    else if(id_check == "cell_u4")
    {
        helper();
        u_cells[3] = true;
    }
    else if(id_check == "cell_u5")
    {
        helper();
        u_cells[4] = true;
    }
    else if(id_check == "cell_u6")
    {
        helper();
        u_cells[5] = true;
    }
    else if(id_check == "cell_u7")
    {
        helper();
        u_cells[6] = true;
    }
    else if(id_check == "cell_u8")
    {
        helper();
        u_cells[7] = true;
    }
    else if(id_check == "cell_u9")
    {
        helper();
        u_cells[8] = true;
    }
    else if(id_check == "cell_u10")
    {
        helper();
        u_cells[9] = true;
    }
    else if(id_check == "cell_u11")
    {
        helper();
        u_cells[10] = true;
    }
    else if(id_check == "cell_u12")
    {
        helper();
        u_cells[11] = true;
    }
    else if(id_check == "cell_u13")
    {
        helper();
        u_cells[12] = true;
    }
    //cell V
    else if(id_check == "cell_v1")
    {
        helper();
        v_cells[0] = true;
    }
    else if(id_check == "cell_v2")
    {
        helper();
        v_cells[1] = true;
    }
    else if(id_check == "cell_v3")
    {
        helper();
        v_cells[2] = true;
    }
    else if(id_check == "cell_v4")
    {
        helper();
        v_cells[3] = true;
    }
    else if(id_check == "cell_v5")
    {
        helper();
        v_cells[4] = true;
    }
    else if(id_check == "cell_v6")
    {
        helper();
        v_cells[5] = true;
    }
    else if(id_check == "cell_v7")
    {
        helper();
        v_cells[6] = true;
    }
    else if(id_check == "cell_v8")
    {
        helper();
        v_cells[7] = true;
    }
    else if(id_check == "cell_v9")
    {
        helper();
        v_cells[8] = true;
    }
    else if(id_check == "cell_v10")
    {
        helper();
        v_cells[9] = true;
    }
    else if(id_check == "cell_v11")
    {
        helper();
        v_cells[10] = true;
    }
    else if(id_check == "cell_v12")
    {
        helper();
        v_cells[11] = true;
    }
    else if(id_check == "cell_v13")
    {
        helper();
        v_cells[12] = true;
    }
    //cell W
    else if(id_check == "cell_w1")
    {
        helper();
        w_cells[0] = true;
    }
    else if(id_check == "cell_w2")
    {
        helper();
        w_cells[1] = true;
    }
    else if(id_check == "cell_w3")
    {
        helper();
        w_cells[2] = true;
    }
    else if(id_check == "cell_w4")
    {
        helper();
        w_cells[3] = true;
    }
    else if(id_check == "cell_w5")
    {
        helper();
        w_cells[4] = true;
    }
    else if(id_check == "cell_w6")
    {
        helper();
        w_cells[5] = true;
    }
    else if(id_check == "cell_w7")
    {
        helper();
        w_cells[6] = true;
    }
    else if(id_check == "cell_w8")
    {
        helper();
        w_cells[7] = true;
    }
    else if(id_check == "cell_w9")
    {
        helper();
        w_cells[8] = true;
    }
    else if(id_check == "cell_w10")
    {
        helper();
        w_cells[9] = true;
    }
    else if(id_check == "cell_w11")
    {
        helper();
        w_cells[10] = true;
    }
    else if(id_check == "cell_w12")
    {
        helper();
        w_cells[11] = true;
    }
    else if(id_check == "cell_w13")
    {
        helper();
        w_cells[12] = true;
    }
    //cell X
    else if(id_check == "cell_x1")
    {
        helper();
        x_cells[0] = true;
    }
    else if(id_check == "cell_x2")
    {
        helper();
        x_cells[1] = true;
    }
    else if(id_check == "cell_x3")
    {
        helper();
        x_cells[2] = true;
    }
    else if(id_check == "cell_x4")
    {
        helper();
        x_cells[3] = true;
    }
    else if(id_check == "cell_x5")
    {
        helper();
        x_cells[4] = true;
    }
    else if(id_check == "cell_x6")
    {
        helper();
        x_cells[5] = true;
    }
    else if(id_check == "cell_x7")
    {
        helper();
        x_cells[6] = true;
    }
    else if(id_check == "cell_x8")
    {
        helper();
        x_cells[7] = true;
    }
    else if(id_check == "cell_x9")
    {
        helper();
        x_cells[8] = true;
    }
    else if(id_check == "cell_x10")
    {
        helper();
        x_cells[9] = true;
    }
    else if(id_check == "cell_x11")
    {
        helper();
        x_cells[10] = true;
    }
    else if(id_check == "cell_x12")
    {
        helper();
        x_cells[11] = true;
    }
    else if(id_check == "cell_x13")
    {
        helper();
        x_cells[12] = true;
    }
    //cell Y
    else if(id_check == "cell_y1")
    {
        helper();
        y_cells[0] = true;
    }
    else if(id_check == "cell_y2")
    {
        helper();
        y_cells[1] = true;
    }
    else if(id_check == "cell_y3")
    {
        helper();
        y_cells[2] = true;
    }
    else if(id_check == "cell_y4")
    {
        helper();
        y_cells[3] = true;
    }
    else if(id_check == "cell_y5")
    {
        helper();
        y_cells[4] = true;
    }
    else if(id_check == "cell_y6")
    {
        helper();
        y_cells[5] = true;
    }
    else if(id_check == "cell_y7")
    {
        helper();
        y_cells[6] = true;
    }
    else if(id_check == "cell_y8")
    {
        helper();
        y_cells[7] = true;
    }
    else if(id_check == "cell_y9")
    {
        helper();
        y_cells[8] = true;
    }
    else if(id_check == "cell_y10")
    {
        helper();
        y_cells[9] = true;
    }
    else if(id_check == "cell_y11")
    {
        helper();
        y_cells[10] = true;
    }
    else if(id_check == "cell_y12")
    {
        helper();
        y_cells[11] = true;
    }
    else if(id_check == "cell_y13")
    {
        helper();
        y_cells[12] = true;
    }
    //cell Z
    else if(id_check == "cell_z1")
    {
        helper();
        z_cells[0] = true;
    }
    else if(id_check == "cell_z2")
    {
        helper();
        z_cells[1] = true;
    }
    else if(id_check == "cell_z3")
    {
        helper();
        z_cells[2] = true;
    }
    else if(id_check == "cell_z4")
    {
        helper();
        z_cells[3] = true;
    }
    else if(id_check == "cell_z5")
    {
        helper();
        z_cells[4] = true;
    }
    else if(id_check == "cell_z6")
    {
        helper();
        z_cells[5] = true;
    }
    else if(id_check == "cell_z7")
    {
        helper();
        z_cells[6] = true;
    }
    else if(id_check == "cell_z8")
    {
        helper();
        z_cells[7] = true;
    }
    else if(id_check == "cell_z9")
    {
        helper();
        z_cells[8] = true;
    }
    else if(id_check == "cell_z10")
    {
        helper();
        z_cells[9] = true;
    }
    else if(id_check == "cell_z11")
    {
        helper();
        z_cells[10] = true;
    }
    else if(id_check == "cell_z12")
    {
        helper();
        z_cells[11] = true;
    }
    else if(id_check == "cell_z13")
    {
        helper();
        z_cells[12] = true;
    }                
});

//Buttons of the header of table editor window
//The exit / close button redirects the user to the desktop imitator section
$("#header_button1").on("click", function()
{
    alert("Not working!");
});

$("#header_button2").on("click", function()
{
    alert("Not working!");
});

$("#header_button3").on("click", function()
{
    window.location.href = "../nightly_main/desktop.html";
});

//load saved value
//for A column cells
document.getElementById("cell_a1").innerHTML = localStorage.getItem("cell_a1_inner_text");
document.getElementById("cell_a2").innerHTML = localStorage.getItem("cell_a2_inner_text");
document.getElementById("cell_a3").innerHTML = localStorage.getItem("cell_a3_inner_text");
document.getElementById("cell_a4").innerHTML = localStorage.getItem("cell_a4_inner_text");
document.getElementById("cell_a5").innerHTML = localStorage.getItem("cell_a5_inner_text");
document.getElementById("cell_a6").innerHTML = localStorage.getItem("cell_a6_inner_text");
document.getElementById("cell_a7").innerHTML = localStorage.getItem("cell_a7_inner_text");
document.getElementById("cell_a8").innerHTML = localStorage.getItem("cell_a8_inner_text");
document.getElementById("cell_a9").innerHTML = localStorage.getItem("cell_a9_inner_text");
document.getElementById("cell_a10").innerHTML = localStorage.getItem("cell_a10_inner_text");
document.getElementById("cell_a11").innerHTML = localStorage.getItem("cell_a11_inner_text");
document.getElementById("cell_a12").innerHTML = localStorage.getItem("cell_a12_inner_text");
document.getElementById("cell_a13").innerHTML = localStorage.getItem("cell_a13_inner_text");
//for B column cells
document.getElementById("cell_b1").innerHTML = localStorage.getItem("cell_b1_inner_text");
document.getElementById("cell_b2").innerHTML = localStorage.getItem("cell_b2_inner_text");
document.getElementById("cell_b3").innerHTML = localStorage.getItem("cell_b3_inner_text");
document.getElementById("cell_b4").innerHTML = localStorage.getItem("cell_b4_inner_text");
document.getElementById("cell_b5").innerHTML = localStorage.getItem("cell_b5_inner_text");
document.getElementById("cell_b6").innerHTML = localStorage.getItem("cell_b6_inner_text");
document.getElementById("cell_b7").innerHTML = localStorage.getItem("cell_b7_inner_text");
document.getElementById("cell_b8").innerHTML = localStorage.getItem("cell_b8_inner_text");
document.getElementById("cell_b9").innerHTML = localStorage.getItem("cell_b9_inner_text");
document.getElementById("cell_b10").innerHTML = localStorage.getItem("cell_b10_inner_text");
document.getElementById("cell_b11").innerHTML = localStorage.getItem("cell_b11_inner_text");
document.getElementById("cell_b12").innerHTML = localStorage.getItem("cell_b12_inner_text");
document.getElementById("cell_b13").innerHTML = localStorage.getItem("cell_b13_inner_text");
//for C column cells
document.getElementById("cell_c1").innerHTML = localStorage.getItem("cell_c1_inner_text");
document.getElementById("cell_c2").innerHTML = localStorage.getItem("cell_c2_inner_text");
document.getElementById("cell_c3").innerHTML = localStorage.getItem("cell_c3_inner_text");
document.getElementById("cell_c4").innerHTML = localStorage.getItem("cell_c4_inner_text");
document.getElementById("cell_c5").innerHTML = localStorage.getItem("cell_c5_inner_text");
document.getElementById("cell_c6").innerHTML = localStorage.getItem("cell_c6_inner_text");
document.getElementById("cell_c7").innerHTML = localStorage.getItem("cell_c7_inner_text");
document.getElementById("cell_c8").innerHTML = localStorage.getItem("cell_c8_inner_text");
document.getElementById("cell_c9").innerHTML = localStorage.getItem("cell_c9_inner_text");
document.getElementById("cell_c10").innerHTML = localStorage.getItem("cell_c10_inner_text");
document.getElementById("cell_c11").innerHTML = localStorage.getItem("cell_c11_inner_text");
document.getElementById("cell_c12").innerHTML = localStorage.getItem("cell_c12_inner_text");
document.getElementById("cell_c13").innerHTML = localStorage.getItem("cell_c13_inner_text");
//for D column cells
document.getElementById("cell_d1").innerHTML = localStorage.getItem("cell_d1_inner_text");
document.getElementById("cell_d2").innerHTML = localStorage.getItem("cell_d2_inner_text");
document.getElementById("cell_d3").innerHTML = localStorage.getItem("cell_d3_inner_text");
document.getElementById("cell_d4").innerHTML = localStorage.getItem("cell_d4_inner_text");
document.getElementById("cell_d5").innerHTML = localStorage.getItem("cell_d5_inner_text");
document.getElementById("cell_d6").innerHTML = localStorage.getItem("cell_d6_inner_text");
document.getElementById("cell_d7").innerHTML = localStorage.getItem("cell_d7_inner_text");
document.getElementById("cell_d8").innerHTML = localStorage.getItem("cell_d8_inner_text");
document.getElementById("cell_d9").innerHTML = localStorage.getItem("cell_d9_inner_text");
document.getElementById("cell_d10").innerHTML = localStorage.getItem("cell_d10_inner_text");
document.getElementById("cell_d11").innerHTML = localStorage.getItem("cell_d11_inner_text");
document.getElementById("cell_d12").innerHTML = localStorage.getItem("cell_d12_inner_text");
document.getElementById("cell_d13").innerHTML = localStorage.getItem("cell_d13_inner_text");
//for E column cells
document.getElementById("cell_e1").innerHTML = localStorage.getItem("cell_e1_inner_text");
document.getElementById("cell_e2").innerHTML = localStorage.getItem("cell_e2_inner_text");
document.getElementById("cell_e3").innerHTML = localStorage.getItem("cell_e3_inner_text");
document.getElementById("cell_e4").innerHTML = localStorage.getItem("cell_e4_inner_text");
document.getElementById("cell_e5").innerHTML = localStorage.getItem("cell_e5_inner_text");
document.getElementById("cell_e6").innerHTML = localStorage.getItem("cell_e6_inner_text");
document.getElementById("cell_e7").innerHTML = localStorage.getItem("cell_e7_inner_text");
document.getElementById("cell_e8").innerHTML = localStorage.getItem("cell_e8_inner_text");
document.getElementById("cell_e9").innerHTML = localStorage.getItem("cell_e9_inner_text");
document.getElementById("cell_e10").innerHTML = localStorage.getItem("cell_e10_inner_text");
document.getElementById("cell_e11").innerHTML = localStorage.getItem("cell_e11_inner_text");
document.getElementById("cell_e12").innerHTML = localStorage.getItem("cell_e12_inner_text");
document.getElementById("cell_e13").innerHTML = localStorage.getItem("cell_e13_inner_text");
//for F column cells
document.getElementById("cell_f1").innerHTML = localStorage.getItem("cell_f1_inner_text");
document.getElementById("cell_f2").innerHTML = localStorage.getItem("cell_f2_inner_text");
document.getElementById("cell_f3").innerHTML = localStorage.getItem("cell_f3_inner_text");
document.getElementById("cell_f4").innerHTML = localStorage.getItem("cell_f4_inner_text");
document.getElementById("cell_f5").innerHTML = localStorage.getItem("cell_f5_inner_text");
document.getElementById("cell_f6").innerHTML = localStorage.getItem("cell_f6_inner_text");
document.getElementById("cell_f7").innerHTML = localStorage.getItem("cell_f7_inner_text");
document.getElementById("cell_f8").innerHTML = localStorage.getItem("cell_f8_inner_text");
document.getElementById("cell_f9").innerHTML = localStorage.getItem("cell_f9_inner_text");
document.getElementById("cell_f10").innerHTML = localStorage.getItem("cell_f10_inner_text");
document.getElementById("cell_f11").innerHTML = localStorage.getItem("cell_f11_inner_text");
document.getElementById("cell_f12").innerHTML = localStorage.getItem("cell_f12_inner_text");
document.getElementById("cell_f13").innerHTML = localStorage.getItem("cell_f13_inner_text");
//for G column cells
document.getElementById("cell_g1").innerHTML = localStorage.getItem("cell_g1_inner_text");
document.getElementById("cell_g2").innerHTML = localStorage.getItem("cell_g2_inner_text");
document.getElementById("cell_g3").innerHTML = localStorage.getItem("cell_g3_inner_text");
document.getElementById("cell_g4").innerHTML = localStorage.getItem("cell_g4_inner_text");
document.getElementById("cell_g5").innerHTML = localStorage.getItem("cell_g5_inner_text");
document.getElementById("cell_g6").innerHTML = localStorage.getItem("cell_g6_inner_text");
document.getElementById("cell_g7").innerHTML = localStorage.getItem("cell_g7_inner_text");
document.getElementById("cell_g8").innerHTML = localStorage.getItem("cell_g8_inner_text");
document.getElementById("cell_g9").innerHTML = localStorage.getItem("cell_g9_inner_text");
document.getElementById("cell_g10").innerHTML = localStorage.getItem("cell_g10_inner_text");
document.getElementById("cell_g11").innerHTML = localStorage.getItem("cell_g11_inner_text");
document.getElementById("cell_g12").innerHTML = localStorage.getItem("cell_g12_inner_text");
document.getElementById("cell_g13").innerHTML = localStorage.getItem("cell_g13_inner_text");
//for H column cells
document.getElementById("cell_h1").innerHTML = localStorage.getItem("cell_h1_inner_text");
document.getElementById("cell_h2").innerHTML = localStorage.getItem("cell_h2_inner_text");
document.getElementById("cell_h3").innerHTML = localStorage.getItem("cell_h3_inner_text");
document.getElementById("cell_h4").innerHTML = localStorage.getItem("cell_h4_inner_text");
document.getElementById("cell_h5").innerHTML = localStorage.getItem("cell_h5_inner_text");
document.getElementById("cell_h6").innerHTML = localStorage.getItem("cell_h6_inner_text");
document.getElementById("cell_h7").innerHTML = localStorage.getItem("cell_h7_inner_text");
document.getElementById("cell_h8").innerHTML = localStorage.getItem("cell_h8_inner_text");
document.getElementById("cell_h9").innerHTML = localStorage.getItem("cell_h9_inner_text");
document.getElementById("cell_h10").innerHTML = localStorage.getItem("cell_h10_inner_text");
document.getElementById("cell_h11").innerHTML = localStorage.getItem("cell_h11_inner_text");
document.getElementById("cell_h12").innerHTML = localStorage.getItem("cell_h12_inner_text");
document.getElementById("cell_h13").innerHTML = localStorage.getItem("cell_h13_inner_text");
//for I column cells
document.getElementById("cell_i1").innerHTML = localStorage.getItem("cell_i1_inner_text");
document.getElementById("cell_i2").innerHTML = localStorage.getItem("cell_i2_inner_text");
document.getElementById("cell_i3").innerHTML = localStorage.getItem("cell_i3_inner_text");
document.getElementById("cell_i4").innerHTML = localStorage.getItem("cell_i4_inner_text");
document.getElementById("cell_i5").innerHTML = localStorage.getItem("cell_i5_inner_text");
document.getElementById("cell_i6").innerHTML = localStorage.getItem("cell_i6_inner_text");
document.getElementById("cell_i7").innerHTML = localStorage.getItem("cell_i7_inner_text");
document.getElementById("cell_i8").innerHTML = localStorage.getItem("cell_i8_inner_text");
document.getElementById("cell_i9").innerHTML = localStorage.getItem("cell_i9_inner_text");
document.getElementById("cell_i10").innerHTML = localStorage.getItem("cell_i10_inner_text");
document.getElementById("cell_i11").innerHTML = localStorage.getItem("cell_i11_inner_text");
document.getElementById("cell_i12").innerHTML = localStorage.getItem("cell_i12_inner_text");
document.getElementById("cell_i13").innerHTML = localStorage.getItem("cell_i13_inner_text");
//for J column cells
document.getElementById("cell_j1").innerHTML = localStorage.getItem("cell_j1_inner_text");
document.getElementById("cell_j2").innerHTML = localStorage.getItem("cell_j2_inner_text");
document.getElementById("cell_j3").innerHTML = localStorage.getItem("cell_j3_inner_text");
document.getElementById("cell_j4").innerHTML = localStorage.getItem("cell_j4_inner_text");
document.getElementById("cell_j5").innerHTML = localStorage.getItem("cell_j5_inner_text");
document.getElementById("cell_j6").innerHTML = localStorage.getItem("cell_j6_inner_text");
document.getElementById("cell_j7").innerHTML = localStorage.getItem("cell_j7_inner_text");
document.getElementById("cell_j8").innerHTML = localStorage.getItem("cell_j8_inner_text");
document.getElementById("cell_j9").innerHTML = localStorage.getItem("cell_j9_inner_text");
document.getElementById("cell_j10").innerHTML = localStorage.getItem("cell_j10_inner_text");
document.getElementById("cell_j11").innerHTML = localStorage.getItem("cell_j11_inner_text");
document.getElementById("cell_j12").innerHTML = localStorage.getItem("cell_j12_inner_text");
document.getElementById("cell_j13").innerHTML = localStorage.getItem("cell_j13_inner_text");
//for K column cells
document.getElementById("cell_k1").innerHTML = localStorage.getItem("cell_k1_inner_text");
document.getElementById("cell_k2").innerHTML = localStorage.getItem("cell_k2_inner_text");
document.getElementById("cell_k3").innerHTML = localStorage.getItem("cell_k3_inner_text");
document.getElementById("cell_k4").innerHTML = localStorage.getItem("cell_k4_inner_text");
document.getElementById("cell_k5").innerHTML = localStorage.getItem("cell_k5_inner_text");
document.getElementById("cell_k6").innerHTML = localStorage.getItem("cell_k6_inner_text");
document.getElementById("cell_k7").innerHTML = localStorage.getItem("cell_k7_inner_text");
document.getElementById("cell_k8").innerHTML = localStorage.getItem("cell_k8_inner_text");
document.getElementById("cell_k9").innerHTML = localStorage.getItem("cell_k9_inner_text");
document.getElementById("cell_k10").innerHTML = localStorage.getItem("cell_k10_inner_text");
document.getElementById("cell_k11").innerHTML = localStorage.getItem("cell_k11_inner_text");
document.getElementById("cell_k12").innerHTML = localStorage.getItem("cell_k12_inner_text");
document.getElementById("cell_k13").innerHTML = localStorage.getItem("cell_k13_inner_text");
//for L column cells
document.getElementById("cell_l1").innerHTML = localStorage.getItem("cell_l1_inner_text");
document.getElementById("cell_l2").innerHTML = localStorage.getItem("cell_l2_inner_text");
document.getElementById("cell_l3").innerHTML = localStorage.getItem("cell_l3_inner_text");
document.getElementById("cell_l4").innerHTML = localStorage.getItem("cell_l4_inner_text");
document.getElementById("cell_l5").innerHTML = localStorage.getItem("cell_l5_inner_text");
document.getElementById("cell_l6").innerHTML = localStorage.getItem("cell_l6_inner_text");
document.getElementById("cell_l7").innerHTML = localStorage.getItem("cell_l7_inner_text");
document.getElementById("cell_l8").innerHTML = localStorage.getItem("cell_l8_inner_text");
document.getElementById("cell_l9").innerHTML = localStorage.getItem("cell_l9_inner_text");
document.getElementById("cell_l10").innerHTML = localStorage.getItem("cell_l10_inner_text");
document.getElementById("cell_l11").innerHTML = localStorage.getItem("cell_l11_inner_text");
document.getElementById("cell_l12").innerHTML = localStorage.getItem("cell_l12_inner_text");
document.getElementById("cell_l13").innerHTML = localStorage.getItem("cell_l13_inner_text");
//for M column cells
document.getElementById("cell_m1").innerHTML = localStorage.getItem("cell_m1_inner_text");
document.getElementById("cell_m2").innerHTML = localStorage.getItem("cell_m2_inner_text");
document.getElementById("cell_m3").innerHTML = localStorage.getItem("cell_m3_inner_text");
document.getElementById("cell_m4").innerHTML = localStorage.getItem("cell_m4_inner_text");
document.getElementById("cell_m5").innerHTML = localStorage.getItem("cell_m5_inner_text");
document.getElementById("cell_m6").innerHTML = localStorage.getItem("cell_m6_inner_text");
document.getElementById("cell_m7").innerHTML = localStorage.getItem("cell_m7_inner_text");
document.getElementById("cell_m8").innerHTML = localStorage.getItem("cell_m8_inner_text");
document.getElementById("cell_m9").innerHTML = localStorage.getItem("cell_m9_inner_text");
document.getElementById("cell_m10").innerHTML = localStorage.getItem("cell_m10_inner_text");
document.getElementById("cell_m11").innerHTML = localStorage.getItem("cell_m11_inner_text");
document.getElementById("cell_m12").innerHTML = localStorage.getItem("cell_m12_inner_text");
document.getElementById("cell_m13").innerHTML = localStorage.getItem("cell_m13_inner_text");
//for N column cells
document.getElementById("cell_n1").innerHTML = localStorage.getItem("cell_n1_inner_text");
document.getElementById("cell_n2").innerHTML = localStorage.getItem("cell_n2_inner_text");
document.getElementById("cell_n3").innerHTML = localStorage.getItem("cell_n3_inner_text");
document.getElementById("cell_n4").innerHTML = localStorage.getItem("cell_n4_inner_text");
document.getElementById("cell_n5").innerHTML = localStorage.getItem("cell_n5_inner_text");
document.getElementById("cell_n6").innerHTML = localStorage.getItem("cell_n6_inner_text");
document.getElementById("cell_n7").innerHTML = localStorage.getItem("cell_n7_inner_text");
document.getElementById("cell_n8").innerHTML = localStorage.getItem("cell_n8_inner_text");
document.getElementById("cell_n9").innerHTML = localStorage.getItem("cell_n9_inner_text");
document.getElementById("cell_n10").innerHTML = localStorage.getItem("cell_n10_inner_text");
document.getElementById("cell_n11").innerHTML = localStorage.getItem("cell_n11_inner_text");
document.getElementById("cell_n12").innerHTML = localStorage.getItem("cell_n12_inner_text");
document.getElementById("cell_n13").innerHTML = localStorage.getItem("cell_n13_inner_text");
//for O column cells
document.getElementById("cell_o1").innerHTML = localStorage.getItem("cell_o1_inner_text");
document.getElementById("cell_o2").innerHTML = localStorage.getItem("cell_o2_inner_text");
document.getElementById("cell_o3").innerHTML = localStorage.getItem("cell_o3_inner_text");
document.getElementById("cell_o4").innerHTML = localStorage.getItem("cell_o4_inner_text");
document.getElementById("cell_o5").innerHTML = localStorage.getItem("cell_o5_inner_text");
document.getElementById("cell_o6").innerHTML = localStorage.getItem("cell_o6_inner_text");
document.getElementById("cell_o7").innerHTML = localStorage.getItem("cell_o7_inner_text");
document.getElementById("cell_o8").innerHTML = localStorage.getItem("cell_o8_inner_text");
document.getElementById("cell_o9").innerHTML = localStorage.getItem("cell_o9_inner_text");
document.getElementById("cell_o10").innerHTML = localStorage.getItem("cell_o10_inner_text");
document.getElementById("cell_o11").innerHTML = localStorage.getItem("cell_o11_inner_text");
document.getElementById("cell_o12").innerHTML = localStorage.getItem("cell_o12_inner_text");
document.getElementById("cell_o13").innerHTML = localStorage.getItem("cell_o13_inner_text");
//for P column cells
document.getElementById("cell_p1").innerHTML = localStorage.getItem("cell_p1_inner_text");
document.getElementById("cell_p2").innerHTML = localStorage.getItem("cell_p2_inner_text");
document.getElementById("cell_p3").innerHTML = localStorage.getItem("cell_p3_inner_text");
document.getElementById("cell_p4").innerHTML = localStorage.getItem("cell_p4_inner_text");
document.getElementById("cell_p5").innerHTML = localStorage.getItem("cell_p5_inner_text");
document.getElementById("cell_p6").innerHTML = localStorage.getItem("cell_p6_inner_text");
document.getElementById("cell_p7").innerHTML = localStorage.getItem("cell_p7_inner_text");
document.getElementById("cell_p8").innerHTML = localStorage.getItem("cell_p8_inner_text");
document.getElementById("cell_p9").innerHTML = localStorage.getItem("cell_p9_inner_text");
document.getElementById("cell_p10").innerHTML = localStorage.getItem("cell_p10_inner_text");
document.getElementById("cell_p11").innerHTML = localStorage.getItem("cell_p11_inner_text");
document.getElementById("cell_p12").innerHTML = localStorage.getItem("cell_p12_inner_text");
document.getElementById("cell_p13").innerHTML = localStorage.getItem("cell_p13_inner_text");
//for Q column cells
document.getElementById("cell_q1").innerHTML = localStorage.getItem("cell_q1_inner_text");
document.getElementById("cell_q2").innerHTML = localStorage.getItem("cell_q2_inner_text");
document.getElementById("cell_q3").innerHTML = localStorage.getItem("cell_q3_inner_text");
document.getElementById("cell_q4").innerHTML = localStorage.getItem("cell_q4_inner_text");
document.getElementById("cell_q5").innerHTML = localStorage.getItem("cell_q5_inner_text");
document.getElementById("cell_q6").innerHTML = localStorage.getItem("cell_q6_inner_text");
document.getElementById("cell_q7").innerHTML = localStorage.getItem("cell_q7_inner_text");
document.getElementById("cell_q8").innerHTML = localStorage.getItem("cell_q8_inner_text");
document.getElementById("cell_q9").innerHTML = localStorage.getItem("cell_q9_inner_text");
document.getElementById("cell_q10").innerHTML = localStorage.getItem("cell_q10_inner_text");
document.getElementById("cell_q11").innerHTML = localStorage.getItem("cell_q11_inner_text");
document.getElementById("cell_q12").innerHTML = localStorage.getItem("cell_q12_inner_text");
document.getElementById("cell_q13").innerHTML = localStorage.getItem("cell_q13_inner_text");
//for R column cells
document.getElementById("cell_r1").innerHTML = localStorage.getItem("cell_r1_inner_text");
document.getElementById("cell_r2").innerHTML = localStorage.getItem("cell_r2_inner_text");
document.getElementById("cell_r3").innerHTML = localStorage.getItem("cell_r3_inner_text");
document.getElementById("cell_r4").innerHTML = localStorage.getItem("cell_r4_inner_text");
document.getElementById("cell_r5").innerHTML = localStorage.getItem("cell_r5_inner_text");
document.getElementById("cell_r6").innerHTML = localStorage.getItem("cell_r6_inner_text");
document.getElementById("cell_r7").innerHTML = localStorage.getItem("cell_r7_inner_text");
document.getElementById("cell_r8").innerHTML = localStorage.getItem("cell_r8_inner_text");
document.getElementById("cell_r9").innerHTML = localStorage.getItem("cell_r9_inner_text");
document.getElementById("cell_r10").innerHTML = localStorage.getItem("cell_r10_inner_text");
document.getElementById("cell_r11").innerHTML = localStorage.getItem("cell_r11_inner_text");
document.getElementById("cell_r12").innerHTML = localStorage.getItem("cell_r12_inner_text");
document.getElementById("cell_r13").innerHTML = localStorage.getItem("cell_r13_inner_text");
//for S column cells
document.getElementById("cell_s1").innerHTML = localStorage.getItem("cell_s1_inner_text");
document.getElementById("cell_s2").innerHTML = localStorage.getItem("cell_s2_inner_text");
document.getElementById("cell_s3").innerHTML = localStorage.getItem("cell_s3_inner_text");
document.getElementById("cell_s4").innerHTML = localStorage.getItem("cell_s4_inner_text");
document.getElementById("cell_s5").innerHTML = localStorage.getItem("cell_s5_inner_text");
document.getElementById("cell_s6").innerHTML = localStorage.getItem("cell_s6_inner_text");
document.getElementById("cell_s7").innerHTML = localStorage.getItem("cell_s7_inner_text");
document.getElementById("cell_s8").innerHTML = localStorage.getItem("cell_s8_inner_text");
document.getElementById("cell_s9").innerHTML = localStorage.getItem("cell_s9_inner_text");
document.getElementById("cell_s10").innerHTML = localStorage.getItem("cell_s10_inner_text");
document.getElementById("cell_s11").innerHTML = localStorage.getItem("cell_s11_inner_text");
document.getElementById("cell_s12").innerHTML = localStorage.getItem("cell_s12_inner_text");
document.getElementById("cell_s13").innerHTML = localStorage.getItem("cell_s13_inner_text");
//for T column cells
document.getElementById("cell_t1").innerHTML = localStorage.getItem("cell_t1_inner_text");
document.getElementById("cell_t2").innerHTML = localStorage.getItem("cell_t2_inner_text");
document.getElementById("cell_t3").innerHTML = localStorage.getItem("cell_t3_inner_text");
document.getElementById("cell_t4").innerHTML = localStorage.getItem("cell_t4_inner_text");
document.getElementById("cell_t5").innerHTML = localStorage.getItem("cell_t5_inner_text");
document.getElementById("cell_t6").innerHTML = localStorage.getItem("cell_t6_inner_text");
document.getElementById("cell_t7").innerHTML = localStorage.getItem("cell_t7_inner_text");
document.getElementById("cell_t8").innerHTML = localStorage.getItem("cell_t8_inner_text");
document.getElementById("cell_t9").innerHTML = localStorage.getItem("cell_t9_inner_text");
document.getElementById("cell_t10").innerHTML = localStorage.getItem("cell_t10_inner_text");
document.getElementById("cell_t11").innerHTML = localStorage.getItem("cell_t11_inner_text");
document.getElementById("cell_t12").innerHTML = localStorage.getItem("cell_t12_inner_text");
document.getElementById("cell_t13").innerHTML = localStorage.getItem("cell_t13_inner_text");
//for U column cells
document.getElementById("cell_u1").innerHTML = localStorage.getItem("cell_u1_inner_text");
document.getElementById("cell_u2").innerHTML = localStorage.getItem("cell_u2_inner_text");
document.getElementById("cell_u3").innerHTML = localStorage.getItem("cell_u3_inner_text");
document.getElementById("cell_u4").innerHTML = localStorage.getItem("cell_u4_inner_text");
document.getElementById("cell_u5").innerHTML = localStorage.getItem("cell_u5_inner_text");
document.getElementById("cell_u6").innerHTML = localStorage.getItem("cell_u6_inner_text");
document.getElementById("cell_u7").innerHTML = localStorage.getItem("cell_u7_inner_text");
document.getElementById("cell_u8").innerHTML = localStorage.getItem("cell_u8_inner_text");
document.getElementById("cell_u9").innerHTML = localStorage.getItem("cell_u9_inner_text");
document.getElementById("cell_u10").innerHTML = localStorage.getItem("cell_u10_inner_text");
document.getElementById("cell_u11").innerHTML = localStorage.getItem("cell_u11_inner_text");
document.getElementById("cell_u12").innerHTML = localStorage.getItem("cell_u12_inner_text");
document.getElementById("cell_u13").innerHTML = localStorage.getItem("cell_u13_inner_text");
//for V column cells
document.getElementById("cell_v1").innerHTML = localStorage.getItem("cell_v1_inner_text");
document.getElementById("cell_v2").innerHTML = localStorage.getItem("cell_v2_inner_text");
document.getElementById("cell_v3").innerHTML = localStorage.getItem("cell_v3_inner_text");
document.getElementById("cell_v4").innerHTML = localStorage.getItem("cell_v4_inner_text");
document.getElementById("cell_v5").innerHTML = localStorage.getItem("cell_v5_inner_text");
document.getElementById("cell_v6").innerHTML = localStorage.getItem("cell_v6_inner_text");
document.getElementById("cell_v7").innerHTML = localStorage.getItem("cell_v7_inner_text");
document.getElementById("cell_v8").innerHTML = localStorage.getItem("cell_v8_inner_text");
document.getElementById("cell_v9").innerHTML = localStorage.getItem("cell_v9_inner_text");
document.getElementById("cell_v10").innerHTML = localStorage.getItem("cell_v10_inner_text");
document.getElementById("cell_v11").innerHTML = localStorage.getItem("cell_v11_inner_text");
document.getElementById("cell_v12").innerHTML = localStorage.getItem("cell_v12_inner_text");
document.getElementById("cell_v13").innerHTML = localStorage.getItem("cell_v13_inner_text");
//for W column cells
document.getElementById("cell_w1").innerHTML = localStorage.getItem("cell_w1_inner_text");
document.getElementById("cell_w2").innerHTML = localStorage.getItem("cell_w2_inner_text");
document.getElementById("cell_w3").innerHTML = localStorage.getItem("cell_w3_inner_text");
document.getElementById("cell_w4").innerHTML = localStorage.getItem("cell_w4_inner_text");
document.getElementById("cell_w5").innerHTML = localStorage.getItem("cell_w5_inner_text");
document.getElementById("cell_w6").innerHTML = localStorage.getItem("cell_w6_inner_text");
document.getElementById("cell_w7").innerHTML = localStorage.getItem("cell_w7_inner_text");
document.getElementById("cell_w8").innerHTML = localStorage.getItem("cell_w8_inner_text");
document.getElementById("cell_w9").innerHTML = localStorage.getItem("cell_w9_inner_text");
document.getElementById("cell_w10").innerHTML = localStorage.getItem("cell_w10_inner_text");
document.getElementById("cell_w11").innerHTML = localStorage.getItem("cell_w11_inner_text");
document.getElementById("cell_w12").innerHTML = localStorage.getItem("cell_w12_inner_text");
document.getElementById("cell_w13").innerHTML = localStorage.getItem("cell_w13_inner_text");
//for X column cells
document.getElementById("cell_x1").innerHTML = localStorage.getItem("cell_x1_inner_text");
document.getElementById("cell_x2").innerHTML = localStorage.getItem("cell_x2_inner_text");
document.getElementById("cell_x3").innerHTML = localStorage.getItem("cell_x3_inner_text");
document.getElementById("cell_x4").innerHTML = localStorage.getItem("cell_x4_inner_text");
document.getElementById("cell_x5").innerHTML = localStorage.getItem("cell_x5_inner_text");
document.getElementById("cell_x6").innerHTML = localStorage.getItem("cell_x6_inner_text");
document.getElementById("cell_x7").innerHTML = localStorage.getItem("cell_x7_inner_text");
document.getElementById("cell_x8").innerHTML = localStorage.getItem("cell_x8_inner_text");
document.getElementById("cell_x9").innerHTML = localStorage.getItem("cell_x9_inner_text");
document.getElementById("cell_x10").innerHTML = localStorage.getItem("cell_x10_inner_text");
document.getElementById("cell_x11").innerHTML = localStorage.getItem("cell_x11_inner_text");
document.getElementById("cell_x12").innerHTML = localStorage.getItem("cell_x12_inner_text");
document.getElementById("cell_x13").innerHTML = localStorage.getItem("cell_x13_inner_text");
//for Y column cells
document.getElementById("cell_y1").innerHTML = localStorage.getItem("cell_y1_inner_text");
document.getElementById("cell_y2").innerHTML = localStorage.getItem("cell_y2_inner_text");
document.getElementById("cell_y3").innerHTML = localStorage.getItem("cell_y3_inner_text");
document.getElementById("cell_y4").innerHTML = localStorage.getItem("cell_y4_inner_text");
document.getElementById("cell_y5").innerHTML = localStorage.getItem("cell_y5_inner_text");
document.getElementById("cell_y6").innerHTML = localStorage.getItem("cell_y6_inner_text");
document.getElementById("cell_y7").innerHTML = localStorage.getItem("cell_y7_inner_text");
document.getElementById("cell_y8").innerHTML = localStorage.getItem("cell_y8_inner_text");
document.getElementById("cell_y9").innerHTML = localStorage.getItem("cell_y9_inner_text");
document.getElementById("cell_y10").innerHTML = localStorage.getItem("cell_y10_inner_text");
document.getElementById("cell_y11").innerHTML = localStorage.getItem("cell_y11_inner_text");
document.getElementById("cell_y12").innerHTML = localStorage.getItem("cell_y12_inner_text");
document.getElementById("cell_y13").innerHTML = localStorage.getItem("cell_y13_inner_text");
//for Z column cells
document.getElementById("cell_z1").innerHTML = localStorage.getItem("cell_z1_inner_text");
document.getElementById("cell_z2").innerHTML = localStorage.getItem("cell_z2_inner_text");
document.getElementById("cell_z3").innerHTML = localStorage.getItem("cell_z3_inner_text");
document.getElementById("cell_z4").innerHTML = localStorage.getItem("cell_z4_inner_text");
document.getElementById("cell_z5").innerHTML = localStorage.getItem("cell_z5_inner_text");
document.getElementById("cell_z6").innerHTML = localStorage.getItem("cell_z6_inner_text");
document.getElementById("cell_z7").innerHTML = localStorage.getItem("cell_z7_inner_text");
document.getElementById("cell_z8").innerHTML = localStorage.getItem("cell_z8_inner_text");
document.getElementById("cell_z9").innerHTML = localStorage.getItem("cell_z9_inner_text");
document.getElementById("cell_z10").innerHTML = localStorage.getItem("cell_z10_inner_text");
document.getElementById("cell_z11").innerHTML = localStorage.getItem("cell_z11_inner_text");
document.getElementById("cell_z12").innerHTML = localStorage.getItem("cell_z12_inner_text");
document.getElementById("cell_z13").innerHTML = localStorage.getItem("cell_z13_inner_text");

//save new value
setInterval(function() {
    //for A column cells
    localStorage.setItem("cell_a1_inner_text", document.getElementById("cell_a1").innerHTML);
    localStorage.setItem("cell_a2_inner_text", document.getElementById("cell_a2").innerHTML);
    localStorage.setItem("cell_a3_inner_text", document.getElementById("cell_a3").innerHTML);
    localStorage.setItem("cell_a4_inner_text", document.getElementById("cell_a4").innerHTML);
    localStorage.setItem("cell_a5_inner_text", document.getElementById("cell_a5").innerHTML);
    localStorage.setItem("cell_a6_inner_text", document.getElementById("cell_a6").innerHTML);
    localStorage.setItem("cell_a7_inner_text", document.getElementById("cell_a7").innerHTML);
    localStorage.setItem("cell_a8_inner_text", document.getElementById("cell_a8").innerHTML);
    localStorage.setItem("cell_a9_inner_text", document.getElementById("cell_a9").innerHTML);
    localStorage.setItem("cell_a10_inner_text", document.getElementById("cell_a10").innerHTML);
    localStorage.setItem("cell_a11_inner_text", document.getElementById("cell_a11").innerHTML);
    localStorage.setItem("cell_a12_inner_text", document.getElementById("cell_a12").innerHTML);
    localStorage.setItem("cell_a13_inner_text", document.getElementById("cell_a13").innerHTML);
    //for B column cells
    localStorage.setItem("cell_b1_inner_text", document.getElementById("cell_b1").innerHTML);
    localStorage.setItem("cell_b2_inner_text", document.getElementById("cell_b2").innerHTML);
    localStorage.setItem("cell_b3_inner_text", document.getElementById("cell_b3").innerHTML);
    localStorage.setItem("cell_b4_inner_text", document.getElementById("cell_b4").innerHTML);
    localStorage.setItem("cell_b5_inner_text", document.getElementById("cell_b5").innerHTML);
    localStorage.setItem("cell_b6_inner_text", document.getElementById("cell_b6").innerHTML);
    localStorage.setItem("cell_b7_inner_text", document.getElementById("cell_b7").innerHTML);
    localStorage.setItem("cell_b8_inner_text", document.getElementById("cell_b8").innerHTML);
    localStorage.setItem("cell_b9_inner_text", document.getElementById("cell_b9").innerHTML);
    localStorage.setItem("cell_b10_inner_text", document.getElementById("cell_b10").innerHTML);
    localStorage.setItem("cell_b11_inner_text", document.getElementById("cell_b11").innerHTML);
    localStorage.setItem("cell_b12_inner_text", document.getElementById("cell_b12").innerHTML);
    localStorage.setItem("cell_b13_inner_text", document.getElementById("cell_b13").innerHTML);
    //for C column cells
    localStorage.setItem("cell_c1_inner_text", document.getElementById("cell_c1").innerHTML);
    localStorage.setItem("cell_c2_inner_text", document.getElementById("cell_c2").innerHTML);
    localStorage.setItem("cell_c3_inner_text", document.getElementById("cell_c3").innerHTML);
    localStorage.setItem("cell_c4_inner_text", document.getElementById("cell_c4").innerHTML);
    localStorage.setItem("cell_c5_inner_text", document.getElementById("cell_c5").innerHTML);
    localStorage.setItem("cell_c6_inner_text", document.getElementById("cell_c6").innerHTML);
    localStorage.setItem("cell_c7_inner_text", document.getElementById("cell_c7").innerHTML);
    localStorage.setItem("cell_c8_inner_text", document.getElementById("cell_c8").innerHTML);
    localStorage.setItem("cell_c9_inner_text", document.getElementById("cell_c9").innerHTML);
    localStorage.setItem("cell_c10_inner_text", document.getElementById("cell_c10").innerHTML);
    localStorage.setItem("cell_c11_inner_text", document.getElementById("cell_c11").innerHTML);
    localStorage.setItem("cell_c12_inner_text", document.getElementById("cell_c12").innerHTML);
    localStorage.setItem("cell_c13_inner_text", document.getElementById("cell_c13").innerHTML);
    //for D column cells
    localStorage.setItem("cell_d1_inner_text", document.getElementById("cell_d1").innerHTML);
    localStorage.setItem("cell_d2_inner_text", document.getElementById("cell_d2").innerHTML);
    localStorage.setItem("cell_d3_inner_text", document.getElementById("cell_d3").innerHTML);
    localStorage.setItem("cell_d4_inner_text", document.getElementById("cell_d4").innerHTML);
    localStorage.setItem("cell_d5_inner_text", document.getElementById("cell_d5").innerHTML);
    localStorage.setItem("cell_d6_inner_text", document.getElementById("cell_d6").innerHTML);
    localStorage.setItem("cell_d7_inner_text", document.getElementById("cell_d7").innerHTML);
    localStorage.setItem("cell_d8_inner_text", document.getElementById("cell_d8").innerHTML);
    localStorage.setItem("cell_d9_inner_text", document.getElementById("cell_d9").innerHTML);
    localStorage.setItem("cell_d10_inner_text", document.getElementById("cell_d10").innerHTML);
    localStorage.setItem("cell_d11_inner_text", document.getElementById("cell_d11").innerHTML);
    localStorage.setItem("cell_d12_inner_text", document.getElementById("cell_d12").innerHTML);
    localStorage.setItem("cell_d13_inner_text", document.getElementById("cell_d13").innerHTML);
    //for E column cells
    localStorage.setItem("cell_e1_inner_text", document.getElementById("cell_e1").innerHTML);
    localStorage.setItem("cell_e2_inner_text", document.getElementById("cell_e2").innerHTML);
    localStorage.setItem("cell_e3_inner_text", document.getElementById("cell_e3").innerHTML);
    localStorage.setItem("cell_e4_inner_text", document.getElementById("cell_e4").innerHTML);
    localStorage.setItem("cell_e5_inner_text", document.getElementById("cell_e5").innerHTML);
    localStorage.setItem("cell_e6_inner_text", document.getElementById("cell_e6").innerHTML);
    localStorage.setItem("cell_e7_inner_text", document.getElementById("cell_e7").innerHTML);
    localStorage.setItem("cell_e8_inner_text", document.getElementById("cell_e8").innerHTML);
    localStorage.setItem("cell_e9_inner_text", document.getElementById("cell_e9").innerHTML);
    localStorage.setItem("cell_e10_inner_text", document.getElementById("cell_e10").innerHTML);
    localStorage.setItem("cell_e11_inner_text", document.getElementById("cell_e11").innerHTML);
    localStorage.setItem("cell_e12_inner_text", document.getElementById("cell_e12").innerHTML);
    localStorage.setItem("cell_e13_inner_text", document.getElementById("cell_e13").innerHTML);
    //for F column cells
    localStorage.setItem("cell_f1_inner_text", document.getElementById("cell_f1").innerHTML);
    localStorage.setItem("cell_f2_inner_text", document.getElementById("cell_f2").innerHTML);
    localStorage.setItem("cell_f3_inner_text", document.getElementById("cell_f3").innerHTML);
    localStorage.setItem("cell_f4_inner_text", document.getElementById("cell_f4").innerHTML);
    localStorage.setItem("cell_f5_inner_text", document.getElementById("cell_f5").innerHTML);
    localStorage.setItem("cell_f6_inner_text", document.getElementById("cell_f6").innerHTML);
    localStorage.setItem("cell_f7_inner_text", document.getElementById("cell_f7").innerHTML);
    localStorage.setItem("cell_f8_inner_text", document.getElementById("cell_f8").innerHTML);
    localStorage.setItem("cell_f9_inner_text", document.getElementById("cell_f9").innerHTML);
    localStorage.setItem("cell_f10_inner_text", document.getElementById("cell_f10").innerHTML);
    localStorage.setItem("cell_f11_inner_text", document.getElementById("cell_f11").innerHTML);
    localStorage.setItem("cell_f12_inner_text", document.getElementById("cell_f12").innerHTML);
    localStorage.setItem("cell_f13_inner_text", document.getElementById("cell_f13").innerHTML);
    //for G column cells
    localStorage.setItem("cell_g1_inner_text", document.getElementById("cell_g1").innerHTML);
    localStorage.setItem("cell_g2_inner_text", document.getElementById("cell_g2").innerHTML);
    localStorage.setItem("cell_g3_inner_text", document.getElementById("cell_g3").innerHTML);
    localStorage.setItem("cell_g4_inner_text", document.getElementById("cell_g4").innerHTML);
    localStorage.setItem("cell_g5_inner_text", document.getElementById("cell_g5").innerHTML);
    localStorage.setItem("cell_g6_inner_text", document.getElementById("cell_g6").innerHTML);
    localStorage.setItem("cell_g7_inner_text", document.getElementById("cell_g7").innerHTML);
    localStorage.setItem("cell_g8_inner_text", document.getElementById("cell_g8").innerHTML);
    localStorage.setItem("cell_g9_inner_text", document.getElementById("cell_g9").innerHTML);
    localStorage.setItem("cell_g10_inner_text", document.getElementById("cell_g10").innerHTML);
    localStorage.setItem("cell_g11_inner_text", document.getElementById("cell_g11").innerHTML);
    localStorage.setItem("cell_g12_inner_text", document.getElementById("cell_g12").innerHTML);
    localStorage.setItem("cell_g13_inner_text", document.getElementById("cell_g13").innerHTML);
    //for H column cells
    localStorage.setItem("cell_h1_inner_text", document.getElementById("cell_h1").innerHTML);
    localStorage.setItem("cell_h2_inner_text", document.getElementById("cell_h2").innerHTML);
    localStorage.setItem("cell_h3_inner_text", document.getElementById("cell_h3").innerHTML);
    localStorage.setItem("cell_h4_inner_text", document.getElementById("cell_h4").innerHTML);
    localStorage.setItem("cell_h5_inner_text", document.getElementById("cell_h5").innerHTML);
    localStorage.setItem("cell_h6_inner_text", document.getElementById("cell_h6").innerHTML);
    localStorage.setItem("cell_h7_inner_text", document.getElementById("cell_h7").innerHTML);
    localStorage.setItem("cell_h8_inner_text", document.getElementById("cell_h8").innerHTML);
    localStorage.setItem("cell_h9_inner_text", document.getElementById("cell_h9").innerHTML);
    localStorage.setItem("cell_h10_inner_text", document.getElementById("cell_h10").innerHTML);
    localStorage.setItem("cell_h11_inner_text", document.getElementById("cell_h11").innerHTML);
    localStorage.setItem("cell_h12_inner_text", document.getElementById("cell_h12").innerHTML);
    localStorage.setItem("cell_h13_inner_text", document.getElementById("cell_h13").innerHTML);
    //for I column cells
    localStorage.setItem("cell_i1_inner_text", document.getElementById("cell_i1").innerHTML);
    localStorage.setItem("cell_i2_inner_text", document.getElementById("cell_i2").innerHTML);
    localStorage.setItem("cell_i3_inner_text", document.getElementById("cell_i3").innerHTML);
    localStorage.setItem("cell_i4_inner_text", document.getElementById("cell_i4").innerHTML);
    localStorage.setItem("cell_i5_inner_text", document.getElementById("cell_i5").innerHTML);
    localStorage.setItem("cell_i6_inner_text", document.getElementById("cell_i6").innerHTML);
    localStorage.setItem("cell_i7_inner_text", document.getElementById("cell_i7").innerHTML);
    localStorage.setItem("cell_i8_inner_text", document.getElementById("cell_i8").innerHTML);
    localStorage.setItem("cell_i9_inner_text", document.getElementById("cell_i9").innerHTML);
    localStorage.setItem("cell_i10_inner_text", document.getElementById("cell_i10").innerHTML);
    localStorage.setItem("cell_i11_inner_text", document.getElementById("cell_i11").innerHTML);
    localStorage.setItem("cell_i12_inner_text", document.getElementById("cell_i12").innerHTML);
    localStorage.setItem("cell_i13_inner_text", document.getElementById("cell_i13").innerHTML);
    //for J column cells
    localStorage.setItem("cell_j1_inner_text", document.getElementById("cell_j1").innerHTML);
    localStorage.setItem("cell_j2_inner_text", document.getElementById("cell_j2").innerHTML);
    localStorage.setItem("cell_j3_inner_text", document.getElementById("cell_j3").innerHTML);
    localStorage.setItem("cell_j4_inner_text", document.getElementById("cell_j4").innerHTML);
    localStorage.setItem("cell_j5_inner_text", document.getElementById("cell_j5").innerHTML);
    localStorage.setItem("cell_j6_inner_text", document.getElementById("cell_j6").innerHTML);
    localStorage.setItem("cell_j7_inner_text", document.getElementById("cell_j7").innerHTML);
    localStorage.setItem("cell_j8_inner_text", document.getElementById("cell_j8").innerHTML);
    localStorage.setItem("cell_j9_inner_text", document.getElementById("cell_j9").innerHTML);
    localStorage.setItem("cell_j10_inner_text", document.getElementById("cell_j10").innerHTML);
    localStorage.setItem("cell_j11_inner_text", document.getElementById("cell_j11").innerHTML);
    localStorage.setItem("cell_j12_inner_text", document.getElementById("cell_j12").innerHTML);
    localStorage.setItem("cell_j13_inner_text", document.getElementById("cell_j13").innerHTML);
    //for K column cells
    localStorage.setItem("cell_k1_inner_text", document.getElementById("cell_k1").innerHTML);
    localStorage.setItem("cell_k2_inner_text", document.getElementById("cell_k2").innerHTML);
    localStorage.setItem("cell_k3_inner_text", document.getElementById("cell_k3").innerHTML);
    localStorage.setItem("cell_k4_inner_text", document.getElementById("cell_k4").innerHTML);
    localStorage.setItem("cell_k5_inner_text", document.getElementById("cell_k5").innerHTML);
    localStorage.setItem("cell_k6_inner_text", document.getElementById("cell_k6").innerHTML);
    localStorage.setItem("cell_k7_inner_text", document.getElementById("cell_k7").innerHTML);
    localStorage.setItem("cell_k8_inner_text", document.getElementById("cell_k8").innerHTML);
    localStorage.setItem("cell_k9_inner_text", document.getElementById("cell_k9").innerHTML);
    localStorage.setItem("cell_k10_inner_text", document.getElementById("cell_k10").innerHTML);
    localStorage.setItem("cell_k11_inner_text", document.getElementById("cell_k11").innerHTML);
    localStorage.setItem("cell_k12_inner_text", document.getElementById("cell_k12").innerHTML);
    localStorage.setItem("cell_k13_inner_text", document.getElementById("cell_k13").innerHTML);
    //for L column cells
    localStorage.setItem("cell_l1_inner_text", document.getElementById("cell_l1").innerHTML);
    localStorage.setItem("cell_l2_inner_text", document.getElementById("cell_l2").innerHTML);
    localStorage.setItem("cell_l3_inner_text", document.getElementById("cell_l3").innerHTML);
    localStorage.setItem("cell_l4_inner_text", document.getElementById("cell_l4").innerHTML);
    localStorage.setItem("cell_l5_inner_text", document.getElementById("cell_l5").innerHTML);
    localStorage.setItem("cell_l6_inner_text", document.getElementById("cell_l6").innerHTML);
    localStorage.setItem("cell_l7_inner_text", document.getElementById("cell_l7").innerHTML);
    localStorage.setItem("cell_l8_inner_text", document.getElementById("cell_l8").innerHTML);
    localStorage.setItem("cell_l9_inner_text", document.getElementById("cell_l9").innerHTML);
    localStorage.setItem("cell_l10_inner_text", document.getElementById("cell_l10").innerHTML);
    localStorage.setItem("cell_l11_inner_text", document.getElementById("cell_l11").innerHTML);
    localStorage.setItem("cell_l12_inner_text", document.getElementById("cell_l12").innerHTML);
    localStorage.setItem("cell_l13_inner_text", document.getElementById("cell_l13").innerHTML);
    //for M column cells
    localStorage.setItem("cell_m1_inner_text", document.getElementById("cell_m1").innerHTML);
    localStorage.setItem("cell_m2_inner_text", document.getElementById("cell_m2").innerHTML);
    localStorage.setItem("cell_m3_inner_text", document.getElementById("cell_m3").innerHTML);
    localStorage.setItem("cell_m4_inner_text", document.getElementById("cell_m4").innerHTML);
    localStorage.setItem("cell_m5_inner_text", document.getElementById("cell_m5").innerHTML);
    localStorage.setItem("cell_m6_inner_text", document.getElementById("cell_m6").innerHTML);
    localStorage.setItem("cell_m7_inner_text", document.getElementById("cell_m7").innerHTML);
    localStorage.setItem("cell_m8_inner_text", document.getElementById("cell_m8").innerHTML);
    localStorage.setItem("cell_m9_inner_text", document.getElementById("cell_m9").innerHTML);
    localStorage.setItem("cell_m10_inner_text", document.getElementById("cell_m10").innerHTML);
    localStorage.setItem("cell_m11_inner_text", document.getElementById("cell_m11").innerHTML);
    localStorage.setItem("cell_m12_inner_text", document.getElementById("cell_m12").innerHTML);
    localStorage.setItem("cell_m13_inner_text", document.getElementById("cell_m13").innerHTML);
    //for N column cells
    localStorage.setItem("cell_n1_inner_text", document.getElementById("cell_n1").innerHTML);
    localStorage.setItem("cell_n2_inner_text", document.getElementById("cell_n2").innerHTML);
    localStorage.setItem("cell_n3_inner_text", document.getElementById("cell_n3").innerHTML);
    localStorage.setItem("cell_n4_inner_text", document.getElementById("cell_n4").innerHTML);
    localStorage.setItem("cell_n5_inner_text", document.getElementById("cell_n5").innerHTML);
    localStorage.setItem("cell_n6_inner_text", document.getElementById("cell_n6").innerHTML);
    localStorage.setItem("cell_n7_inner_text", document.getElementById("cell_n7").innerHTML);
    localStorage.setItem("cell_n8_inner_text", document.getElementById("cell_n8").innerHTML);
    localStorage.setItem("cell_n9_inner_text", document.getElementById("cell_n9").innerHTML);
    localStorage.setItem("cell_n10_inner_text", document.getElementById("cell_n10").innerHTML);
    localStorage.setItem("cell_n11_inner_text", document.getElementById("cell_n11").innerHTML);
    localStorage.setItem("cell_n12_inner_text", document.getElementById("cell_n12").innerHTML);
    localStorage.setItem("cell_n13_inner_text", document.getElementById("cell_n13").innerHTML);
    //for O column cells
    localStorage.setItem("cell_o1_inner_text", document.getElementById("cell_o1").innerHTML);
    localStorage.setItem("cell_o2_inner_text", document.getElementById("cell_o2").innerHTML);
    localStorage.setItem("cell_o3_inner_text", document.getElementById("cell_o3").innerHTML);
    localStorage.setItem("cell_o4_inner_text", document.getElementById("cell_o4").innerHTML);
    localStorage.setItem("cell_o5_inner_text", document.getElementById("cell_o5").innerHTML);
    localStorage.setItem("cell_o6_inner_text", document.getElementById("cell_o6").innerHTML);
    localStorage.setItem("cell_o7_inner_text", document.getElementById("cell_o7").innerHTML);
    localStorage.setItem("cell_o8_inner_text", document.getElementById("cell_o8").innerHTML);
    localStorage.setItem("cell_o9_inner_text", document.getElementById("cell_o9").innerHTML);
    localStorage.setItem("cell_o10_inner_text", document.getElementById("cell_o10").innerHTML);
    localStorage.setItem("cell_o11_inner_text", document.getElementById("cell_o11").innerHTML);
    localStorage.setItem("cell_o12_inner_text", document.getElementById("cell_o12").innerHTML);
    localStorage.setItem("cell_o13_inner_text", document.getElementById("cell_o13").innerHTML);
    //for P column cells
    localStorage.setItem("cell_p1_inner_text", document.getElementById("cell_p1").innerHTML);
    localStorage.setItem("cell_p2_inner_text", document.getElementById("cell_p2").innerHTML);
    localStorage.setItem("cell_p3_inner_text", document.getElementById("cell_p3").innerHTML);
    localStorage.setItem("cell_p4_inner_text", document.getElementById("cell_p4").innerHTML);
    localStorage.setItem("cell_p5_inner_text", document.getElementById("cell_p5").innerHTML);
    localStorage.setItem("cell_p6_inner_text", document.getElementById("cell_p6").innerHTML);
    localStorage.setItem("cell_p7_inner_text", document.getElementById("cell_p7").innerHTML);
    localStorage.setItem("cell_p8_inner_text", document.getElementById("cell_p8").innerHTML);
    localStorage.setItem("cell_p9_inner_text", document.getElementById("cell_p9").innerHTML);
    localStorage.setItem("cell_p10_inner_text", document.getElementById("cell_p10").innerHTML);
    localStorage.setItem("cell_p11_inner_text", document.getElementById("cell_p11").innerHTML);
    localStorage.setItem("cell_p12_inner_text", document.getElementById("cell_p12").innerHTML);
    localStorage.setItem("cell_p13_inner_text", document.getElementById("cell_p13").innerHTML);
    //for Q column cells
    localStorage.setItem("cell_q1_inner_text", document.getElementById("cell_q1").innerHTML);
    localStorage.setItem("cell_q2_inner_text", document.getElementById("cell_q2").innerHTML);
    localStorage.setItem("cell_q3_inner_text", document.getElementById("cell_q3").innerHTML);
    localStorage.setItem("cell_q4_inner_text", document.getElementById("cell_q4").innerHTML);
    localStorage.setItem("cell_q5_inner_text", document.getElementById("cell_q5").innerHTML);
    localStorage.setItem("cell_q6_inner_text", document.getElementById("cell_q6").innerHTML);
    localStorage.setItem("cell_q7_inner_text", document.getElementById("cell_q7").innerHTML);
    localStorage.setItem("cell_q8_inner_text", document.getElementById("cell_q8").innerHTML);
    localStorage.setItem("cell_q9_inner_text", document.getElementById("cell_a9").innerHTML);
    localStorage.setItem("cell_q10_inner_text", document.getElementById("cell_q10").innerHTML);
    localStorage.setItem("cell_q11_inner_text", document.getElementById("cell_q11").innerHTML);
    localStorage.setItem("cell_q12_inner_text", document.getElementById("cell_q12").innerHTML);
    localStorage.setItem("cell_q13_inner_text", document.getElementById("cell_q13").innerHTML);
    //for R column cells
    localStorage.setItem("cell_r1_inner_text", document.getElementById("cell_r1").innerHTML);
    localStorage.setItem("cell_r2_inner_text", document.getElementById("cell_r2").innerHTML);
    localStorage.setItem("cell_r3_inner_text", document.getElementById("cell_r3").innerHTML);
    localStorage.setItem("cell_r4_inner_text", document.getElementById("cell_r4").innerHTML);
    localStorage.setItem("cell_r5_inner_text", document.getElementById("cell_r5").innerHTML);
    localStorage.setItem("cell_r6_inner_text", document.getElementById("cell_r6").innerHTML);
    localStorage.setItem("cell_r7_inner_text", document.getElementById("cell_r7").innerHTML);
    localStorage.setItem("cell_r8_inner_text", document.getElementById("cell_r8").innerHTML);
    localStorage.setItem("cell_r9_inner_text", document.getElementById("cell_r9").innerHTML);
    localStorage.setItem("cell_r10_inner_text", document.getElementById("cell_r10").innerHTML);
    localStorage.setItem("cell_r11_inner_text", document.getElementById("cell_r11").innerHTML);
    localStorage.setItem("cell_r12_inner_text", document.getElementById("cell_r12").innerHTML);
    localStorage.setItem("cell_r13_inner_text", document.getElementById("cell_r13").innerHTML);
    //for S column cells
    localStorage.setItem("cell_s1_inner_text", document.getElementById("cell_s1").innerHTML);
    localStorage.setItem("cell_s2_inner_text", document.getElementById("cell_s2").innerHTML);
    localStorage.setItem("cell_s3_inner_text", document.getElementById("cell_s3").innerHTML);
    localStorage.setItem("cell_s4_inner_text", document.getElementById("cell_s4").innerHTML);
    localStorage.setItem("cell_s5_inner_text", document.getElementById("cell_s5").innerHTML);
    localStorage.setItem("cell_s6_inner_text", document.getElementById("cell_s6").innerHTML);
    localStorage.setItem("cell_s7_inner_text", document.getElementById("cell_s7").innerHTML);
    localStorage.setItem("cell_s8_inner_text", document.getElementById("cell_s8").innerHTML);
    localStorage.setItem("cell_s9_inner_text", document.getElementById("cell_s9").innerHTML);
    localStorage.setItem("cell_s10_inner_text", document.getElementById("cell_s10").innerHTML);
    localStorage.setItem("cell_s11_inner_text", document.getElementById("cell_s11").innerHTML);
    localStorage.setItem("cell_s12_inner_text", document.getElementById("cell_s12").innerHTML);
    localStorage.setItem("cell_s13_inner_text", document.getElementById("cell_s13").innerHTML);
    //for T column cells
    localStorage.setItem("cell_t1_inner_text", document.getElementById("cell_t1").innerHTML);
    localStorage.setItem("cell_t2_inner_text", document.getElementById("cell_t2").innerHTML);
    localStorage.setItem("cell_t3_inner_text", document.getElementById("cell_t3").innerHTML);
    localStorage.setItem("cell_t4_inner_text", document.getElementById("cell_t4").innerHTML);
    localStorage.setItem("cell_t5_inner_text", document.getElementById("cell_t5").innerHTML);
    localStorage.setItem("cell_t6_inner_text", document.getElementById("cell_t6").innerHTML);
    localStorage.setItem("cell_t7_inner_text", document.getElementById("cell_t7").innerHTML);
    localStorage.setItem("cell_t8_inner_text", document.getElementById("cell_t8").innerHTML);
    localStorage.setItem("cell_t9_inner_text", document.getElementById("cell_t9").innerHTML);
    localStorage.setItem("cell_t10_inner_text", document.getElementById("cell_t10").innerHTML);
    localStorage.setItem("cell_t11_inner_text", document.getElementById("cell_t11").innerHTML);
    localStorage.setItem("cell_t12_inner_text", document.getElementById("cell_t12").innerHTML);
    localStorage.setItem("cell_t13_inner_text", document.getElementById("cell_t13").innerHTML);
    //for U column cells
    localStorage.setItem("cell_u1_inner_text", document.getElementById("cell_u1").innerHTML);
    localStorage.setItem("cell_u2_inner_text", document.getElementById("cell_u2").innerHTML);
    localStorage.setItem("cell_u3_inner_text", document.getElementById("cell_u3").innerHTML);
    localStorage.setItem("cell_u4_inner_text", document.getElementById("cell_u4").innerHTML);
    localStorage.setItem("cell_u5_inner_text", document.getElementById("cell_u5").innerHTML);
    localStorage.setItem("cell_u6_inner_text", document.getElementById("cell_u6").innerHTML);
    localStorage.setItem("cell_u7_inner_text", document.getElementById("cell_u7").innerHTML);
    localStorage.setItem("cell_u8_inner_text", document.getElementById("cell_u8").innerHTML);
    localStorage.setItem("cell_u9_inner_text", document.getElementById("cell_u9").innerHTML);
    localStorage.setItem("cell_u10_inner_text", document.getElementById("cell_u10").innerHTML);
    localStorage.setItem("cell_u11_inner_text", document.getElementById("cell_u11").innerHTML);
    localStorage.setItem("cell_u12_inner_text", document.getElementById("cell_u12").innerHTML);
    localStorage.setItem("cell_u13_inner_text", document.getElementById("cell_u13").innerHTML);
    //for V column cells
    localStorage.setItem("cell_v1_inner_text", document.getElementById("cell_v1").innerHTML);
    localStorage.setItem("cell_v2_inner_text", document.getElementById("cell_v2").innerHTML);
    localStorage.setItem("cell_v3_inner_text", document.getElementById("cell_v3").innerHTML);
    localStorage.setItem("cell_v4_inner_text", document.getElementById("cell_v4").innerHTML);
    localStorage.setItem("cell_v5_inner_text", document.getElementById("cell_v5").innerHTML);
    localStorage.setItem("cell_v6_inner_text", document.getElementById("cell_v6").innerHTML);
    localStorage.setItem("cell_v7_inner_text", document.getElementById("cell_v7").innerHTML);
    localStorage.setItem("cell_v8_inner_text", document.getElementById("cell_v8").innerHTML);
    localStorage.setItem("cell_v9_inner_text", document.getElementById("cell_v9").innerHTML);
    localStorage.setItem("cell_v10_inner_text", document.getElementById("cell_v10").innerHTML);
    localStorage.setItem("cell_v11_inner_text", document.getElementById("cell_v11").innerHTML);
    localStorage.setItem("cell_v12_inner_text", document.getElementById("cell_v12").innerHTML);
    localStorage.setItem("cell_v13_inner_text", document.getElementById("cell_v13").innerHTML);
    //for W column cells
    localStorage.setItem("cell_w1_inner_text", document.getElementById("cell_w1").innerHTML);
    localStorage.setItem("cell_w2_inner_text", document.getElementById("cell_w2").innerHTML);
    localStorage.setItem("cell_w3_inner_text", document.getElementById("cell_w3").innerHTML);
    localStorage.setItem("cell_w4_inner_text", document.getElementById("cell_w4").innerHTML);
    localStorage.setItem("cell_w5_inner_text", document.getElementById("cell_w5").innerHTML);
    localStorage.setItem("cell_w6_inner_text", document.getElementById("cell_w6").innerHTML);
    localStorage.setItem("cell_w7_inner_text", document.getElementById("cell_w7").innerHTML);
    localStorage.setItem("cell_w8_inner_text", document.getElementById("cell_w8").innerHTML);
    localStorage.setItem("cell_w9_inner_text", document.getElementById("cell_w9").innerHTML);
    localStorage.setItem("cell_w10_inner_text", document.getElementById("cell_w10").innerHTML);
    localStorage.setItem("cell_w11_inner_text", document.getElementById("cell_w11").innerHTML);
    localStorage.setItem("cell_w12_inner_text", document.getElementById("cell_w12").innerHTML);
    localStorage.setItem("cell_w13_inner_text", document.getElementById("cell_w13").innerHTML);
    //for X column cells
    localStorage.setItem("cell_x1_inner_text", document.getElementById("cell_x1").innerHTML);
    localStorage.setItem("cell_x2_inner_text", document.getElementById("cell_x2").innerHTML);
    localStorage.setItem("cell_x3_inner_text", document.getElementById("cell_x3").innerHTML);
    localStorage.setItem("cell_x4_inner_text", document.getElementById("cell_x4").innerHTML);
    localStorage.setItem("cell_x5_inner_text", document.getElementById("cell_x5").innerHTML);
    localStorage.setItem("cell_x6_inner_text", document.getElementById("cell_x6").innerHTML);
    localStorage.setItem("cell_x7_inner_text", document.getElementById("cell_x7").innerHTML);
    localStorage.setItem("cell_x8_inner_text", document.getElementById("cell_x8").innerHTML);
    localStorage.setItem("cell_x9_inner_text", document.getElementById("cell_x9").innerHTML);
    localStorage.setItem("cell_x10_inner_text", document.getElementById("cell_x10").innerHTML);
    localStorage.setItem("cell_x11_inner_text", document.getElementById("cell_x11").innerHTML);
    localStorage.setItem("cell_x12_inner_text", document.getElementById("cell_x12").innerHTML);
    localStorage.setItem("cell_x13_inner_text", document.getElementById("cell_x13").innerHTML);
    //for Y column cells
    localStorage.setItem("cell_y1_inner_text", document.getElementById("cell_y1").innerHTML);
    localStorage.setItem("cell_y2_inner_text", document.getElementById("cell_y2").innerHTML);
    localStorage.setItem("cell_y3_inner_text", document.getElementById("cell_y3").innerHTML);
    localStorage.setItem("cell_y4_inner_text", document.getElementById("cell_y4").innerHTML);
    localStorage.setItem("cell_y5_inner_text", document.getElementById("cell_y5").innerHTML);
    localStorage.setItem("cell_y6_inner_text", document.getElementById("cell_y6").innerHTML);
    localStorage.setItem("cell_y7_inner_text", document.getElementById("cell_y7").innerHTML);
    localStorage.setItem("cell_y8_inner_text", document.getElementById("cell_y8").innerHTML);
    localStorage.setItem("cell_y9_inner_text", document.getElementById("cell_y9").innerHTML);
    localStorage.setItem("cell_y10_inner_text", document.getElementById("cell_y10").innerHTML);
    localStorage.setItem("cell_y11_inner_text", document.getElementById("cell_y11").innerHTML);
    localStorage.setItem("cell_y12_inner_text", document.getElementById("cell_y12").innerHTML);
    localStorage.setItem("cell_y13_inner_text", document.getElementById("cell_y13").innerHTML);
    //for Z column cells
    localStorage.setItem("cell_z1_inner_text", document.getElementById("cell_z1").innerHTML);
    localStorage.setItem("cell_z2_inner_text", document.getElementById("cell_z2").innerHTML);
    localStorage.setItem("cell_z3_inner_text", document.getElementById("cell_z3").innerHTML);
    localStorage.setItem("cell_z4_inner_text", document.getElementById("cell_z4").innerHTML);
    localStorage.setItem("cell_z5_inner_text", document.getElementById("cell_z5").innerHTML);
    localStorage.setItem("cell_z6_inner_text", document.getElementById("cell_z6").innerHTML);
    localStorage.setItem("cell_z7_inner_text", document.getElementById("cell_z7").innerHTML);
    localStorage.setItem("cell_z8_inner_text", document.getElementById("cell_z8").innerHTML);
    localStorage.setItem("cell_z9_inner_text", document.getElementById("cell_z9").innerHTML);
    localStorage.setItem("cell_z10_inner_text", document.getElementById("cell_z10").innerHTML);
    localStorage.setItem("cell_z11_inner_text", document.getElementById("cell_z11").innerHTML);
    localStorage.setItem("cell_z12_inner_text", document.getElementById("cell_z12").innerHTML);
    localStorage.setItem("cell_z13_inner_text", document.getElementById("cell_z13").innerHTML);
}, 200);

//this function is called at other places of the entire file, but the localstorage saving and loading is focus dependent, so focus has to be checked
function set_after_Operation()
{
    //A column cells
    if(a_cells[0] == true)
    {
        let text01 = document.getElementById("cell_a1").innerHTML;
        localStorage.setItem("cell_a1_inner_text", text01);
        text01 = localStorage.getItem("cell_a1_inner_text");
    }
    else if(a_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a2_inner_text", text01);
        text01 = localStorage.getItem("cell_a2_inner_text");
    }
    else if(a_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a3_inner_text", text01);
        text01 = localStorage.getItem("cell_a3_inner_text");
    }
    else if(a_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a4_inner_text", text01);
        text01 = localStorage.getItem("cell_a4_inner_text");
    }
    else if(a_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a5_inner_text", text01);
        text01 = localStorage.getItem("cell_a5_inner_text");
    }
    else if(a_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a6_inner_text", text01);
        text01 = localStorage.getItem("cell_a6_inner_text");
    }
    else if(a_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a7_inner_text", text01);
        text01 = localStorage.getItem("cell_a7_inner_text");
    }
    else if(a_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a8_inner_text", text01);
        text01 = localStorage.getItem("cell_a8_inner_text");
    }
    else if(a_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a9_inner_text", text01);
        text01 = localStorage.getItem("cell_a9_inner_text");
    }
    else if(a_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a10_inner_text", text01);
        text01 = localStorage.getItem("cell_a10_inner_text");
    }
    else if(a_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a11_inner_text", text01);
        text01 = localStorage.getItem("cell_a11_inner_text");
    }
    else if(a_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a12_inner_text", text01);
        text01 = localStorage.getItem("cell_a12_inner_text");
    }
    else if(a_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_a13_inner_text", text01);
        text01 = localStorage.getItem("cell_a13_inner_text");
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b1_inner_text", text01);
        text01 = localStorage.getItem("cell_b1_inner_text");
    }
    else if(b_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b2_inner_text", text01);
        text01 = localStorage.getItem("cell_b2_inner_text");
    }
    else if(b_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b3_inner_text", text01);
        text01 = localStorage.getItem("cell_b3_inner_text");
    }
    else if(b_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b4_inner_text", text01);
        text01 = localStorage.getItem("cell_b4_inner_text");
    }
    else if(b_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b5_inner_text", text01);
        text01 = localStorage.getItem("cell_b5_inner_text");
    }
    else if(b_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b6_inner_text", text01);
        text01 = localStorage.getItem("cell_b6_inner_text");
    }
    else if(b_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b7_inner_text", text01);
        text01 = localStorage.getItem("cell_b7_inner_text");
    }
    else if(b_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b8_inner_text", text01);
        text01 = localStorage.getItem("cell_b8_inner_text");
    }
    else if(b_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b9_inner_text", text01);
        text01 = localStorage.getItem("cell_b9_inner_text");
    }
    else if(b_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b10_inner_text", text01);
        text01 = localStorage.getItem("cell_b10_inner_text");
    }
    else if(b_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b11_inner_text", text01);
        text01 = localStorage.getItem("cell_b11_inner_text");
    }
    else if(b_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b12_inner_text", text01);
        text01 = localStorage.getItem("cell_b12_inner_text");
    }
    else if(b_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_b13_inner_text", text01);
        text01 = localStorage.getItem("cell_b13_inner_text");
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c1_inner_text", text01);
        text01 = localStorage.getItem("cell_c1_inner_text");
    }
    else if(c_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c2_inner_text", text01);
        text01 = localStorage.getItem("cell_c2_inner_text");
    }
    else if(c_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c3_inner_text", text01);
        text01 = localStorage.getItem("cell_c3_inner_text");
    }
    else if(c_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c4_inner_text", text01);
        text01 = localStorage.getItem("cell_c4_inner_text");
    }
    else if(c_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c5_inner_text", text01);
        text01 = localStorage.getItem("cell_c5_inner_text");
    }
    else if(c_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c6_inner_text", text01);
        text01 = localStorage.getItem("cell_c6_inner_text");
    }
    else if(c_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c7_inner_text", text01);
        text01 = localStorage.getItem("cell_c7_inner_text");
    }
    else if(c_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c8_inner_text", text01);
        text01 = localStorage.getItem("cell_c8_inner_text");
    }
    else if(c_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c9_inner_text", text01);
        text01 = localStorage.getItem("cell_c9_inner_text");
    }
    else if(c_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c10_inner_text", text01);
        text01 = localStorage.getItem("cell_c10_inner_text");
    }
    else if(c_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c11_inner_text", text01);
        text01 = localStorage.getItem("cell_c11_inner_text");
    }
    else if(c_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c12_inner_text", text01);
        text01 = localStorage.getItem("cell_c12_inner_text");
    }
    else if(c_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_c13_inner_text", text01);
        text01 = localStorage.getItem("cell_c13_inner_text");
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d1_inner_text", text01);
        text01 = localStorage.getItem("cell_d1_inner_text");
    }
    else if(d_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d2_inner_text", text01);
        text01 = localStorage.getItem("cell_d2_inner_text");
    }
    else if(d_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d3_inner_text", text01);
        text01 = localStorage.getItem("cell_d3_inner_text");
    }
    else if(d_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d4_inner_text", text01);
        text01 = localStorage.getItem("cell_d4_inner_text");
    }
    else if(d_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d5_inner_text", text01);
        text01 = localStorage.getItem("cell_d5_inner_text");
    }
    else if(d_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d6_inner_text", text01);
        text01 = localStorage.getItem("cell_d6_inner_text");
    }
    else if(d_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d7_inner_text", text01);
        text01 = localStorage.getItem("cell_d7_inner_text");
    }
    else if(d_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d8_inner_text", text01);
        text01 = localStorage.getItem("cell_d8_inner_text");
    }
    else if(d_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d9_inner_text", text01);
        text01 = localStorage.getItem("cell_d9_inner_text");
    }
    else if(d_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d10_inner_text", text01);
        text01 = localStorage.getItem("cell_d10_inner_text");
    }
    else if(d_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d11_inner_text", text01);
        text01 = localStorage.getItem("cell_d11_inner_text");
    }
    else if(d_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d12_inner_text", text01);
        text01 = localStorage.getItem("cell_d12_inner_text");
    }
    else if(d_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_d13_inner_text", text01);
        text01 = localStorage.getItem("cell_d13_inner_text");
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e1_inner_text", text01);
        text01 = localStorage.getItem("cell_e1_inner_text");
    }
    else if(e_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e2_inner_text", text01);
        text01 = localStorage.getItem("cell_e2_inner_text");
    }
    else if(e_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e3_inner_text", text01);
        text01 = localStorage.getItem("cell_e3_inner_text");
    }
    else if(e_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e4_inner_text", text01);
        text01 = localStorage.getItem("cell_e4_inner_text");
    }
    else if(e_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e5_inner_text", text01);
        text01 = localStorage.getItem("cell_e5_inner_text");
    }
    else if(e_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e6_inner_text", text01);
        text01 = localStorage.getItem("cell_e6_inner_text");
    }
    else if(e_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e7_inner_text", text01);
        text01 = localStorage.getItem("cell_e7_inner_text");
    }
    else if(e_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e8_inner_text", text01);
        text01 = localStorage.getItem("cell_e8_inner_text");
    }
    else if(e_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e9_inner_text", text01);
        text01 = localStorage.getItem("cell_e9_inner_text");
    }
    else if(e_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e10_inner_text", text01);
        text01 = localStorage.getItem("cell_e10_inner_text");
    }
    else if(e_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e11_inner_text", text01);
        text01 = localStorage.getItem("cell_e11_inner_text");
    }
    else if(e_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e12_inner_text", text01);
        text01 = localStorage.getItem("cell_e12_inner_text");
    }
    else if(e_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_e13_inner_text", text01);
        text01 = localStorage.getItem("cell_e13_inner_text");
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f1_inner_text", text01);
        text01 = localStorage.getItem("cell_f1_inner_text");
    }
    else if(f_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f2_inner_text", text01);
        text01 = localStorage.getItem("cell_f2_inner_text");
    }
    else if(f_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f3_inner_text", text01);
        text01 = localStorage.getItem("cell_f3_inner_text");
    }
    else if(f_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f4_inner_text", text01);
        text01 = localStorage.getItem("cell_f4_inner_text");
    }
    else if(f_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f5_inner_text", text01);
        text01 = localStorage.getItem("cell_f5_inner_text");
    }
    else if(f_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f6_inner_text", text01);
        text01 = localStorage.getItem("cell_f6_inner_text");
    }
    else if(f_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f7_inner_text", text01);
        text01 = localStorage.getItem("cell_f7_inner_text");
    }
    else if(f_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f8_inner_text", text01);
        text01 = localStorage.getItem("cell_f8_inner_text");
    }
    else if(f_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f9_inner_text", text01);
        text01 = localStorage.getItem("cell_f9_inner_text");
    }
    else if(f_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f10_inner_text", text01);
        text01 = localStorage.getItem("cell_f10_inner_text");
    }
    else if(f_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f11_inner_text", text01);
        text01 = localStorage.getItem("cell_f11_inner_text");
    }
    else if(f_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f12_inner_text", text01);
        text01 = localStorage.getItem("cell_f12_inner_text");
    }
    else if(f_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_f13_inner_text", text01);
        text01 = localStorage.getItem("cell_f13_inner_text");
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g1_inner_text", text01);
        text01 = localStorage.getItem("cell_g1_inner_text");
    }
    else if(g_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g2_inner_text", text01);
        text01 = localStorage.getItem("cell_g2_inner_text");
    }
    else if(g_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g3_inner_text", text01);
        text01 = localStorage.getItem("cell_g3_inner_text");
    }
    else if(g_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g4_inner_text", text01);
        text01 = localStorage.getItem("cell_g4_inner_text");
    }
    else if(g_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g5_inner_text", text01);
        text01 = localStorage.getItem("cell_g5_inner_text");
    }
    else if(g_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g6_inner_text", text01);
        text01 = localStorage.getItem("cell_g6_inner_text");
    }
    else if(g_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g7_inner_text", text01);
        text01 = localStorage.getItem("cell_g7_inner_text");
    }
    else if(g_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g8_inner_text", text01);
        text01 = localStorage.getItem("cell_g8_inner_text");
    }
    else if(g_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g9_inner_text", text01);
        text01 = localStorage.getItem("cell_g9_inner_text");
    }
    else if(g_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g10_inner_text", text01);
        text01 = localStorage.getItem("cell_g10_inner_text");
    }
    else if(g_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g11_inner_text", text01);
        text01 = localStorage.getItem("cell_g11_inner_text");
    }
    else if(g_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g12_inner_text", text01);
        text01 = localStorage.getItem("cell_g12_inner_text");
    }
    else if(g_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_g13_inner_text", text01);
        text01 = localStorage.getItem("cell_g13_inner_text");
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h1_inner_text", text01);
        text01 = localStorage.getItem("cell_h1_inner_text");
    }
    else if(h_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h2_inner_text", text01);
        text01 = localStorage.getItem("cell_h2_inner_text");
    }
    else if(h_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h3_inner_text", text01);
        text01 = localStorage.getItem("cell_h3_inner_text");
    }
    else if(h_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h4_inner_text", text01);
        text01 = localStorage.getItem("cell_h4_inner_text");
    }
    else if(h_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h5_inner_text", text01);
        text01 = localStorage.getItem("cell_h5_inner_text");
    }
    else if(h_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h6_inner_text", text01);
        text01 = localStorage.getItem("cell_h6_inner_text");
    }
    else if(h_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h7_inner_text", text01);
        text01 = localStorage.getItem("cell_h7_inner_text");
    }
    else if(h_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h8_inner_text", text01);
        text01 = localStorage.getItem("cell_h8_inner_text");
    }
    else if(h_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h9_inner_text", text01);
        text01 = localStorage.getItem("cell_h9_inner_text");
    }
    else if(h_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h10_inner_text", text01);
        text01 = localStorage.getItem("cell_h10_inner_text");
    }
    else if(h_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h11_inner_text", text01);
        text01 = localStorage.getItem("cell_h11_inner_text");
    }
    else if(h_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h12_inner_text", text01);
        text01 = localStorage.getItem("cell_h12_inner_text");
    }
    else if(h_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_h13_inner_text", text01);
        text01 = localStorage.getItem("cell_h13_inner_text");
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i1_inner_text", text01);
        text01 = localStorage.getItem("cell_i1_inner_text");
    }
    else if(i_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i2_inner_text", text01);
        text01 = localStorage.getItem("cell_i2_inner_text");
    }
    else if(i_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i3_inner_text", text01);
        text01 = localStorage.getItem("cell_i3_inner_text");
    }
    else if(i_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i4_inner_text", text01);
        text01 = localStorage.getItem("cell_i4_inner_text");
    }
    else if(i_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i5_inner_text", text01);
        text01 = localStorage.getItem("cell_i5_inner_text");
    }
    else if(i_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i6_inner_text", text01);
        text01 = localStorage.getItem("cell_i6_inner_text");
    }
    else if(i_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i7_inner_text", text01);
        text01 = localStorage.getItem("cell_i7_inner_text");
    }
    else if(i_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i8_inner_text", text01);
        text01 = localStorage.getItem("cell_i8_inner_text");
    }
    else if(i_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i9_inner_text", text01);
        text01 = localStorage.getItem("cell_i9_inner_text");
    }
    else if(i_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i10_inner_text", text01);
        text01 = localStorage.getItem("cell_i10_inner_text");
    }
    else if(i_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i11_inner_text", text01);
        text01 = localStorage.getItem("cell_i11_inner_text");
    }
    else if(i_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i12_inner_text", text01);
        text01 = localStorage.getItem("cell_i12_inner_text");
    }
    else if(i_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_i13_inner_text", text01);
        text01 = localStorage.getItem("cell_i13_inner_text");
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j1_inner_text", text01);
        text01 = localStorage.getItem("cell_j1_inner_text");
    }
    else if(j_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j2_inner_text", text01);
        text01 = localStorage.getItem("cell_j2_inner_text");
    }
    else if(j_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j3_inner_text", text01);
        text01 = localStorage.getItem("cell_j3_inner_text");
    }
    else if(j_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j4_inner_text", text01);
        text01 = localStorage.getItem("cell_j4_inner_text");
    }
    else if(j_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j5_inner_text", text01);
        text01 = localStorage.getItem("cell_j5_inner_text");
    }
    else if(j_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j6_inner_text", text01);
        text01 = localStorage.getItem("cell_j6_inner_text");
    }
    else if(j_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j7_inner_text", text01);
        text01 = localStorage.getItem("cell_j7_inner_text");
    }
    else if(j_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j8_inner_text", text01);
        text01 = localStorage.getItem("cell_j8_inner_text");
    }
    else if(j_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j9_inner_text", text01);
        text01 = localStorage.getItem("cell_j9_inner_text");
    }
    else if(j_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j10_inner_text", text01);
        text01 = localStorage.getItem("cell_j10_inner_text");
    }
    else if(j_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j11_inner_text", text01);
        text01 = localStorage.getItem("cell_j11_inner_text");
    }
    else if(j_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j12_inner_text", text01);
        text01 = localStorage.getItem("cell_j12_inner_text");
    }
    else if(j_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_j13_inner_text", text01);
        text01 = localStorage.getItem("cell_j13_inner_text");
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k1_inner_text", text01);
        text01 = localStorage.getItem("cell_k1_inner_text");
    }
    else if(k_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k2_inner_text", text01);
        text01 = localStorage.getItem("cell_k2_inner_text");
    }
    else if(k_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k3_inner_text", text01);
        text01 = localStorage.getItem("cell_k3_inner_text");
    }
    else if(k_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k4_inner_text", text01);
        text01 = localStorage.getItem("cell_k4_inner_text");
    }
    else if(k_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k5_inner_text", text01);
        text01 = localStorage.getItem("cell_k5_inner_text");
    }
    else if(k_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k6_inner_text", text01);
        text01 = localStorage.getItem("cell_k6_inner_text");
    }
    else if(k_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k7_inner_text", text01);
        text01 = localStorage.getItem("cell_k7_inner_text");
    }
    else if(k_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k8_inner_text", text01);
        text01 = localStorage.getItem("cell_k8_inner_text");
    }
    else if(k_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k9_inner_text", text01);
        text01 = localStorage.getItem("cell_k9_inner_text");
    }
    else if(k_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k10_inner_text", text01);
        text01 = localStorage.getItem("cell_k10_inner_text");
    }
    else if(k_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k11_inner_text", text01);
        text01 = localStorage.getItem("cell_k11_inner_text");
    }
    else if(k_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k12_inner_text", text01);
        text01 = localStorage.getItem("cell_k12_inner_text");
    }
    else if(k_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_k13_inner_text", text01);
        text01 = localStorage.getItem("cell_k13_inner_text");
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l1_inner_text", text01);
        text01 = localStorage.getItem("cell_l1_inner_text");
    }
    else if(l_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l2_inner_text", text01);
        text01 = localStorage.getItem("cell_l2_inner_text");
    }
    else if(l_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l3_inner_text", text01);
        text01 = localStorage.getItem("cell_l3_inner_text");
    }
    else if(l_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l4_inner_text", text01);
        text01 = localStorage.getItem("cell_l4_inner_text");
    }
    else if(l_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l5_inner_text", text01);
        text01 = localStorage.getItem("cell_l5_inner_text");
    }
    else if(l_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l6_inner_text", text01);
        text01 = localStorage.getItem("cell_l6_inner_text");
    }
    else if(l_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l7_inner_text", text01);
        text01 = localStorage.getItem("cell_l7_inner_text");
    }
    else if(l_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l8_inner_text", text01);
        text01 = localStorage.getItem("cell_l8_inner_text");
    }
    else if(l_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l9_inner_text", text01);
        text01 = localStorage.getItem("cell_l9_inner_text");
    }
    else if(l_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l10_inner_text", text01);
        text01 = localStorage.getItem("cell_l10_inner_text");
    }
    else if(l_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l11_inner_text", text01);
        text01 = localStorage.getItem("cell_l11_inner_text");
    }
    else if(l_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l12_inner_text", text01);
        text01 = localStorage.getItem("cell_l12_inner_text");
    }
    else if(l_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_l13_inner_text", text01);
        text01 = localStorage.getItem("cell_l13_inner_text");
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m1_inner_text", text01);
        text01 = localStorage.getItem("cell_m1_inner_text");
    }
    else if(m_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m2_inner_text", text01);
        text01 = localStorage.getItem("cell_m2_inner_text");
    }
    else if(m_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m3_inner_text", text01);
        text01 = localStorage.getItem("cell_m3_inner_text");
    }
    else if(m_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m4_inner_text", text01);
        text01 = localStorage.getItem("cell_m4_inner_text");
    }
    else if(m_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m5_inner_text", text01);
        text01 = localStorage.getItem("cell_m5_inner_text");
    }
    else if(m_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m6_inner_text", text01);
        text01 = localStorage.getItem("cell_m6_inner_text");
    }
    else if(m_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m7_inner_text", text01);
        text01 = localStorage.getItem("cell_m7_inner_text");
    }
    else if(m_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m8_inner_text", text01);
        text01 = localStorage.getItem("cell_m8_inner_text");
    }
    else if(m_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m9_inner_text", text01);
        text01 = localStorage.getItem("cell_m9_inner_text");
    }
    else if(m_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m10_inner_text", text01);
        text01 = localStorage.getItem("cell_m10_inner_text");
    }
    else if(m_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m11_inner_text", text01);
        text01 = localStorage.getItem("cell_m11_inner_text");
    }
    else if(m_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m12_inner_text", text01);
        text01 = localStorage.getItem("cell_m12_inner_text");
    }
    else if(m_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_m13_inner_text", text01);
        text01 = localStorage.getItem("cell_m13_inner_text");
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n1_inner_text", text01);
        text01 = localStorage.getItem("cell_n1_inner_text");
    }
    else if(n_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n2_inner_text", text01);
        text01 = localStorage.getItem("cell_n2_inner_text");
    }
    else if(n_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n3_inner_text", text01);
        text01 = localStorage.getItem("cell_n3_inner_text");
    }
    else if(n_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n4_inner_text", text01);
        text01 = localStorage.getItem("cell_n4_inner_text");
    }
    else if(n_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n5_inner_text", text01);
        text01 = localStorage.getItem("cell_n5_inner_text");
    }
    else if(n_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n6_inner_text", text01);
        text01 = localStorage.getItem("cell_n6_inner_text");
    }
    else if(n_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n7_inner_text", text01);
        text01 = localStorage.getItem("cell_n7_inner_text");
    }
    else if(n_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n8_inner_text", text01);
        text01 = localStorage.getItem("cell_n8_inner_text");
    }
    else if(n_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n9_inner_text", text01);
        text01 = localStorage.getItem("cell_n9_inner_text");
    }
    else if(n_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n10_inner_text", text01);
        text01 = localStorage.getItem("cell_n10_inner_text");
    }
    else if(n_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n11_inner_text", text01);
        text01 = localStorage.getItem("cell_n11_inner_text");
    }
    else if(n_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n12_inner_text", text01);
        text01 = localStorage.getItem("cell_n12_inner_text");
    }
    else if(n_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_n13_inner_text", text01);
        text01 = localStorage.getItem("cell_n13_inner_text");
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o1_inner_text", text01);
        text01 = localStorage.getItem("cell_o1_inner_text");
    }
    else if(o_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o2_inner_text", text01);
        text01 = localStorage.getItem("cell_o2_inner_text");
    }
    else if(o_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o3_inner_text", text01);
        text01 = localStorage.getItem("cell_o3_inner_text");
    }
    else if(o_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o4_inner_text", text01);
        text01 = localStorage.getItem("cell_o4_inner_text");
    }
    else if(o_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o5_inner_text", text01);
        text01 = localStorage.getItem("cell_o5_inner_text");
    }
    else if(o_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o6_inner_text", text01);
        text01 = localStorage.getItem("cell_o6_inner_text");
    }
    else if(o_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o7_inner_text", text01);
        text01 = localStorage.getItem("cell_o7_inner_text");
    }
    else if(o_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o8_inner_text", text01);
        text01 = localStorage.getItem("cell_o8_inner_text");
    }
    else if(o_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o9_inner_text", text01);
        text01 = localStorage.getItem("cell_o9_inner_text");
    }
    else if(o_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o10_inner_text", text01);
        text01 = localStorage.getItem("cell_o10_inner_text");
    }
    else if(o_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o11_inner_text", text01);
        text01 = localStorage.getItem("cell_o11_inner_text");
    }
    else if(o_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o12_inner_text", text01);
        text01 = localStorage.getItem("cell_o12_inner_text");
    }
    else if(o_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_o13_inner_text", text01);
        text01 = localStorage.getItem("cell_o13_inner_text");
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p1_inner_text", text01);
        text01 = localStorage.getItem("cell_p1_inner_text");
    }
    else if(p_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p2_inner_text", text01);
        text01 = localStorage.getItem("cell_p2_inner_text");
    }
    else if(p_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p3_inner_text", text01);
        text01 = localStorage.getItem("cell_p3_inner_text");
    }
    else if(p_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p4_inner_text", text01);
        text01 = localStorage.getItem("cell_p4_inner_text");
    }
    else if(p_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p5_inner_text", text01);
        text01 = localStorage.getItem("cell_p5_inner_text");
    }
    else if(p_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p6_inner_text", text01);
        text01 = localStorage.getItem("cell_p6_inner_text");
    }
    else if(p_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p7_inner_text", text01);
        text01 = localStorage.getItem("cell_p7_inner_text");
    }
    else if(p_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p8_inner_text", text01);
        text01 = localStorage.getItem("cell_p8_inner_text");
    }
    else if(p_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p9_inner_text", text01);
        text01 = localStorage.getItem("cell_p9_inner_text");
    }
    else if(p_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p10_inner_text", text01);
        text01 = localStorage.getItem("cell_p10_inner_text");
    }
    else if(p_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p11_inner_text", text01);
        text01 = localStorage.getItem("cell_p11_inner_text");
    }
    else if(p_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p12_inner_text", text01);
        text01 = localStorage.getItem("cell_p12_inner_text");
    }
    else if(p_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_p13_inner_text", text01);
        text01 = localStorage.getItem("cell_p13_inner_text");
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q1_inner_text", text01);
        text01 = localStorage.getItem("cell_q1_inner_text");
    }
    else if(q_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q2_inner_text", text01);
        text01 = localStorage.getItem("cell_q2_inner_text");
    }
    else if(q_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q3_inner_text", text01);
        text01 = localStorage.getItem("cell_q3_inner_text");
    }
    else if(q_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q4_inner_text", text01);
        text01 = localStorage.getItem("cell_q4_inner_text");
    }
    else if(q_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q5_inner_text", text01);
        text01 = localStorage.getItem("cell_q5_inner_text");
    }
    else if(q_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q6_inner_text", text01);
        text01 = localStorage.getItem("cell_q6_inner_text");
    }
    else if(q_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q7_inner_text", text01);
        text01 = localStorage.getItem("cell_q7_inner_text");
    }
    else if(q_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q8_inner_text", text01);
        text01 = localStorage.getItem("cell_q8_inner_text");
    }
    else if(q_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q9_inner_text", text01);
        text01 = localStorage.getItem("cell_q9_inner_text");
    }
    else if(q_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q10_inner_text", text01);
        text01 = localStorage.getItem("cell_q10_inner_text");
    }
    else if(q_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q11_inner_text", text01);
        text01 = localStorage.getItem("cell_q11_inner_text");
    }
    else if(q_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q12_inner_text", text01);
        text01 = localStorage.getItem("cell_q12_inner_text");
    }
    else if(q_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_q13_inner_text", text01);
        text01 = localStorage.getItem("cell_q13_inner_text");
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r1_inner_text", text01);
        text01 = localStorage.getItem("cell_r1_inner_text");
    }
    else if(r_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r2_inner_text", text01);
        text01 = localStorage.getItem("cell_r2_inner_text");
    }
    else if(r_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r3_inner_text", text01);
        text01 = localStorage.getItem("cell_r3_inner_text");
    }
    else if(r_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r4_inner_text", text01);
        text01 = localStorage.getItem("cell_r4_inner_text");
    }
    else if(r_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r5_inner_text", text01);
        text01 = localStorage.getItem("cell_r5_inner_text");
    }
    else if(r_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r6_inner_text", text01);
        text01 = localStorage.getItem("cell_r6_inner_text");
    }
    else if(r_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r7_inner_text", text01);
        text01 = localStorage.getItem("cell_r7_inner_text");
    }
    else if(r_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r8_inner_text", text01);
        text01 = localStorage.getItem("cell_r8_inner_text");
    }
    else if(r_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r9_inner_text", text01);
        text01 = localStorage.getItem("cell_r9_inner_text");
    }
    else if(r_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r10_inner_text", text01);
        text01 = localStorage.getItem("cell_r10_inner_text");
    }
    else if(r_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r11_inner_text", text01);
        text01 = localStorage.getItem("cell_r11_inner_text");
    }
    else if(r_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r12_inner_text", text01);
        text01 = localStorage.getItem("cell_r12_inner_text");
    }
    else if(r_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_r13_inner_text", text01);
        text01 = localStorage.getItem("cell_r13_inner_text");
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s1_inner_text", text01);
        text01 = localStorage.getItem("cell_s1_inner_text");
    }
    else if(s_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s2_inner_text", text01);
        text01 = localStorage.getItem("cell_s2_inner_text");
    }
    else if(s_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s3_inner_text", text01);
        text01 = localStorage.getItem("cell_s3_inner_text");
    }
    else if(s_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s4_inner_text", text01);
        text01 = localStorage.getItem("cell_s4_inner_text");
    }
    else if(s_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s5_inner_text", text01);
        text01 = localStorage.getItem("cell_s5_inner_text");
    }
    else if(s_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s6_inner_text", text01);
        text01 = localStorage.getItem("cell_s6_inner_text");
    }
    else if(s_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s7_inner_text", text01);
        text01 = localStorage.getItem("cell_s7_inner_text");
    }
    else if(s_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s8_inner_text", text01);
        text01 = localStorage.getItem("cell_s8_inner_text");
    }
    else if(s_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s9_inner_text", text01);
        text01 = localStorage.getItem("cell_s9_inner_text");
    }
    else if(s_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s10_inner_text", text01);
        text01 = localStorage.getItem("cell_s10_inner_text");
    }
    else if(s_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s11_inner_text", text01);
        text01 = localStorage.getItem("cell_s11_inner_text");
    }
    else if(s_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s12_inner_text", text01);
        text01 = localStorage.getItem("cell_s12_inner_text");
    }
    else if(s_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_s13_inner_text", text01);
        text01 = localStorage.getItem("cell_s13_inner_text");
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t1_inner_text", text01);
        text01 = localStorage.getItem("cell_t1_inner_text");
    }
    else if(t_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t2_inner_text", text01);
        text01 = localStorage.getItem("cell_t2_inner_text");
    }
    else if(t_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t3_inner_text", text01);
        text01 = localStorage.getItem("cell_lt3_inner_text");
    }
    else if(t_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t4_inner_text", text01);
        text01 = localStorage.getItem("cell_t4_inner_text");
    }
    else if(t_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t5_inner_text", text01);
        text01 = localStorage.getItem("cell_t5_inner_text");
    }
    else if(t_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t6_inner_text", text01);
        text01 = localStorage.getItem("cell_t6_inner_text");
    }
    else if(t_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t7_inner_text", text01);
        text01 = localStorage.getItem("cell_t7_inner_text");
    }
    else if(t_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t8_inner_text", text01);
        text01 = localStorage.getItem("cell_t8_inner_text");
    }
    else if(t_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t9_inner_text", text01);
        text01 = localStorage.getItem("cell_t9_inner_text");
    }
    else if(t_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t10_inner_text", text01);
        text01 = localStorage.getItem("cell_t10_inner_text");
    }
    else if(t_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t11_inner_text", text01);
        text01 = localStorage.getItem("cell_t11_inner_text");
    }
    else if(t_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t12_inner_text", text01);
        text01 = localStorage.getItem("cell_t12_inner_text");
    }
    else if(t_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_t13_inner_text", text01);
        text01 = localStorage.getItem("cell_t13_inner_text");
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u1_inner_text", text01);
        text01 = localStorage.getItem("cell_u1_inner_text");
    }
    else if(u_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u2_inner_text", text01);
        text01 = localStorage.getItem("cell_u2_inner_text");
    }
    else if(u_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u3_inner_text", text01);
        text01 = localStorage.getItem("cell_u3_inner_text");
    }
    else if(u_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u4_inner_text", text01);
        text01 = localStorage.getItem("cell_u4_inner_text");
    }
    else if(u_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u5_inner_text", text01);
        text01 = localStorage.getItem("cell_u5_inner_text");
    }
    else if(u_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u6_inner_text", text01);
        text01 = localStorage.getItem("cell_u6_inner_text");
    }
    else if(u_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u7_inner_text", text01);
        text01 = localStorage.getItem("cell_u7_inner_text");
    }
    else if(u_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u8_inner_text", text01);
        text01 = localStorage.getItem("cell_u8_inner_text");
    }
    else if(u_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u9_inner_text", text01);
        text01 = localStorage.getItem("cell_u9_inner_text");
    }
    else if(u_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u10_inner_text", text01);
        text01 = localStorage.getItem("cell_u10_inner_text");
    }
    else if(u_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u11_inner_text", text01);
        text01 = localStorage.getItem("cell_u11_inner_text");
    }
    else if(u_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u12_inner_text", text01);
        text01 = localStorage.getItem("cell_u12_inner_text");
    }
    else if(u_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_u13_inner_text", text01);
        text01 = localStorage.getItem("cell_u13_inner_text");
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v1_inner_text", text01);
        text01 = localStorage.getItem("cell_v1_inner_text");
    }
    else if(v_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v2_inner_text", text01);
        text01 = localStorage.getItem("cell_v2_inner_text");
    }
    else if(v_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v3_inner_text", text01);
        text01 = localStorage.getItem("cell_v3_inner_text");
    }
    else if(v_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v4_inner_text", text01);
        text01 = localStorage.getItem("cell_v4_inner_text");
    }
    else if(v_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v5_inner_text", text01);
        text01 = localStorage.getItem("cell_v5_inner_text");
    }
    else if(v_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v6_inner_text", text01);
        text01 = localStorage.getItem("cell_v6_inner_text");
    }
    else if(v_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v7_inner_text", text01);
        text01 = localStorage.getItem("cell_v7_inner_text");
    }
    else if(v_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v8_inner_text", text01);
        text01 = localStorage.getItem("cell_v8_inner_text");
    }
    else if(v_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v9_inner_text", text01);
        text01 = localStorage.getItem("cell_v9_inner_text");
    }
    else if(v_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v10_inner_text", text01);
        text01 = localStorage.getItem("cell_v10_inner_text");
    }
    else if(v_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v11_inner_text", text01);
        text01 = localStorage.getItem("cell_v11_inner_text");
    }
    else if(v_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v12_inner_text", text01);
        text01 = localStorage.getItem("cell_v12_inner_text");
    }
    else if(v_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_v13_inner_text", text01);
        text01 = localStorage.getItem("cell_v13_inner_text");
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w1_inner_text", text01);
        text01 = localStorage.getItem("cell_w1_inner_text");
    }
    else if(w_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w2_inner_text", text01);
        text01 = localStorage.getItem("cell_w2_inner_text");
    }
    else if(w_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w3_inner_text", text01);
        text01 = localStorage.getItem("cell_w3_inner_text");
    }
    else if(w_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w4_inner_text", text01);
        text01 = localStorage.getItem("cell_w4_inner_text");
    }
    else if(w_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w5_inner_text", text01);
        text01 = localStorage.getItem("cell_w5_inner_text");
    }
    else if(w_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w6_inner_text", text01);
        text01 = localStorage.getItem("cell_w6_inner_text");
    }
    else if(w_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w7_inner_text", text01);
        text01 = localStorage.getItem("cell_w7_inner_text");
    }
    else if(w_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w8_inner_text", text01);
        text01 = localStorage.getItem("cell_w8_inner_text");
    }
    else if(w_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w9_inner_text", text01);
        text01 = localStorage.getItem("cell_lw9_inner_text");
    }
    else if(w_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w10_inner_text", text01);
        text01 = localStorage.getItem("cell_w10_inner_text");
    }
    else if(w_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w11_inner_text", text01);
        text01 = localStorage.getItem("cell_w11_inner_text");
    }
    else if(w_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w12_inner_text", text01);
        text01 = localStorage.getItem("cell_w12_inner_text");
    }
    else if(w_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_w13_inner_text", text01);
        text01 = localStorage.getItem("cell_w13_inner_text");
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x1_inner_text", text01);
        text01 = localStorage.getItem("cell_x1_inner_text");
    }
    else if(x_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x2_inner_text", text01);
        text01 = localStorage.getItem("cell_x2_inner_text");
    }
    else if(x_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x3_inner_text", text01);
        text01 = localStorage.getItem("cell_x3_inner_text");
    }
    else if(x_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x4_inner_text", text01);
        text01 = localStorage.getItem("cell_x4_inner_text");
    }
    else if(x_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x5_inner_text", text01);
        text01 = localStorage.getItem("cell_x5_inner_text");
    }
    else if(x_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x6_inner_text", text01);
        text01 = localStorage.getItem("cell_x6_inner_text");
    }
    else if(x_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x7_inner_text", text01);
        text01 = localStorage.getItem("cell_x7_inner_text");
    }
    else if(x_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x8_inner_text", text01);
        text01 = localStorage.getItem("cell_x8_inner_text");
    }
    else if(x_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x9_inner_text", text01);
        text01 = localStorage.getItem("cell_x9_inner_text");
    }
    else if(x_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x10_inner_text", text01);
        text01 = localStorage.getItem("cell_x10_inner_text");
    }
    else if(x_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x11_inner_text", text01);
        text01 = localStorage.getItem("cell_x11_inner_text");
    }
    else if(x_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x12_inner_text", text01);
        text01 = localStorage.getItem("cell_x12_inner_text");
    }
    else if(x_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_x13_inner_text", text01);
        text01 = localStorage.getItem("cell_x13_inner_text");
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y1_inner_text", text01);
        text01 = localStorage.getItem("cell_y1_inner_text");
    }
    else if(y_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y2_inner_text", text01);
        text01 = localStorage.getItem("cell_y2_inner_text");
    }
    else if(y_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y3_inner_text", text01);
        text01 = localStorage.getItem("cell_y3_inner_text");
    }
    else if(y_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y4_inner_text", text01);
        text01 = localStorage.getItem("cell_y4_inner_text");
    }
    else if(y_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y5_inner_text", text01);
        text01 = localStorage.getItem("cell_y5_inner_text");
    }
    else if(y_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y6_inner_text", text01);
        text01 = localStorage.getItem("cell_y6_inner_text");
    }
    else if(y_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y7_inner_text", text01);
        text01 = localStorage.getItem("cell_y7_inner_text");
    }
    else if(y_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y8_inner_text", text01);
        text01 = localStorage.getItem("cell_y8_inner_text");
    }
    else if(y_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y9_inner_text", text01);
        text01 = localStorage.getItem("cell_y9_inner_text");
    }
    else if(y_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y10_inner_text", text01);
        text01 = localStorage.getItem("cell_y10_inner_text");
    }
    else if(y_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y11_inner_text", text01);
        text01 = localStorage.getItem("cell_y11_inner_text");
    }
    else if(y_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y12_inner_text", text01);
        text01 = localStorage.getItem("cell_y12_inner_text");
    }
    else if(y_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_y13_inner_text", text01);
        text01 = localStorage.getItem("cell_y13_inner_text");
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z1_inner_text", text01);
        text01 = localStorage.getItem("cell_z1_inner_text");
    }
    else if(z_cells[1] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z2_inner_text", text01);
        text01 = localStorage.getItem("cell_z2_inner_text");
    }
    else if(z_cells[2] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z3_inner_text", text01);
        text01 = localStorage.getItem("cell_z3_inner_text");
    }
    else if(z_cells[3] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z4_inner_text", text01);
        text01 = localStorage.getItem("cell_z4_inner_text");
    }
    else if(z_cells[4] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z5_inner_text", text01);
        text01 = localStorage.getItem("cell_z5_inner_text");
    }
    else if(z_cells[5] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z6_inner_text", text01);
        text01 = localStorage.getItem("cell_z6_inner_text");
    }
    else if(z_cells[6] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z7_inner_text", text01);
        text01 = localStorage.getItem("cell_z7_inner_text");
    }
    else if(z_cells[7] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z8_inner_text", text01);
        text01 = localStorage.getItem("cell_z8_inner_text");
    }
    else if(z_cells[8] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z9_inner_text", text01);
        text01 = localStorage.getItem("cell_z9_inner_text");
    }
    else if(z_cells[9] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z10_inner_text", text01);
        text01 = localStorage.getItem("cell_z10_inner_text");
    }
    else if(z_cells[10] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z11_inner_text", text01);
        text01 = localStorage.getItem("cell_z11_inner_text");
    }
    else if(z_cells[11] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z12_inner_text", text01);
        text01 = localStorage.getItem("cell_z12_inner_text");
    }
    else if(z_cells[12] == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("cell_z13_inner_text", text01);
        text01 = localStorage.getItem("cell_z13_inner_text");
    }    
}

//execCommand is deprecated, but the alternative of it is not
//ready yet, so this has to be used to do the edit on the selection
//if the user changes the font style to bold
function font_to_Bold()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontWeight = 'bold';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font style to italic
function font_to_Italic()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontStyle = 'italic';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font style to underscore
function font_to_Underscore()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.textDecoration = 'underline';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font size to 18px
function font_to_18px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '18px';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font size to 20px
function font_to_20px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '20px';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font size to 22px
function font_to_22px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '22px';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font size to 24px
function font_to_24px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '24px';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font size to 36px
function font_to_36px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '36px';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font size to 48px
function font_to_48px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '48px';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to red
function font_background_to_Red()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'red';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to green
function font_background_to_Green()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'green';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to blue
function font_background_to_Blue()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'blue';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to yellow
function font_background_to_Yellow()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'yellow';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to brown
function font_background_to_Brown()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'brown';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to orange
function font_background_to_Orange()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'orange';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to purple
function font_background_to_Purple()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'purple';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font background to gray
function font_background_to_Gray()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'gray';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to red
function font_to_Red()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'red';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to green
function font_to_Green()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'green';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to blue
function font_to_Blue()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'blue';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to yellow
function font_to_Yellow()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'yellow';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to brown
function font_to_Brown()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'brown';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to orange
function font_to_Orange()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'orange';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to purple
function font_to_Purple()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'purple';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//if the user changes the font color to gray
function font_to_Gray()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'gray';
    document.execCommand('insertHTML', false, span.outerHTML);
    set_after_Operation();
}

//testing purposes only function, to check which cell array value is true
function check_switch_case()
{
    for(let outer = 0; outer < table_cells.length; outer++)
    {
        for(let inner = 0; inner < 14; inner++)
        {
            if(table_cells[outer][inner] == true)
            {
                console.log(table_cells[outer][inner]);
            }
        }
    }
}

//if the user changes the font align to right
function text_align_to_Right()
{
    //A column cells
    if(a_cells[0] == true)
    {
        $("#cell_a1").css("text-align", "right");
    }
    else if(a_cells[1] == true)
    {
        $("#cell_a2").css("text-align", "right");
    }
    else if(a_cells[2] == true)
    {
        $("#cell_a3").css("text-align", "right");
    }
    else if(a_cells[3] == true)
    {
        $("#cell_a4").css("text-align", "right");
    }
    else if(a_cells[4] == true)
    {
        $("#cell_a5").css("text-align", "right");
    }
    else if(a_cells[5] == true)
    {
        $("#cell_a6").css("text-align", "right");
    }
    else if(a_cells[6] == true)
    {
        $("#cell_a7").css("text-align", "right");
    }
    else if(a_cells[7] == true)
    {
        $("#cell_a8").css("text-align", "right");
    }
    else if(a_cells[8] == true)
    {
        $("#cell_a9").css("text-align", "right");
    }
    else if(a_cells[9] == true)
    {
        $("#cell_a10").css("text-align", "right");
    }
    else if(a_cells[10] == true)
    {
        $("#cell_a11").css("text-align", "right");
    }
    else if(a_cells[11] == true)
    {
        $("#cell_a12").css("text-align", "right");
    }
    else if(a_cells[12] == true)
    {
        $("#cell_a13").css("text-align", "right");
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        $("#cell_b1").css("text-align", "right");
    }
    else if(b_cells[1] == true)
    {
        $("#cell_b2").css("text-align", "right");
    }
    else if(b_cells[2] == true)
    {
        $("#cell_b3").css("text-align", "right");
    }
    else if(b_cells[3] == true)
    {
        $("#cell_b4").css("text-align", "right");
    }
    else if(b_cells[4] == true)
    {
        $("#cell_b5").css("text-align", "right");
    }
    else if(b_cells[5] == true)
    {
        $("#cell_b6").css("text-align", "right");
    }
    else if(b_cells[6] == true)
    {
        $("#cell_b7").css("text-align", "right");
    }
    else if(b_cells[7] == true)
    {
        $("#cell_b8").css("text-align", "right");
    }
    else if(b_cells[8] == true)
    {
        $("#cell_b9").css("text-align", "right");
    }
    else if(b_cells[9] == true)
    {
        $("#cell_b10").css("text-align", "right");
    }
    else if(b_cells[10] == true)
    {
        $("#cell_b11").css("text-align", "right");
    }
    else if(b_cells[11] == true)
    {
        $("#cell_b12").css("text-align", "right");
    }
    else if(b_cells[12] == true)
    {
        $("#cell_b13").css("text-align", "right");
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        $("#cell_c1").css("text-align", "right");
    }
    else if(c_cells[1] == true)
    {
        $("#cell_c2").css("text-align", "right");
    }
    else if(c_cells[2] == true)
    {
        $("#cell_c3").css("text-align", "right");
    }
    else if(c_cells[3] == true)
    {
        $("#cell_c4").css("text-align", "right");
    }
    else if(c_cells[4] == true)
    {
        $("#cell_c5").css("text-align", "right");
    }
    else if(c_cells[5] == true)
    {
        $("#cell_c6").css("text-align", "right");
    }
    else if(c_cells[6] == true)
    {
        $("#cell_c7").css("text-align", "right");
    }
    else if(c_cells[7] == true)
    {
        $("#cell_c8").css("text-align", "right");
    }
    else if(c_cells[8] == true)
    {
        $("#cell_c9").css("text-align", "right");
    }
    else if(c_cells[9] == true)
    {
        $("#cell_c10").css("text-align", "right");
    }
    else if(c_cells[10] == true)
    {
        $("#cell_c11").css("text-align", "right");
    }
    else if(c_cells[11] == true)
    {
        $("#cell_c12").css("text-align", "right");
    }
    else if(c_cells[12] == true)
    {
        $("#cell_c13").css("text-align", "right");
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        $("#cell_d1").css("text-align", "right");
    }
    else if(d_cells[1] == true)
    {
        $("#cell_d2").css("text-align", "right");
    }
    else if(d_cells[2] == true)
    {
        $("#cell_d3").css("text-align", "right");
    }
    else if(d_cells[3] == true)
    {
        $("#cell_d4").css("text-align", "right");
    }
    else if(d_cells[4] == true)
    {
        $("#cell_d5").css("text-align", "right");
    }
    else if(d_cells[5] == true)
    {
        $("#cell_d6").css("text-align", "right");
    }
    else if(d_cells[6] == true)
    {
        $("#cell_d7").css("text-align", "right");
    }
    else if(d_cells[7] == true)
    {
        $("#cell_d8").css("text-align", "right");
    }
    else if(d_cells[8] == true)
    {
        $("#cell_d9").css("text-align", "right");
    }
    else if(d_cells[9] == true)
    {
        $("#cell_d10").css("text-align", "right");
    }
    else if(d_cells[10] == true)
    {
        $("#cell_d11").css("text-align", "right");
    }
    else if(d_cells[11] == true)
    {
        $("#cell_d12").css("text-align", "right");
    }
    else if(d_cells[12] == true)
    {
        $("#cell_d13").css("text-align", "right");
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        $("#cell_e1").css("text-align", "right");
    }
    else if(e_cells[1] == true)
    {
        $("#cell_e2").css("text-align", "right");
    }
    else if(e_cells[2] == true)
    {
        $("#cell_e3").css("text-align", "right");
    }
    else if(e_cells[3] == true)
    {
        $("#cell_e4").css("text-align", "right");
    }
    else if(e_cells[4] == true)
    {
        $("#cell_e5").css("text-align", "right");
    }
    else if(e_cells[5] == true)
    {
        $("#cell_e6").css("text-align", "right");
    }
    else if(e_cells[6] == true)
    {
        $("#cell_e7").css("text-align", "right");
    }
    else if(e_cells[7] == true)
    {
        $("#cell_e8").css("text-align", "right");
    }
    else if(e_cells[8] == true)
    {
        $("#cell_e9").css("text-align", "right");
    }
    else if(e_cells[9] == true)
    {
        $("#cell_e10").css("text-align", "right");
    }
    else if(e_cells[10] == true)
    {
        $("#cell_e11").css("text-align", "right");
    }
    else if(e_cells[11] == true)
    {
        $("#cell_e12").css("text-align", "right");
    }
    else if(e_cells[12] == true)
    {
        $("#cell_e13").css("text-align", "right");
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        $("#cell_f1").css("text-align", "right");
    }
    else if(f_cells[1] == true)
    {
        $("#cell_f2").css("text-align", "right");
    }
    else if(f_cells[2] == true)
    {
        $("#cell_f3").css("text-align", "right");
    }
    else if(f_cells[3] == true)
    {
        $("#cell_f4").css("text-align", "right");
    }
    else if(f_cells[4] == true)
    {
        $("#cell_f5").css("text-align", "right");
    }
    else if(f_cells[5] == true)
    {
        $("#cell_f6").css("text-align", "right");
    }
    else if(f_cells[6] == true)
    {
        $("#cell_f7").css("text-align", "right");
    }
    else if(f_cells[7] == true)
    {
        $("#cell_f8").css("text-align", "right");
    }
    else if(f_cells[8] == true)
    {
        $("#cell_f9").css("text-align", "right");
    }
    else if(f_cells[9] == true)
    {
        $("#cell_f10").css("text-align", "right");
    }
    else if(f_cells[10] == true)
    {
        $("#cell_f11").css("text-align", "right");
    }
    else if(f_cells[11] == true)
    {
        $("#cell_f12").css("text-align", "right");
    }
    else if(f_cells[12] == true)
    {
        $("#cell_f13").css("text-align", "right");
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        $("#cell_g1").css("text-align", "right");
    }
    else if(g_cells[1] == true)
    {
        $("#cell_g2").css("text-align", "right");
    }
    else if(g_cells[2] == true)
    {
        $("#cell_g3").css("text-align", "right");
    }
    else if(g_cells[3] == true)
    {
        $("#cell_g4").css("text-align", "right");
    }
    else if(g_cells[4] == true)
    {
        $("#cell_g5").css("text-align", "right");
    }
    else if(g_cells[5] == true)
    {
        $("#cell_g6").css("text-align", "right");
    }
    else if(g_cells[6] == true)
    {
        $("#cell_g7").css("text-align", "right");
    }
    else if(g_cells[7] == true)
    {
        $("#cell_g8").css("text-align", "right");
    }
    else if(g_cells[8] == true)
    {
        $("#cell_g9").css("text-align", "right");
    }
    else if(g_cells[9] == true)
    {
        $("#cell_g10").css("text-align", "right");
    }
    else if(g_cells[10] == true)
    {
        $("#cell_g11").css("text-align", "right");
    }
    else if(g_cells[11] == true)
    {
        $("#cell_g12").css("text-align", "right");
    }
    else if(g_cells[12] == true)
    {
        $("#cell_g13").css("text-align", "right");
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        $("#cell_h1").css("text-align", "right");
    }
    else if(h_cells[1] == true)
    {
        $("#cell_h2").css("text-align", "right");
    }
    else if(h_cells[2] == true)
    {
        $("#cell_h3").css("text-align", "right");
    }
    else if(h_cells[3] == true)
    {
        $("#cell_h4").css("text-align", "right");
    }
    else if(h_cells[4] == true)
    {
        $("#cell_h5").css("text-align", "right");
    }
    else if(h_cells[5] == true)
    {
        $("#cell_h6").css("text-align", "right");
    }
    else if(h_cells[6] == true)
    {
        $("#cell_h7").css("text-align", "right");
    }
    else if(h_cells[7] == true)
    {
        $("#cell_h8").css("text-align", "right");
    }
    else if(h_cells[8] == true)
    {
        $("#cell_h9").css("text-align", "right");
    }
    else if(h_cells[9] == true)
    {
        $("#cell_h10").css("text-align", "right");
    }
    else if(h_cells[10] == true)
    {
        $("#cell_h11").css("text-align", "right");
    }
    else if(h_cells[11] == true)
    {
        $("#cell_h12").css("text-align", "right");
    }
    else if(h_cells[12] == true)
    {
        $("#cell_h13").css("text-align", "right");
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        $("#cell_i1").css("text-align", "right");
    }
    else if(i_cells[1] == true)
    {
        $("#cell_i2").css("text-align", "right");
    }
    else if(i_cells[2] == true)
    {
        $("#cell_i3").css("text-align", "right");
    }
    else if(i_cells[3] == true)
    {
        $("#cell_i4").css("text-align", "right");
    }
    else if(i_cells[4] == true)
    {
        $("#cell_i5").css("text-align", "right");
    }
    else if(i_cells[5] == true)
    {
        $("#cell_i6").css("text-align", "right");
    }
    else if(i_cells[6] == true)
    {
        $("#cell_i7").css("text-align", "right");
    }
    else if(i_cells[7] == true)
    {
        $("#cell_i8").css("text-align", "right");
    }
    else if(i_cells[8] == true)
    {
        $("#cell_i9").css("text-align", "right");
    }
    else if(i_cells[9] == true)
    {
        $("#cell_i10").css("text-align", "right");
    }
    else if(i_cells[10] == true)
    {
        $("#cell_i11").css("text-align", "right");
    }
    else if(i_cells[11] == true)
    {
        $("#cell_i12").css("text-align", "right");
    }
    else if(i_cells[12] == true)
    {
        $("#cell_i13").css("text-align", "right");
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        $("#cell_j1").css("text-align", "right");
    }
    else if(j_cells[1] == true)
    {
        $("#cell_j2").css("text-align", "right");
    }
    else if(j_cells[2] == true)
    {
        $("#cell_j3").css("text-align", "right");
    }
    else if(j_cells[3] == true)
    {
        $("#cell_j4").css("text-align", "right");
    }
    else if(j_cells[4] == true)
    {
        $("#cell_j5").css("text-align", "right");
    }
    else if(j_cells[5] == true)
    {
        $("#cell_j6").css("text-align", "right");
    }
    else if(j_cells[6] == true)
    {
        $("#cell_j7").css("text-align", "right");
    }
    else if(j_cells[7] == true)
    {
        $("#cell_j8").css("text-align", "right");
    }
    else if(j_cells[8] == true)
    {
        $("#cell_j9").css("text-align", "right");
    }
    else if(j_cells[9] == true)
    {
        $("#cell_j10").css("text-align", "right");
    }
    else if(j_cells[10] == true)
    {
        $("#cell_j11").css("text-align", "right");
    }
    else if(j_cells[11] == true)
    {
        $("#cell_j12").css("text-align", "right");
    }
    else if(j_cells[12] == true)
    {
        $("#cell_j13").css("text-align", "right");
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        $("#cell_k1").css("text-align", "right");
    }
    else if(k_cells[1] == true)
    {
        $("#cell_k2").css("text-align", "right");
    }
    else if(k_cells[2] == true)
    {
        $("#cell_k3").css("text-align", "right");
    }
    else if(k_cells[3] == true)
    {
        $("#cell_k4").css("text-align", "right");
    }
    else if(k_cells[4] == true)
    {
        $("#cell_k5").css("text-align", "right");
    }
    else if(k_cells[5] == true)
    {
        $("#cell_k6").css("text-align", "right");
    }
    else if(k_cells[6] == true)
    {
        $("#cell_k7").css("text-align", "right");
    }
    else if(k_cells[7] == true)
    {
        $("#cell_k8").css("text-align", "right");
    }
    else if(k_cells[8] == true)
    {
        $("#cell_k9").css("text-align", "right");
    }
    else if(k_cells[9] == true)
    {
        $("#cell_k10").css("text-align", "right");
    }
    else if(k_cells[10] == true)
    {
        $("#cell_k11").css("text-align", "right");
    }
    else if(k_cells[11] == true)
    {
        $("#cell_k12").css("text-align", "right");
    }
    else if(k_cells[12] == true)
    {
        $("#cell_k13").css("text-align", "right");
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        $("#cell_l1").css("text-align", "right");
    }
    else if(l_cells[1] == true)
    {
        $("#cell_l2").css("text-align", "right");
    }
    else if(l_cells[2] == true)
    {
        $("#cell_l3").css("text-align", "right");
    }
    else if(l_cells[3] == true)
    {
        $("#cell_l4").css("text-align", "right");
    }
    else if(l_cells[4] == true)
    {
        $("#cell_l5").css("text-align", "right");
    }
    else if(l_cells[5] == true)
    {
        $("#cell_l6").css("text-align", "right");
    }
    else if(l_cells[6] == true)
    {
        $("#cell_l7").css("text-align", "right");
    }
    else if(l_cells[7] == true)
    {
        $("#cell_l8").css("text-align", "right");
    }
    else if(l_cells[8] == true)
    {
        $("#cell_l9").css("text-align", "right");
    }
    else if(l_cells[9] == true)
    {
        $("#cell_l10").css("text-align", "right");
    }
    else if(l_cells[10] == true)
    {
        $("#cell_l11").css("text-align", "right");
    }
    else if(l_cells[11] == true)
    {
        $("#cell_l12").css("text-align", "right");
    }
    else if(l_cells[12] == true)
    {
        $("#cell_l13").css("text-align", "right");
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        $("#cell_m1").css("text-align", "right");
    }
    else if(m_cells[1] == true)
    {
        $("#cell_m2").css("text-align", "right");
    }
    else if(m_cells[2] == true)
    {
        $("#cell_m3").css("text-align", "right");
    }
    else if(m_cells[3] == true)
    {
        $("#cell_m4").css("text-align", "right");
    }
    else if(m_cells[4] == true)
    {
        $("#cell_m5").css("text-align", "right");
    }
    else if(m_cells[5] == true)
    {
        $("#cell_m6").css("text-align", "right");
    }
    else if(m_cells[6] == true)
    {
        $("#cell_m7").css("text-align", "right");
    }
    else if(m_cells[7] == true)
    {
        $("#cell_m8").css("text-align", "right");
    }
    else if(m_cells[8] == true)
    {
        $("#cell_m9").css("text-align", "right");
    }
    else if(m_cells[9] == true)
    {
        $("#cell_m10").css("text-align", "right");
    }
    else if(m_cells[10] == true)
    {
        $("#cell_m11").css("text-align", "right");
    }
    else if(m_cells[11] == true)
    {
        $("#cell_m12").css("text-align", "right");
    }
    else if(m_cells[12] == true)
    {
        $("#cell_m13").css("text-align", "right");
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        $("#cell_n1").css("text-align", "right");
    }
    else if(n_cells[1] == true)
    {
        $("#cell_n2").css("text-align", "right");
    }
    else if(n_cells[2] == true)
    {
        $("#cell_n3").css("text-align", "right");
    }
    else if(n_cells[3] == true)
    {
        $("#cell_n4").css("text-align", "right");
    }
    else if(n_cells[4] == true)
    {
        $("#cell_n5").css("text-align", "right");
    }
    else if(n_cells[5] == true)
    {
        $("#cell_n6").css("text-align", "right");
    }
    else if(n_cells[6] == true)
    {
        $("#cell_n7").css("text-align", "right");
    }
    else if(n_cells[7] == true)
    {
        $("#cell_n8").css("text-align", "right");
    }
    else if(n_cells[8] == true)
    {
        $("#cell_n9").css("text-align", "right");
    }
    else if(n_cells[9] == true)
    {
        $("#cell_n10").css("text-align", "right");
    }
    else if(n_cells[10] == true)
    {
        $("#cell_n11").css("text-align", "right");
    }
    else if(n_cells[11] == true)
    {
        $("#cell_n12").css("text-align", "right");
    }
    else if(n_cells[12] == true)
    {
        $("#cell_n13").css("text-align", "right");
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        $("#cell_o1").css("text-align", "right");
    }
    else if(o_cells[1] == true)
    {
        $("#cell_o2").css("text-align", "right");
    }
    else if(o_cells[2] == true)
    {
        $("#cell_o3").css("text-align", "right");
    }
    else if(o_cells[3] == true)
    {
        $("#cell_o4").css("text-align", "right");
    }
    else if(o_cells[4] == true)
    {
        $("#cell_o5").css("text-align", "right");
    }
    else if(o_cells[5] == true)
    {
        $("#cell_o6").css("text-align", "right");
    }
    else if(o_cells[6] == true)
    {
        $("#cell_o7").css("text-align", "right");
    }
    else if(o_cells[7] == true)
    {
        $("#cell_o8").css("text-align", "right");
    }
    else if(o_cells[8] == true)
    {
        $("#cell_o9").css("text-align", "right");
    }
    else if(o_cells[9] == true)
    {
        $("#cell_o10").css("text-align", "right");
    }
    else if(o_cells[10] == true)
    {
        $("#cell_o11").css("text-align", "right");
    }
    else if(o_cells[11] == true)
    {
        $("#cell_o12").css("text-align", "right");
    }
    else if(o_cells[12] == true)
    {
        $("#cell_o13").css("text-align", "right");
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        $("#cell_p1").css("text-align", "right");
    }
    else if(p_cells[1] == true)
    {
        $("#cell_p2").css("text-align", "right");
    }
    else if(p_cells[2] == true)
    {
        $("#cell_p3").css("text-align", "right");
    }
    else if(p_cells[3] == true)
    {
        $("#cell_p3").css("text-align", "right");
    }
    else if(p_cells[4] == true)
    {
        $("#cell_p4").css("text-align", "right");
    }
    else if(p_cells[5] == true)
    {
        $("#cell_p5").css("text-align", "right");
    }
    else if(p_cells[6] == true)
    {
        $("#cell_p6").css("text-align", "right");
    }
    else if(p_cells[7] == true)
    {
        $("#cell_p7").css("text-align", "right");
    }
    else if(p_cells[8] == true)
    {
        $("#cell_p8").css("text-align", "right");
    }
    else if(p_cells[9] == true)
    {
        $("#cell_p10").css("text-align", "right");
    }
    else if(p_cells[10] == true)
    {
        $("#cell_p11").css("text-align", "right");
    }
    else if(p_cells[11] == true)
    {
        $("#cell_p12").css("text-align", "right");
    }
    else if(p_cells[12] == true)
    {
        $("#cell_p13").css("text-align", "right");
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        $("#cell_q1").css("text-align", "right");
    }
    else if(q_cells[1] == true)
    {
        $("#cell_q2").css("text-align", "right");
    }
    else if(q_cells[2] == true)
    {
        $("#cell_q3").css("text-align", "right");
    }
    else if(q_cells[3] == true)
    {
        $("#cell_q4").css("text-align", "right");
    }
    else if(q_cells[4] == true)
    {
        $("#cell_q5").css("text-align", "right");
    }
    else if(q_cells[5] == true)
    {
        $("#cell_q6").css("text-align", "right");
    }
    else if(q_cells[6] == true)
    {
        $("#cell_q7").css("text-align", "right");
    }
    else if(q_cells[7] == true)
    {
        $("#cell_q8").css("text-align", "right");
    }
    else if(q_cells[8] == true)
    {
        $("#cell_q9").css("text-align", "right");
    }
    else if(q_cells[9] == true)
    {
        $("#cell_q10").css("text-align", "right");
    }
    else if(q_cells[10] == true)
    {
        $("#cell_q11").css("text-align", "right");
    }
    else if(q_cells[11] == true)
    {
        $("#cell_q12").css("text-align", "right");
    }
    else if(q_cells[12] == true)
    {
        $("#cell_q13").css("text-align", "right");
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        $("#cell_r1").css("text-align", "right");
    }
    else if(r_cells[1] == true)
    {
        $("#cell_r2").css("text-align", "right");
    }
    else if(r_cells[2] == true)
    {
        $("#cell_r3").css("text-align", "right");
    }
    else if(r_cells[3] == true)
    {
        $("#cell_r4").css("text-align", "right");
    }
    else if(r_cells[4] == true)
    {
        $("#cell_r5").css("text-align", "right");
    }
    else if(r_cells[5] == true)
    {
        $("#cell_r6").css("text-align", "right");
    }
    else if(r_cells[6] == true)
    {
        $("#cell_r7").css("text-align", "right");
    }
    else if(r_cells[7] == true)
    {
        $("#cell_r8").css("text-align", "right");
    }
    else if(r_cells[8] == true)
    {
        $("#cell_r9").css("text-align", "right");
    }
    else if(r_cells[9] == true)
    {
        $("#cell_r10").css("text-align", "right");
    }
    else if(r_cells[10] == true)
    {
        $("#cell_r11").css("text-align", "right");
    }
    else if(r_cells[11] == true)
    {
        $("#cell_r12").css("text-align", "right");
    }
    else if(r_cells[12] == true)
    {
        $("#cell_r13").css("text-align", "right");
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        $("#cell_s1").css("text-align", "right");
    }
    else if(s_cells[1] == true)
    {
        $("#cell_s2").css("text-align", "right");
    }
    else if(s_cells[2] == true)
    {
        $("#cell_s3").css("text-align", "right");
    }
    else if(s_cells[3] == true)
    {
        $("#cell_s4").css("text-align", "right");
    }
    else if(s_cells[4] == true)
    {
        $("#cell_s5").css("text-align", "right");
    }
    else if(s_cells[5] == true)
    {
        $("#cell_s6").css("text-align", "right");
    }
    else if(s_cells[6] == true)
    {
        $("#cell_s7").css("text-align", "right");
    }
    else if(s_cells[7] == true)
    {
        $("#cell_s8").css("text-align", "right");
    }
    else if(s_cells[8] == true)
    {
        $("#cell_s9").css("text-align", "right");
    }
    else if(s_cells[9] == true)
    {
        $("#cell_s10").css("text-align", "right");
    }
    else if(s_cells[10] == true)
    {
        $("#cell_s11").css("text-align", "right");
    }
    else if(s_cells[11] == true)
    {
        $("#cell_s12").css("text-align", "right");
    }
    else if(s_cells[12] == true)
    {
        $("#cell_s13").css("text-align", "right");
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        $("#cell_t1").css("text-align", "right");
    }
    else if(t_cells[1] == true)
    {
        $("#cell_t2").css("text-align", "right");
    }
    else if(t_cells[2] == true)
    {
        $("#cell_t3").css("text-align", "right");
    }
    else if(t_cells[3] == true)
    {
        $("#cell_t4").css("text-align", "right");
    }
    else if(t_cells[4] == true)
    {
        $("#cell_t5").css("text-align", "right");
    }
    else if(t_cells[5] == true)
    {
        $("#cell_t6").css("text-align", "right");
    }
    else if(t_cells[6] == true)
    {
        $("#cell_t7").css("text-align", "right");
    }
    else if(t_cells[7] == true)
    {
        $("#cell_t8").css("text-align", "right");
    }
    else if(t_cells[8] == true)
    {
        $("#cell_t9").css("text-align", "right");
    }
    else if(t_cells[9] == true)
    {
        $("#cell_t10").css("text-align", "right");
    }
    else if(t_cells[10] == true)
    {
        $("#cell_t11").css("text-align", "right");
    }
    else if(t_cells[11] == true)
    {
        $("#cell_t12").css("text-align", "right");
    }
    else if(t_cells[12] == true)
    {
        $("#cell_t13").css("text-align", "right");
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        $("#cell_u1").css("text-align", "right");
    }
    else if(u_cells[1] == true)
    {
        $("#cell_u2").css("text-align", "right");
    }
    else if(u_cells[2] == true)
    {
        $("#cell_u3").css("text-align", "right");
    }
    else if(u_cells[3] == true)
    {
        $("#cell_u4").css("text-align", "right");
    }
    else if(u_cells[4] == true)
    {
        $("#cell_u5").css("text-align", "right");
    }
    else if(u_cells[5] == true)
    {
        $("#cell_u6").css("text-align", "right");
    }
    else if(u_cells[6] == true)
    {
        $("#cell_u7").css("text-align", "right");
    }
    else if(u_cells[7] == true)
    {
        $("#cell_u8").css("text-align", "right");
    }
    else if(u_cells[8] == true)
    {
        $("#cell_u9").css("text-align", "right");
    }
    else if(u_cells[9] == true)
    {
        $("#cell_u10").css("text-align", "right");
    }
    else if(u_cells[10] == true)
    {
        $("#cell_u11").css("text-align", "right");
    }
    else if(u_cells[11] == true)
    {
        $("#cell_u12").css("text-align", "right");
    }
    else if(u_cells[12] == true)
    {
        $("#cell_u13").css("text-align", "right");
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        $("#cell_v1").css("text-align", "right");
    }
    else if(v_cells[1] == true)
    {
        $("#cell_v2").css("text-align", "right");
    }
    else if(v_cells[2] == true)
    {
        $("#cell_v3").css("text-align", "right");
    }
    else if(v_cells[3] == true)
    {
        $("#cell_v4").css("text-align", "right");
    }
    else if(v_cells[4] == true)
    {
        $("#cell_v5").css("text-align", "right");
    }
    else if(v_cells[5] == true)
    {
        $("#cell_v6").css("text-align", "right");
    }
    else if(v_cells[6] == true)
    {
        $("#cell_v7").css("text-align", "right");
    }
    else if(v_cells[7] == true)
    {
        $("#cell_v8").css("text-align", "right");
    }
    else if(v_cells[8] == true)
    {
        $("#cell_v9").css("text-align", "right");
    }
    else if(v_cells[9] == true)
    {
        $("#cell_v10").css("text-align", "right");
    }
    else if(v_cells[10] == true)
    {
        $("#cell_v11").css("text-align", "right");
    }
    else if(v_cells[11] == true)
    {
        $("#cell_v12").css("text-align", "right");
    }
    else if(v_cells[12] == true)
    {
        $("#cell_v13").css("text-align", "right");
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        $("#cell_w1").css("text-align", "right");
    }
    else if(w_cells[1] == true)
    {
        $("#cell_w2").css("text-align", "right");
    }
    else if(w_cells[2] == true)
    {
        $("#cell_w3").css("text-align", "right");
    }
    else if(w_cells[3] == true)
    {
        $("#cell_w4").css("text-align", "right");
    }
    else if(w_cells[4] == true)
    {
        $("#cell_w5").css("text-align", "right");
    }
    else if(w_cells[5] == true)
    {
        $("#cell_w6").css("text-align", "right");
    }
    else if(w_cells[6] == true)
    {
        $("#cell_w7").css("text-align", "right");
    }
    else if(w_cells[7] == true)
    {
        $("#cell_w8").css("text-align", "right");
    }
    else if(w_cells[8] == true)
    {
        $("#cell_w9").css("text-align", "right");
    }
    else if(w_cells[9] == true)
    {
        $("#cell_w10").css("text-align", "right");
    }
    else if(w_cells[10] == true)
    {
        $("#cell_w11").css("text-align", "right");
    }
    else if(w_cells[11] == true)
    {
        $("#cell_w12").css("text-align", "right");
    }
    else if(w_cells[12] == true)
    {
        $("#cell_w13").css("text-align", "right");
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        $("#cell_x1").css("text-align", "right");
    }
    else if(x_cells[1] == true)
    {
        $("#cell_x2").css("text-align", "right");
    }
    else if(x_cells[2] == true)
    {
        $("#cell_x3").css("text-align", "right");
    }
    else if(x_cells[3] == true)
    {
        $("#cell_x4").css("text-align", "right");
    }
    else if(x_cells[4] == true)
    {
        $("#cell_x5").css("text-align", "right");
    }
    else if(x_cells[5] == true)
    {
        $("#cell_x6").css("text-align", "right");
    }
    else if(x_cells[6] == true)
    {
        $("#cell_x7").css("text-align", "right");
    }
    else if(x_cells[7] == true)
    {
        $("#cell_x8").css("text-align", "right");
    }
    else if(x_cells[8] == true)
    {
        $("#cell_x9").css("text-align", "right");
    }
    else if(x_cells[9] == true)
    {
        $("#cell_x10").css("text-align", "right");
    }
    else if(x_cells[10] == true)
    {
        $("#cell_x11").css("text-align", "right");
    }
    else if(x_cells[11] == true)
    {
        $("#cell_x12").css("text-align", "right");
    }
    else if(x_cells[12] == true)
    {
        $("#cell_x13").css("text-align", "right");
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        $("#cell_y1").css("text-align", "right");
    }
    else if(y_cells[1] == true)
    {
        $("#cell_y2").css("text-align", "right");
    }
    else if(y_cells[2] == true)
    {
        $("#cell_y3").css("text-align", "right");
    }
    else if(y_cells[3] == true)
    {
        $("#cell_y4").css("text-align", "right");
    }
    else if(y_cells[4] == true)
    {
        $("#cell_y5").css("text-align", "right");
    }
    else if(y_cells[5] == true)
    {
        $("#cell_y6").css("text-align", "right");
    }
    else if(y_cells[6] == true)
    {
        $("#cell_y7").css("text-align", "right");
    }
    else if(y_cells[7] == true)
    {
        $("#cell_y8").css("text-align", "right");
    }
    else if(y_cells[8] == true)
    {
        $("#cell_y9").css("text-align", "right");
    }
    else if(y_cells[9] == true)
    {
        $("#cell_y10").css("text-align", "right");
    }
    else if(y_cells[10] == true)
    {
        $("#cell_y11").css("text-align", "right");
    }
    else if(y_cells[11] == true)
    {
        $("#cell_y12").css("text-align", "right");
    }
    else if(y_cells[12] == true)
    {
        $("#cell_y13").css("text-align", "right");
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        $("#cell_z1").css("text-align", "right");
    }
    else if(z_cells[1] == true)
    {
        $("#cell_z2").css("text-align", "right");
    }
    else if(z_cells[2] == true)
    {
        $("#cell_z3").css("text-align", "right");
    }
    else if(z_cells[3] == true)
    {
        $("#cell_z4").css("text-align", "right");
    }
    else if(z_cells[4] == true)
    {
        $("#cell_z5").css("text-align", "right");
    }
    else if(z_cells[5] == true)
    {
        $("#cell_z6").css("text-align", "right");
    }
    else if(z_cells[6] == true)
    {
        $("#cell_z7").css("text-align", "right");
    }
    else if(z_cells[7] == true)
    {
        $("#cell_z8").css("text-align", "right");
    }
    else if(z_cells[8] == true)
    {
        $("#cell_z9").css("text-align", "right");
    }
    else if(z_cells[9] == true)
    {
        $("#cell_z10").css("text-align", "right");
    }
    else if(z_cells[10] == true)
    {
        $("#cell_z11").css("text-align", "right");
    }
    else if(z_cells[11] == true)
    {
        $("#cell_z12").css("text-align", "right");
    }
    else if(z_cells[12] == true)
    {
        $("#cell_z13").css("text-align", "right");
    }
}

//if the user changes the font align to center
function text_align_to_Center()
{
    //A column cells
    if(a_cells[0] == true)
    {
        $("#cell_a1").css("text-align", "center");
    }
    else if(a_cells[1] == true)
    {
        $("#cell_a2").css("text-align", "center");
    }
    else if(a_cells[2] == true)
    {
        $("#cell_a3").css("text-align", "center");
    }
    else if(a_cells[3] == true)
    {
        $("#cell_a4").css("text-align", "center");
    }
    else if(a_cells[4] == true)
    {
        $("#cell_a5").css("text-align", "center");
    }
    else if(a_cells[5] == true)
    {
        $("#cell_a6").css("text-align", "center");
    }
    else if(a_cells[6] == true)
    {
        $("#cell_a7").css("text-align", "center");
    }
    else if(a_cells[7] == true)
    {
        $("#cell_a8").css("text-align", "center");
    }
    else if(a_cells[8] == true)
    {
        $("#cell_a9").css("text-align", "center");
    }
    else if(a_cells[9] == true)
    {
        $("#cell_a10").css("text-align", "center");
    }
    else if(a_cells[10] == true)
    {
        $("#cell_a11").css("text-align", "center");
    }
    else if(a_cells[11] == true)
    {
        $("#cell_a12").css("text-align", "center");
    }
    else if(a_cells[12] == true)
    {
        $("#cell_a13").css("text-align", "center");
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        $("#cell_b1").css("text-align", "center");
    }
    else if(b_cells[1] == true)
    {
        $("#cell_b2").css("text-align", "center");
    }
    else if(b_cells[2] == true)
    {
        $("#cell_b3").css("text-align", "center");
    }
    else if(b_cells[3] == true)
    {
        $("#cell_b4").css("text-align", "center");
    }
    else if(b_cells[4] == true)
    {
        $("#cell_b5").css("text-align", "center");
    }
    else if(b_cells[5] == true)
    {
        $("#cell_b6").css("text-align", "center");
    }
    else if(b_cells[6] == true)
    {
        $("#cell_b7").css("text-align", "center");
    }
    else if(b_cells[7] == true)
    {
        $("#cell_b8").css("text-align", "center");
    }
    else if(b_cells[8] == true)
    {
        $("#cell_b9").css("text-align", "center");
    }
    else if(b_cells[9] == true)
    {
        $("#cell_b10").css("text-align", "center");
    }
    else if(b_cells[10] == true)
    {
        $("#cell_b11").css("text-align", "center");
    }
    else if(b_cells[11] == true)
    {
        $("#cell_b12").css("text-align", "center");
    }
    else if(b_cells[12] == true)
    {
        $("#cell_b13").css("text-align", "center");
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        $("#cell_c1").css("text-align", "center");
    }
    else if(c_cells[1] == true)
    {
        $("#cell_c2").css("text-align", "center");
    }
    else if(c_cells[2] == true)
    {
        $("#cell_c3").css("text-align", "center");
    }
    else if(c_cells[3] == true)
    {
        $("#cell_c4").css("text-align", "center");
    }
    else if(c_cells[4] == true)
    {
        $("#cell_c5").css("text-align", "center");
    }
    else if(c_cells[5] == true)
    {
        $("#cell_c6").css("text-align", "center");
    }
    else if(c_cells[6] == true)
    {
        $("#cell_c7").css("text-align", "center");
    }
    else if(c_cells[7] == true)
    {
        $("#cell_c8").css("text-align", "center");
    }
    else if(c_cells[8] == true)
    {
        $("#cell_c9").css("text-align", "center");
    }
    else if(c_cells[9] == true)
    {
        $("#cell_c10").css("text-align", "center");
    }
    else if(c_cells[10] == true)
    {
        $("#cell_c11").css("text-align", "center");
    }
    else if(c_cells[11] == true)
    {
        $("#cell_c12").css("text-align", "center");
    }
    else if(c_cells[12] == true)
    {
        $("#cell_c13").css("text-align", "center");
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        $("#cell_d1").css("text-align", "center");
    }
    else if(d_cells[1] == true)
    {
        $("#cell_d2").css("text-align", "center");
    }
    else if(d_cells[2] == true)
    {
        $("#cell_d3").css("text-align", "center");
    }
    else if(d_cells[3] == true)
    {
        $("#cell_d4").css("text-align", "center");
    }
    else if(d_cells[4] == true)
    {
        $("#cell_d5").css("text-align", "center");
    }
    else if(d_cells[5] == true)
    {
        $("#cell_d6").css("text-align", "center");
    }
    else if(d_cells[6] == true)
    {
        $("#cell_d7").css("text-align", "center");
    }
    else if(d_cells[7] == true)
    {
        $("#cell_d8").css("text-align", "center");
    }
    else if(d_cells[8] == true)
    {
        $("#cell_d9").css("text-align", "center");
    }
    else if(d_cells[9] == true)
    {
        $("#cell_d10").css("text-align", "center");
    }
    else if(d_cells[10] == true)
    {
        $("#cell_d11").css("text-align", "center");
    }
    else if(d_cells[11] == true)
    {
        $("#cell_d12").css("text-align", "center");
    }
    else if(d_cells[12] == true)
    {
        $("#cell_d13").css("text-align", "center");
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        $("#cell_e1").css("text-align", "center");
    }
    else if(e_cells[1] == true)
    {
        $("#cell_e2").css("text-align", "center");
    }
    else if(e_cells[2] == true)
    {
        $("#cell_e3").css("text-align", "center");
    }
    else if(e_cells[3] == true)
    {
        $("#cell_e4").css("text-align", "center");
    }
    else if(e_cells[4] == true)
    {
        $("#cell_e5").css("text-align", "center");
    }
    else if(e_cells[5] == true)
    {
        $("#cell_e6").css("text-align", "center");
    }
    else if(e_cells[6] == true)
    {
        $("#cell_e7").css("text-align", "center");
    }
    else if(e_cells[7] == true)
    {
        $("#cell_e8").css("text-align", "center");
    }
    else if(e_cells[8] == true)
    {
        $("#cell_e9").css("text-align", "center");
    }
    else if(e_cells[9] == true)
    {
        $("#cell_e10").css("text-align", "center");
    }
    else if(e_cells[10] == true)
    {
        $("#cell_e11").css("text-align", "center");
    }
    else if(e_cells[11] == true)
    {
        $("#cell_e12").css("text-align", "center");
    }
    else if(e_cells[12] == true)
    {
        $("#cell_e13").css("text-align", "center");
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        $("#cell_f1").css("text-align", "center");
    }
    else if(f_cells[1] == true)
    {
        $("#cell_f2").css("text-align", "center");
    }
    else if(f_cells[2] == true)
    {
        $("#cell_f3").css("text-align", "center");
    }
    else if(f_cells[3] == true)
    {
        $("#cell_f4").css("text-align", "center");
    }
    else if(f_cells[4] == true)
    {
        $("#cell_f5").css("text-align", "center");
    }
    else if(f_cells[5] == true)
    {
        $("#cell_f6").css("text-align", "center");
    }
    else if(f_cells[6] == true)
    {
        $("#cell_f7").css("text-align", "center");
    }
    else if(f_cells[7] == true)
    {
        $("#cell_f8").css("text-align", "center");
    }
    else if(f_cells[8] == true)
    {
        $("#cell_f9").css("text-align", "center");
    }
    else if(f_cells[9] == true)
    {
        $("#cell_f10").css("text-align", "center");
    }
    else if(f_cells[10] == true)
    {
        $("#cell_f11").css("text-align", "center");
    }
    else if(f_cells[11] == true)
    {
        $("#cell_f12").css("text-align", "center");
    }
    else if(f_cells[12] == true)
    {
        $("#cell_f13").css("text-align", "center");
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        $("#cell_g1").css("text-align", "center");
    }
    else if(g_cells[1] == true)
    {
        $("#cell_g2").css("text-align", "center");
    }
    else if(g_cells[2] == true)
    {
        $("#cell_g3").css("text-align", "center");
    }
    else if(g_cells[3] == true)
    {
        $("#cell_g4").css("text-align", "center");
    }
    else if(g_cells[4] == true)
    {
        $("#cell_g5").css("text-align", "center");
    }
    else if(g_cells[5] == true)
    {
        $("#cell_g6").css("text-align", "center");
    }
    else if(g_cells[6] == true)
    {
        $("#cell_g7").css("text-align", "center");
    }
    else if(g_cells[7] == true)
    {
        $("#cell_g8").css("text-align", "center");
    }
    else if(g_cells[8] == true)
    {
        $("#cell_g9").css("text-align", "center");
    }
    else if(g_cells[9] == true)
    {
        $("#cell_g10").css("text-align", "center");
    }
    else if(g_cells[10] == true)
    {
        $("#cell_g11").css("text-align", "center");
    }
    else if(g_cells[11] == true)
    {
        $("#cell_g12").css("text-align", "center");
    }
    else if(g_cells[12] == true)
    {
        $("#cell_g13").css("text-align", "center");
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        $("#cell_h1").css("text-align", "center");
    }
    else if(h_cells[1] == true)
    {
        $("#cell_h2").css("text-align", "center");
    }
    else if(h_cells[2] == true)
    {
        $("#cell_h3").css("text-align", "center");
    }
    else if(h_cells[3] == true)
    {
        $("#cell_h4").css("text-align", "center");
    }
    else if(h_cells[4] == true)
    {
        $("#cell_h5").css("text-align", "center");
    }
    else if(h_cells[5] == true)
    {
        $("#cell_h6").css("text-align", "center");
    }
    else if(h_cells[6] == true)
    {
        $("#cell_h7").css("text-align", "center");
    }
    else if(h_cells[7] == true)
    {
        $("#cell_h8").css("text-align", "center");
    }
    else if(h_cells[8] == true)
    {
        $("#cell_h9").css("text-align", "center");
    }
    else if(h_cells[9] == true)
    {
        $("#cell_h10").css("text-align", "center");
    }
    else if(h_cells[10] == true)
    {
        $("#cell_h11").css("text-align", "center");
    }
    else if(h_cells[11] == true)
    {
        $("#cell_h12").css("text-align", "center");
    }
    else if(h_cells[12] == true)
    {
        $("#cell_h13").css("text-align", "center");
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        $("#cell_i1").css("text-align", "center");
    }
    else if(i_cells[1] == true)
    {
        $("#cell_i2").css("text-align", "center");
    }
    else if(i_cells[2] == true)
    {
        $("#cell_i3").css("text-align", "center");
    }
    else if(i_cells[3] == true)
    {
        $("#cell_i4").css("text-align", "center");
    }
    else if(i_cells[4] == true)
    {
        $("#cell_i5").css("text-align", "center");
    }
    else if(i_cells[5] == true)
    {
        $("#cell_i6").css("text-align", "center");
    }
    else if(i_cells[6] == true)
    {
        $("#cell_i7").css("text-align", "center");
    }
    else if(i_cells[7] == true)
    {
        $("#cell_i8").css("text-align", "center");
    }
    else if(i_cells[8] == true)
    {
        $("#cell_i9").css("text-align", "center");
    }
    else if(i_cells[9] == true)
    {
        $("#cell_i10").css("text-align", "center");
    }
    else if(i_cells[10] == true)
    {
        $("#cell_i11").css("text-align", "center");
    }
    else if(i_cells[11] == true)
    {
        $("#cell_i12").css("text-align", "center");
    }
    else if(i_cells[12] == true)
    {
        $("#cell_i13").css("text-align", "center");
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        $("#cell_j1").css("text-align", "center");
    }
    else if(j_cells[1] == true)
    {
        $("#cell_j2").css("text-align", "center");
    }
    else if(j_cells[2] == true)
    {
        $("#cell_j3").css("text-align", "center");
    }
    else if(j_cells[3] == true)
    {
        $("#cell_j4").css("text-align", "center");
    }
    else if(j_cells[4] == true)
    {
        $("#cell_j5").css("text-align", "center");
    }
    else if(j_cells[5] == true)
    {
        $("#cell_j6").css("text-align", "center");
    }
    else if(j_cells[6] == true)
    {
        $("#cell_j7").css("text-align", "center");
    }
    else if(j_cells[7] == true)
    {
        $("#cell_j8").css("text-align", "center");
    }
    else if(j_cells[8] == true)
    {
        $("#cell_j9").css("text-align", "center");
    }
    else if(j_cells[9] == true)
    {
        $("#cell_j10").css("text-align", "center");
    }
    else if(j_cells[10] == true)
    {
        $("#cell_j11").css("text-align", "center");
    }
    else if(j_cells[11] == true)
    {
        $("#cell_j12").css("text-align", "center");
    }
    else if(j_cells[12] == true)
    {
        $("#cell_j13").css("text-align", "center");
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        $("#cell_k1").css("text-align", "center");
    }
    else if(k_cells[1] == true)
    {
        $("#cell_k2").css("text-align", "center");
    }
    else if(k_cells[2] == true)
    {
        $("#cell_k3").css("text-align", "center");
    }
    else if(k_cells[3] == true)
    {
        $("#cell_k4").css("text-align", "center");
    }
    else if(k_cells[4] == true)
    {
        $("#cell_k5").css("text-align", "center");
    }
    else if(k_cells[5] == true)
    {
        $("#cell_k6").css("text-align", "center");
    }
    else if(k_cells[6] == true)
    {
        $("#cell_k7").css("text-align", "center");
    }
    else if(k_cells[7] == true)
    {
        $("#cell_k8").css("text-align", "center");
    }
    else if(k_cells[8] == true)
    {
        $("#cell_k9").css("text-align", "center");
    }
    else if(k_cells[9] == true)
    {
        $("#cell_k10").css("text-align", "center");
    }
    else if(k_cells[10] == true)
    {
        $("#cell_k11").css("text-align", "center");
    }
    else if(k_cells[11] == true)
    {
        $("#cell_k12").css("text-align", "center");
    }
    else if(k_cells[12] == true)
    {
        $("#cell_k13").css("text-align", "center");
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        $("#cell_l1").css("text-align", "center");
    }
    else if(l_cells[1] == true)
    {
        $("#cell_l2").css("text-align", "center");
    }
    else if(l_cells[2] == true)
    {
        $("#cell_l3").css("text-align", "center");
    }
    else if(l_cells[3] == true)
    {
        $("#cell_l4").css("text-align", "center");
    }
    else if(l_cells[4] == true)
    {
        $("#cell_l5").css("text-align", "center");
    }
    else if(l_cells[5] == true)
    {
        $("#cell_l6").css("text-align", "center");
    }
    else if(l_cells[6] == true)
    {
        $("#cell_l7").css("text-align", "center");
    }
    else if(l_cells[7] == true)
    {
        $("#cell_l8").css("text-align", "center");
    }
    else if(l_cells[8] == true)
    {
        $("#cell_l9").css("text-align", "center");
    }
    else if(l_cells[9] == true)
    {
        $("#cell_l10").css("text-align", "center");
    }
    else if(l_cells[10] == true)
    {
        $("#cell_l11").css("text-align", "center");
    }
    else if(l_cells[11] == true)
    {
        $("#cell_l12").css("text-align", "center");
    }
    else if(l_cells[12] == true)
    {
        $("#cell_l13").css("text-align", "center");
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        $("#cell_m1").css("text-align", "center");
    }
    else if(m_cells[1] == true)
    {
        $("#cell_m2").css("text-align", "center");
    }
    else if(m_cells[2] == true)
    {
        $("#cell_m3").css("text-align", "center");
    }
    else if(m_cells[3] == true)
    {
        $("#cell_m4").css("text-align", "center");
    }
    else if(m_cells[4] == true)
    {
        $("#cell_m5").css("text-align", "center");
    }
    else if(m_cells[5] == true)
    {
        $("#cell_m6").css("text-align", "center");
    }
    else if(m_cells[6] == true)
    {
        $("#cell_m7").css("text-align", "center");
    }
    else if(m_cells[7] == true)
    {
        $("#cell_m8").css("text-align", "center");
    }
    else if(m_cells[8] == true)
    {
        $("#cell_m9").css("text-align", "center");
    }
    else if(m_cells[9] == true)
    {
        $("#cell_m10").css("text-align", "center");
    }
    else if(m_cells[10] == true)
    {
        $("#cell_m11").css("text-align", "center");
    }
    else if(m_cells[11] == true)
    {
        $("#cell_m12").css("text-align", "center");
    }
    else if(m_cells[12] == true)
    {
        $("#cell_m13").css("text-align", "center");
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        $("#cell_n1").css("text-align", "center");
    }
    else if(n_cells[1] == true)
    {
        $("#cell_n2").css("text-align", "center");
    }
    else if(n_cells[2] == true)
    {
        $("#cell_n3").css("text-align", "center");
    }
    else if(n_cells[3] == true)
    {
        $("#cell_n4").css("text-align", "center");
    }
    else if(n_cells[4] == true)
    {
        $("#cell_n5").css("text-align", "center");
    }
    else if(n_cells[5] == true)
    {
        $("#cell_n6").css("text-align", "center");
    }
    else if(n_cells[6] == true)
    {
        $("#cell_n7").css("text-align", "center");
    }
    else if(n_cells[7] == true)
    {
        $("#cell_n8").css("text-align", "center");
    }
    else if(n_cells[8] == true)
    {
        $("#cell_n9").css("text-align", "center");
    }
    else if(n_cells[9] == true)
    {
        $("#cell_n10").css("text-align", "center");
    }
    else if(n_cells[10] == true)
    {
        $("#cell_n11").css("text-align", "center");
    }
    else if(n_cells[11] == true)
    {
        $("#cell_n12").css("text-align", "center");
    }
    else if(n_cells[12] == true)
    {
        $("#cell_n13").css("text-align", "center");
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        $("#cell_o1").css("text-align", "center");
    }
    else if(o_cells[1] == true)
    {
        $("#cell_o2").css("text-align", "center");
    }
    else if(o_cells[2] == true)
    {
        $("#cell_o3").css("text-align", "center");
    }
    else if(o_cells[3] == true)
    {
        $("#cell_o4").css("text-align", "center");
    }
    else if(o_cells[4] == true)
    {
        $("#cell_o5").css("text-align", "center");
    }
    else if(o_cells[5] == true)
    {
        $("#cell_o6").css("text-align", "center");
    }
    else if(o_cells[6] == true)
    {
        $("#cell_o7").css("text-align", "center");
    }
    else if(o_cells[7] == true)
    {
        $("#cell_o8").css("text-align", "center");
    }
    else if(o_cells[8] == true)
    {
        $("#cell_o9").css("text-align", "center");
    }
    else if(o_cells[9] == true)
    {
        $("#cell_o10").css("text-align", "center");
    }
    else if(o_cells[10] == true)
    {
        $("#cell_o11").css("text-align", "center");
    }
    else if(o_cells[11] == true)
    {
        $("#cell_o12").css("text-align", "center");
    }
    else if(o_cells[12] == true)
    {
        $("#cell_o13").css("text-align", "center");
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        $("#cell_p1").css("text-align", "center");
    }
    else if(p_cells[1] == true)
    {
        $("#cell_p2").css("text-align", "center");
    }
    else if(p_cells[2] == true)
    {
        $("#cell_p3").css("text-align", "center");
    }
    else if(p_cells[3] == true)
    {
        $("#cell_p3").css("text-align", "center");
    }
    else if(p_cells[4] == true)
    {
        $("#cell_p4").css("text-align", "center");
    }
    else if(p_cells[5] == true)
    {
        $("#cell_p5").css("text-align", "center");
    }
    else if(p_cells[6] == true)
    {
        $("#cell_p6").css("text-align", "center");
    }
    else if(p_cells[7] == true)
    {
        $("#cell_p7").css("text-align", "center");
    }
    else if(p_cells[8] == true)
    {
        $("#cell_p8").css("text-align", "center");
    }
    else if(p_cells[9] == true)
    {
        $("#cell_p10").css("text-align", "center");
    }
    else if(p_cells[10] == true)
    {
        $("#cell_p11").css("text-align", "center");
    }
    else if(p_cells[11] == true)
    {
        $("#cell_p12").css("text-align", "center");
    }
    else if(p_cells[12] == true)
    {
        $("#cell_p13").css("text-align", "center");
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        $("#cell_q1").css("text-align", "center");
    }
    else if(q_cells[1] == true)
    {
        $("#cell_q2").css("text-align", "center");
    }
    else if(q_cells[2] == true)
    {
        $("#cell_q3").css("text-align", "center");
    }
    else if(q_cells[3] == true)
    {
        $("#cell_q4").css("text-align", "center");
    }
    else if(q_cells[4] == true)
    {
        $("#cell_q5").css("text-align", "center");
    }
    else if(q_cells[5] == true)
    {
        $("#cell_q6").css("text-align", "center");
    }
    else if(q_cells[6] == true)
    {
        $("#cell_q7").css("text-align", "center");
    }
    else if(q_cells[7] == true)
    {
        $("#cell_q8").css("text-align", "center");
    }
    else if(q_cells[8] == true)
    {
        $("#cell_q9").css("text-align", "center");
    }
    else if(q_cells[9] == true)
    {
        $("#cell_q10").css("text-align", "center");
    }
    else if(q_cells[10] == true)
    {
        $("#cell_q11").css("text-align", "center");
    }
    else if(q_cells[11] == true)
    {
        $("#cell_q12").css("text-align", "center");
    }
    else if(q_cells[12] == true)
    {
        $("#cell_q13").css("text-align", "center");
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        $("#cell_r1").css("text-align", "center");
    }
    else if(r_cells[1] == true)
    {
        $("#cell_r2").css("text-align", "center");
    }
    else if(r_cells[2] == true)
    {
        $("#cell_r3").css("text-align", "center");
    }
    else if(r_cells[3] == true)
    {
        $("#cell_r4").css("text-align", "center");
    }
    else if(r_cells[4] == true)
    {
        $("#cell_r5").css("text-align", "center");
    }
    else if(r_cells[5] == true)
    {
        $("#cell_r6").css("text-align", "center");
    }
    else if(r_cells[6] == true)
    {
        $("#cell_r7").css("text-align", "center");
    }
    else if(r_cells[7] == true)
    {
        $("#cell_r8").css("text-align", "center");
    }
    else if(r_cells[8] == true)
    {
        $("#cell_r9").css("text-align", "center");
    }
    else if(r_cells[9] == true)
    {
        $("#cell_r10").css("text-align", "center");
    }
    else if(r_cells[10] == true)
    {
        $("#cell_r11").css("text-align", "center");
    }
    else if(r_cells[11] == true)
    {
        $("#cell_r12").css("text-align", "center");
    }
    else if(r_cells[12] == true)
    {
        $("#cell_r13").css("text-align", "center");
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        $("#cell_s1").css("text-align", "center");
    }
    else if(s_cells[1] == true)
    {
        $("#cell_s2").css("text-align", "center");
    }
    else if(s_cells[2] == true)
    {
        $("#cell_s3").css("text-align", "center");
    }
    else if(s_cells[3] == true)
    {
        $("#cell_s4").css("text-align", "center");
    }
    else if(s_cells[4] == true)
    {
        $("#cell_s5").css("text-align", "center");
    }
    else if(s_cells[5] == true)
    {
        $("#cell_s6").css("text-align", "center");
    }
    else if(s_cells[6] == true)
    {
        $("#cell_s7").css("text-align", "center");
    }
    else if(s_cells[7] == true)
    {
        $("#cell_s8").css("text-align", "center");
    }
    else if(s_cells[8] == true)
    {
        $("#cell_s9").css("text-align", "center");
    }
    else if(s_cells[9] == true)
    {
        $("#cell_s10").css("text-align", "center");
    }
    else if(s_cells[10] == true)
    {
        $("#cell_s11").css("text-align", "center");
    }
    else if(s_cells[11] == true)
    {
        $("#cell_s12").css("text-align", "center");
    }
    else if(s_cells[12] == true)
    {
        $("#cell_s13").css("text-align", "center");
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        $("#cell_t1").css("text-align", "center");
    }
    else if(t_cells[1] == true)
    {
        $("#cell_t2").css("text-align", "center");
    }
    else if(t_cells[2] == true)
    {
        $("#cell_t3").css("text-align", "center");
    }
    else if(t_cells[3] == true)
    {
        $("#cell_t4").css("text-align", "center");
    }
    else if(t_cells[4] == true)
    {
        $("#cell_t5").css("text-align", "center");
    }
    else if(t_cells[5] == true)
    {
        $("#cell_t6").css("text-align", "center");
    }
    else if(t_cells[6] == true)
    {
        $("#cell_t7").css("text-align", "center");
    }
    else if(t_cells[7] == true)
    {
        $("#cell_t8").css("text-align", "center");
    }
    else if(t_cells[8] == true)
    {
        $("#cell_t9").css("text-align", "center");
    }
    else if(t_cells[9] == true)
    {
        $("#cell_t10").css("text-align", "center");
    }
    else if(t_cells[10] == true)
    {
        $("#cell_t11").css("text-align", "center");
    }
    else if(t_cells[11] == true)
    {
        $("#cell_t12").css("text-align", "center");
    }
    else if(t_cells[12] == true)
    {
        $("#cell_t13").css("text-align", "center");
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        $("#cell_u1").css("text-align", "center");
    }
    else if(u_cells[1] == true)
    {
        $("#cell_u2").css("text-align", "center");
    }
    else if(u_cells[2] == true)
    {
        $("#cell_u3").css("text-align", "center");
    }
    else if(u_cells[3] == true)
    {
        $("#cell_u4").css("text-align", "center");
    }
    else if(u_cells[4] == true)
    {
        $("#cell_u5").css("text-align", "center");
    }
    else if(u_cells[5] == true)
    {
        $("#cell_u6").css("text-align", "center");
    }
    else if(u_cells[6] == true)
    {
        $("#cell_u7").css("text-align", "center");
    }
    else if(u_cells[7] == true)
    {
        $("#cell_u8").css("text-align", "center");
    }
    else if(u_cells[8] == true)
    {
        $("#cell_u9").css("text-align", "center");
    }
    else if(u_cells[9] == true)
    {
        $("#cell_u10").css("text-align", "center");
    }
    else if(u_cells[10] == true)
    {
        $("#cell_u11").css("text-align", "center");
    }
    else if(u_cells[11] == true)
    {
        $("#cell_u12").css("text-align", "center");
    }
    else if(u_cells[12] == true)
    {
        $("#cell_u13").css("text-align", "center");
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        $("#cell_v1").css("text-align", "center");
    }
    else if(v_cells[1] == true)
    {
        $("#cell_v2").css("text-align", "center");
    }
    else if(v_cells[2] == true)
    {
        $("#cell_v3").css("text-align", "center");
    }
    else if(v_cells[3] == true)
    {
        $("#cell_v4").css("text-align", "center");
    }
    else if(v_cells[4] == true)
    {
        $("#cell_v5").css("text-align", "center");
    }
    else if(v_cells[5] == true)
    {
        $("#cell_v6").css("text-align", "center");
    }
    else if(v_cells[6] == true)
    {
        $("#cell_v7").css("text-align", "center");
    }
    else if(v_cells[7] == true)
    {
        $("#cell_v8").css("text-align", "center");
    }
    else if(v_cells[8] == true)
    {
        $("#cell_v9").css("text-align", "center");
    }
    else if(v_cells[9] == true)
    {
        $("#cell_v10").css("text-align", "center");
    }
    else if(v_cells[10] == true)
    {
        $("#cell_v11").css("text-align", "center");
    }
    else if(v_cells[11] == true)
    {
        $("#cell_v12").css("text-align", "center");
    }
    else if(v_cells[12] == true)
    {
        $("#cell_v13").css("text-align", "center");
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        $("#cell_w1").css("text-align", "center");
    }
    else if(w_cells[1] == true)
    {
        $("#cell_w2").css("text-align", "center");
    }
    else if(w_cells[2] == true)
    {
        $("#cell_w3").css("text-align", "center");
    }
    else if(w_cells[3] == true)
    {
        $("#cell_w4").css("text-align", "center");
    }
    else if(w_cells[4] == true)
    {
        $("#cell_w5").css("text-align", "center");
    }
    else if(w_cells[5] == true)
    {
        $("#cell_w6").css("text-align", "center");
    }
    else if(w_cells[6] == true)
    {
        $("#cell_w7").css("text-align", "center");
    }
    else if(w_cells[7] == true)
    {
        $("#cell_w8").css("text-align", "center");
    }
    else if(w_cells[8] == true)
    {
        $("#cell_w9").css("text-align", "center");
    }
    else if(w_cells[9] == true)
    {
        $("#cell_w10").css("text-align", "center");
    }
    else if(w_cells[10] == true)
    {
        $("#cell_w11").css("text-align", "center");
    }
    else if(w_cells[11] == true)
    {
        $("#cell_w12").css("text-align", "center");
    }
    else if(w_cells[12] == true)
    {
        $("#cell_w13").css("text-align", "center");
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        $("#cell_x1").css("text-align", "center");
    }
    else if(x_cells[1] == true)
    {
        $("#cell_x2").css("text-align", "center");
    }
    else if(x_cells[2] == true)
    {
        $("#cell_x3").css("text-align", "center");
    }
    else if(x_cells[3] == true)
    {
        $("#cell_x4").css("text-align", "center");
    }
    else if(x_cells[4] == true)
    {
        $("#cell_x5").css("text-align", "center");
    }
    else if(x_cells[5] == true)
    {
        $("#cell_x6").css("text-align", "center");
    }
    else if(x_cells[6] == true)
    {
        $("#cell_x7").css("text-align", "center");
    }
    else if(x_cells[7] == true)
    {
        $("#cell_x8").css("text-align", "center");
    }
    else if(x_cells[8] == true)
    {
        $("#cell_x9").css("text-align", "center");
    }
    else if(x_cells[9] == true)
    {
        $("#cell_x10").css("text-align", "center");
    }
    else if(x_cells[10] == true)
    {
        $("#cell_x11").css("text-align", "center");
    }
    else if(x_cells[11] == true)
    {
        $("#cell_x12").css("text-align", "center");
    }
    else if(x_cells[12] == true)
    {
        $("#cell_x13").css("text-align", "center");
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        $("#cell_y1").css("text-align", "center");
    }
    else if(y_cells[1] == true)
    {
        $("#cell_y2").css("text-align", "center");
    }
    else if(y_cells[2] == true)
    {
        $("#cell_y3").css("text-align", "center");
    }
    else if(y_cells[3] == true)
    {
        $("#cell_y4").css("text-align", "center");
    }
    else if(y_cells[4] == true)
    {
        $("#cell_y5").css("text-align", "center");
    }
    else if(y_cells[5] == true)
    {
        $("#cell_y6").css("text-align", "center");
    }
    else if(y_cells[6] == true)
    {
        $("#cell_y7").css("text-align", "center");
    }
    else if(y_cells[7] == true)
    {
        $("#cell_y8").css("text-align", "center");
    }
    else if(y_cells[8] == true)
    {
        $("#cell_y9").css("text-align", "center");
    }
    else if(y_cells[9] == true)
    {
        $("#cell_y10").css("text-align", "center");
    }
    else if(y_cells[10] == true)
    {
        $("#cell_y11").css("text-align", "center");
    }
    else if(y_cells[11] == true)
    {
        $("#cell_y12").css("text-align", "center");
    }
    else if(y_cells[12] == true)
    {
        $("#cell_y13").css("text-align", "center");
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        $("#cell_z1").css("text-align", "center");
    }
    else if(z_cells[1] == true)
    {
        $("#cell_z2").css("text-align", "center");
    }
    else if(z_cells[2] == true)
    {
        $("#cell_z3").css("text-align", "center");
    }
    else if(z_cells[3] == true)
    {
        $("#cell_z4").css("text-align", "center");
    }
    else if(z_cells[4] == true)
    {
        $("#cell_z5").css("text-align", "center");
    }
    else if(z_cells[5] == true)
    {
        $("#cell_z6").css("text-align", "center");
    }
    else if(z_cells[6] == true)
    {
        $("#cell_z7").css("text-align", "center");
    }
    else if(z_cells[7] == true)
    {
        $("#cell_z8").css("text-align", "center");
    }
    else if(z_cells[8] == true)
    {
        $("#cell_z9").css("text-align", "center");
    }
    else if(z_cells[9] == true)
    {
        $("#cell_z10").css("text-align", "center");
    }
    else if(z_cells[10] == true)
    {
        $("#cell_z11").css("text-align", "center");
    }
    else if(z_cells[11] == true)
    {
        $("#cell_z12").css("text-align", "center");
    }
    else if(z_cells[12] == true)
    {
        $("#cell_z13").css("text-align", "center");
    }
}

//if the user changes the font align to left
function text_align_to_Left()
{
    //A column cells
    if(a_cells[0] == true)
    {
        $("#cell_a1").css("text-align", "left");
    }
    else if(a_cells[1] == true)
    {
        $("#cell_a2").css("text-align", "left");
    }
    else if(a_cells[2] == true)
    {
        $("#cell_a3").css("text-align", "left");
    }
    else if(a_cells[3] == true)
    {
        $("#cell_a4").css("text-align", "left");
    }
    else if(a_cells[4] == true)
    {
        $("#cell_a5").css("text-align", "left");
    }
    else if(a_cells[5] == true)
    {
        $("#cell_a6").css("text-align", "left");
    }
    else if(a_cells[6] == true)
    {
        $("#cell_a7").css("text-align", "left");
    }
    else if(a_cells[7] == true)
    {
        $("#cell_a8").css("text-align", "left");
    }
    else if(a_cells[8] == true)
    {
        $("#cell_a9").css("text-align", "left");
    }
    else if(a_cells[9] == true)
    {
        $("#cell_a10").css("text-align", "left");
    }
    else if(a_cells[10] == true)
    {
        $("#cell_a11").css("text-align", "left");
    }
    else if(a_cells[11] == true)
    {
        $("#cell_a12").css("text-align", "left");
    }
    else if(a_cells[12] == true)
    {
        $("#cell_a13").css("text-align", "left");
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        $("#cell_b1").css("text-align", "left");
    }
    else if(b_cells[1] == true)
    {
        $("#cell_b2").css("text-align", "left");
    }
    else if(b_cells[2] == true)
    {
        $("#cell_b3").css("text-align", "left");
    }
    else if(b_cells[3] == true)
    {
        $("#cell_b4").css("text-align", "left");
    }
    else if(b_cells[4] == true)
    {
        $("#cell_b5").css("text-align", "left");
    }
    else if(b_cells[5] == true)
    {
        $("#cell_b6").css("text-align", "left");
    }
    else if(b_cells[6] == true)
    {
        $("#cell_b7").css("text-align", "left");
    }
    else if(b_cells[7] == true)
    {
        $("#cell_b8").css("text-align", "left");
    }
    else if(b_cells[8] == true)
    {
        $("#cell_b9").css("text-align", "left");
    }
    else if(b_cells[9] == true)
    {
        $("#cell_b10").css("text-align", "left");
    }
    else if(b_cells[10] == true)
    {
        $("#cell_b11").css("text-align", "left");
    }
    else if(b_cells[11] == true)
    {
        $("#cell_b12").css("text-align", "left");
    }
    else if(b_cells[12] == true)
    {
        $("#cell_b13").css("text-align", "left");
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        $("#cell_c1").css("text-align", "left");
    }
    else if(c_cells[1] == true)
    {
        $("#cell_c2").css("text-align", "left");
    }
    else if(c_cells[2] == true)
    {
        $("#cell_c3").css("text-align", "left");
    }
    else if(c_cells[3] == true)
    {
        $("#cell_c4").css("text-align", "left");
    }
    else if(c_cells[4] == true)
    {
        $("#cell_c5").css("text-align", "left");
    }
    else if(c_cells[5] == true)
    {
        $("#cell_c6").css("text-align", "left");
    }
    else if(c_cells[6] == true)
    {
        $("#cell_c7").css("text-align", "left");
    }
    else if(c_cells[7] == true)
    {
        $("#cell_c8").css("text-align", "left");
    }
    else if(c_cells[8] == true)
    {
        $("#cell_c9").css("text-align", "left");
    }
    else if(c_cells[9] == true)
    {
        $("#cell_c10").css("text-align", "left");
    }
    else if(c_cells[10] == true)
    {
        $("#cell_c11").css("text-align", "left");
    }
    else if(c_cells[11] == true)
    {
        $("#cell_c12").css("text-align", "left");
    }
    else if(c_cells[12] == true)
    {
        $("#cell_c13").css("text-align", "left");
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        $("#cell_d1").css("text-align", "left");
    }
    else if(d_cells[1] == true)
    {
        $("#cell_d2").css("text-align", "left");
    }
    else if(d_cells[2] == true)
    {
        $("#cell_d3").css("text-align", "left");
    }
    else if(d_cells[3] == true)
    {
        $("#cell_d4").css("text-align", "left");
    }
    else if(d_cells[4] == true)
    {
        $("#cell_d5").css("text-align", "left");
    }
    else if(d_cells[5] == true)
    {
        $("#cell_d6").css("text-align", "left");
    }
    else if(d_cells[6] == true)
    {
        $("#cell_d7").css("text-align", "left");
    }
    else if(d_cells[7] == true)
    {
        $("#cell_d8").css("text-align", "left");
    }
    else if(d_cells[8] == true)
    {
        $("#cell_d9").css("text-align", "left");
    }
    else if(d_cells[9] == true)
    {
        $("#cell_d10").css("text-align", "left");
    }
    else if(d_cells[10] == true)
    {
        $("#cell_d11").css("text-align", "left");
    }
    else if(d_cells[11] == true)
    {
        $("#cell_d12").css("text-align", "left");
    }
    else if(d_cells[12] == true)
    {
        $("#cell_d13").css("text-align", "left");
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        $("#cell_e1").css("text-align", "left");
    }
    else if(e_cells[1] == true)
    {
        $("#cell_e2").css("text-align", "left");
    }
    else if(e_cells[2] == true)
    {
        $("#cell_e3").css("text-align", "left");
    }
    else if(e_cells[3] == true)
    {
        $("#cell_e4").css("text-align", "left");
    }
    else if(e_cells[4] == true)
    {
        $("#cell_e5").css("text-align", "left");
    }
    else if(e_cells[5] == true)
    {
        $("#cell_e6").css("text-align", "left");
    }
    else if(e_cells[6] == true)
    {
        $("#cell_e7").css("text-align", "left");
    }
    else if(e_cells[7] == true)
    {
        $("#cell_e8").css("text-align", "left");
    }
    else if(e_cells[8] == true)
    {
        $("#cell_e9").css("text-align", "left");
    }
    else if(e_cells[9] == true)
    {
        $("#cell_e10").css("text-align", "left");
    }
    else if(e_cells[10] == true)
    {
        $("#cell_e11").css("text-align", "left");
    }
    else if(e_cells[11] == true)
    {
        $("#cell_e12").css("text-align", "left");
    }
    else if(e_cells[12] == true)
    {
        $("#cell_e13").css("text-align", "left");
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        $("#cell_f1").css("text-align", "left");
    }
    else if(f_cells[1] == true)
    {
        $("#cell_f2").css("text-align", "left");
    }
    else if(f_cells[2] == true)
    {
        $("#cell_f3").css("text-align", "left");
    }
    else if(f_cells[3] == true)
    {
        $("#cell_f4").css("text-align", "left");
    }
    else if(f_cells[4] == true)
    {
        $("#cell_f5").css("text-align", "left");
    }
    else if(f_cells[5] == true)
    {
        $("#cell_f6").css("text-align", "left");
    }
    else if(f_cells[6] == true)
    {
        $("#cell_f7").css("text-align", "left");
    }
    else if(f_cells[7] == true)
    {
        $("#cell_f8").css("text-align", "left");
    }
    else if(f_cells[8] == true)
    {
        $("#cell_f9").css("text-align", "left");
    }
    else if(f_cells[9] == true)
    {
        $("#cell_f10").css("text-align", "left");
    }
    else if(f_cells[10] == true)
    {
        $("#cell_f11").css("text-align", "left");
    }
    else if(f_cells[11] == true)
    {
        $("#cell_f12").css("text-align", "left");
    }
    else if(f_cells[12] == true)
    {
        $("#cell_f13").css("text-align", "left");
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        $("#cell_g1").css("text-align", "left");
    }
    else if(g_cells[1] == true)
    {
        $("#cell_g2").css("text-align", "left");
    }
    else if(g_cells[2] == true)
    {
        $("#cell_g3").css("text-align", "left");
    }
    else if(g_cells[3] == true)
    {
        $("#cell_g4").css("text-align", "left");
    }
    else if(g_cells[4] == true)
    {
        $("#cell_g5").css("text-align", "left");
    }
    else if(g_cells[5] == true)
    {
        $("#cell_g6").css("text-align", "left");
    }
    else if(g_cells[6] == true)
    {
        $("#cell_g7").css("text-align", "left");
    }
    else if(g_cells[7] == true)
    {
        $("#cell_g8").css("text-align", "left");
    }
    else if(g_cells[8] == true)
    {
        $("#cell_g9").css("text-align", "left");
    }
    else if(g_cells[9] == true)
    {
        $("#cell_g10").css("text-align", "left");
    }
    else if(g_cells[10] == true)
    {
        $("#cell_g11").css("text-align", "left");
    }
    else if(g_cells[11] == true)
    {
        $("#cell_g12").css("text-align", "left");
    }
    else if(g_cells[12] == true)
    {
        $("#cell_g13").css("text-align", "left");
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        $("#cell_h1").css("text-align", "left");
    }
    else if(h_cells[1] == true)
    {
        $("#cell_h2").css("text-align", "left");
    }
    else if(h_cells[2] == true)
    {
        $("#cell_h3").css("text-align", "left");
    }
    else if(h_cells[3] == true)
    {
        $("#cell_h4").css("text-align", "left");
    }
    else if(h_cells[4] == true)
    {
        $("#cell_h5").css("text-align", "left");
    }
    else if(h_cells[5] == true)
    {
        $("#cell_h6").css("text-align", "left");
    }
    else if(h_cells[6] == true)
    {
        $("#cell_h7").css("text-align", "left");
    }
    else if(h_cells[7] == true)
    {
        $("#cell_h8").css("text-align", "left");
    }
    else if(h_cells[8] == true)
    {
        $("#cell_h9").css("text-align", "left");
    }
    else if(h_cells[9] == true)
    {
        $("#cell_h10").css("text-align", "left");
    }
    else if(h_cells[10] == true)
    {
        $("#cell_h11").css("text-align", "left");
    }
    else if(h_cells[11] == true)
    {
        $("#cell_h12").css("text-align", "left");
    }
    else if(h_cells[12] == true)
    {
        $("#cell_h13").css("text-align", "left");
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        $("#cell_i1").css("text-align", "left");
    }
    else if(i_cells[1] == true)
    {
        $("#cell_i2").css("text-align", "left");
    }
    else if(i_cells[2] == true)
    {
        $("#cell_i3").css("text-align", "left");
    }
    else if(i_cells[3] == true)
    {
        $("#cell_i4").css("text-align", "left");
    }
    else if(i_cells[4] == true)
    {
        $("#cell_i5").css("text-align", "left");
    }
    else if(i_cells[5] == true)
    {
        $("#cell_i6").css("text-align", "left");
    }
    else if(i_cells[6] == true)
    {
        $("#cell_i7").css("text-align", "left");
    }
    else if(i_cells[7] == true)
    {
        $("#cell_i8").css("text-align", "left");
    }
    else if(i_cells[8] == true)
    {
        $("#cell_i9").css("text-align", "left");
    }
    else if(i_cells[9] == true)
    {
        $("#cell_i10").css("text-align", "left");
    }
    else if(i_cells[10] == true)
    {
        $("#cell_i11").css("text-align", "left");
    }
    else if(i_cells[11] == true)
    {
        $("#cell_i12").css("text-align", "left");
    }
    else if(i_cells[12] == true)
    {
        $("#cell_i13").css("text-align", "left");
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        $("#cell_j1").css("text-align", "left");
    }
    else if(j_cells[1] == true)
    {
        $("#cell_j2").css("text-align", "left");
    }
    else if(j_cells[2] == true)
    {
        $("#cell_j3").css("text-align", "left");
    }
    else if(j_cells[3] == true)
    {
        $("#cell_j4").css("text-align", "left");
    }
    else if(j_cells[4] == true)
    {
        $("#cell_j5").css("text-align", "left");
    }
    else if(j_cells[5] == true)
    {
        $("#cell_j6").css("text-align", "left");
    }
    else if(j_cells[6] == true)
    {
        $("#cell_j7").css("text-align", "left");
    }
    else if(j_cells[7] == true)
    {
        $("#cell_j8").css("text-align", "left");
    }
    else if(j_cells[8] == true)
    {
        $("#cell_j9").css("text-align", "left");
    }
    else if(j_cells[9] == true)
    {
        $("#cell_j10").css("text-align", "left");
    }
    else if(j_cells[10] == true)
    {
        $("#cell_j11").css("text-align", "left");
    }
    else if(j_cells[11] == true)
    {
        $("#cell_j12").css("text-align", "left");
    }
    else if(j_cells[12] == true)
    {
        $("#cell_j13").css("text-align", "left");
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        $("#cell_k1").css("text-align", "left");
    }
    else if(k_cells[1] == true)
    {
        $("#cell_k2").css("text-align", "left");
    }
    else if(k_cells[2] == true)
    {
        $("#cell_k3").css("text-align", "left");
    }
    else if(k_cells[3] == true)
    {
        $("#cell_k4").css("text-align", "left");
    }
    else if(k_cells[4] == true)
    {
        $("#cell_k5").css("text-align", "left");
    }
    else if(k_cells[5] == true)
    {
        $("#cell_k6").css("text-align", "left");
    }
    else if(k_cells[6] == true)
    {
        $("#cell_k7").css("text-align", "left");
    }
    else if(k_cells[7] == true)
    {
        $("#cell_k8").css("text-align", "left");
    }
    else if(k_cells[8] == true)
    {
        $("#cell_k9").css("text-align", "left");
    }
    else if(k_cells[9] == true)
    {
        $("#cell_k10").css("text-align", "left");
    }
    else if(k_cells[10] == true)
    {
        $("#cell_k11").css("text-align", "left");
    }
    else if(k_cells[11] == true)
    {
        $("#cell_k12").css("text-align", "left");
    }
    else if(k_cells[12] == true)
    {
        $("#cell_k13").css("text-align", "left");
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        $("#cell_l1").css("text-align", "left");
    }
    else if(l_cells[1] == true)
    {
        $("#cell_l2").css("text-align", "left");
    }
    else if(l_cells[2] == true)
    {
        $("#cell_l3").css("text-align", "left");
    }
    else if(l_cells[3] == true)
    {
        $("#cell_l4").css("text-align", "left");
    }
    else if(l_cells[4] == true)
    {
        $("#cell_l5").css("text-align", "left");
    }
    else if(l_cells[5] == true)
    {
        $("#cell_l6").css("text-align", "left");
    }
    else if(l_cells[6] == true)
    {
        $("#cell_l7").css("text-align", "left");
    }
    else if(l_cells[7] == true)
    {
        $("#cell_l8").css("text-align", "left");
    }
    else if(l_cells[8] == true)
    {
        $("#cell_l9").css("text-align", "left");
    }
    else if(l_cells[9] == true)
    {
        $("#cell_l10").css("text-align", "left");
    }
    else if(l_cells[10] == true)
    {
        $("#cell_l11").css("text-align", "left");
    }
    else if(l_cells[11] == true)
    {
        $("#cell_l12").css("text-align", "left");
    }
    else if(l_cells[12] == true)
    {
        $("#cell_l13").css("text-align", "left");
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        $("#cell_m1").css("text-align", "left");
    }
    else if(m_cells[1] == true)
    {
        $("#cell_m2").css("text-align", "left");
    }
    else if(m_cells[2] == true)
    {
        $("#cell_m3").css("text-align", "left");
    }
    else if(m_cells[3] == true)
    {
        $("#cell_m4").css("text-align", "left");
    }
    else if(m_cells[4] == true)
    {
        $("#cell_m5").css("text-align", "left");
    }
    else if(m_cells[5] == true)
    {
        $("#cell_m6").css("text-align", "left");
    }
    else if(m_cells[6] == true)
    {
        $("#cell_m7").css("text-align", "left");
    }
    else if(m_cells[7] == true)
    {
        $("#cell_m8").css("text-align", "left");
    }
    else if(m_cells[8] == true)
    {
        $("#cell_m9").css("text-align", "left");
    }
    else if(m_cells[9] == true)
    {
        $("#cell_m10").css("text-align", "left");
    }
    else if(m_cells[10] == true)
    {
        $("#cell_m11").css("text-align", "left");
    }
    else if(m_cells[11] == true)
    {
        $("#cell_m12").css("text-align", "left");
    }
    else if(m_cells[12] == true)
    {
        $("#cell_m13").css("text-align", "left");
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        $("#cell_n1").css("text-align", "left");
    }
    else if(n_cells[1] == true)
    {
        $("#cell_n2").css("text-align", "left");
    }
    else if(n_cells[2] == true)
    {
        $("#cell_n3").css("text-align", "left");
    }
    else if(n_cells[3] == true)
    {
        $("#cell_n4").css("text-align", "left");
    }
    else if(n_cells[4] == true)
    {
        $("#cell_n5").css("text-align", "left");
    }
    else if(n_cells[5] == true)
    {
        $("#cell_n6").css("text-align", "left");
    }
    else if(n_cells[6] == true)
    {
        $("#cell_n7").css("text-align", "left");
    }
    else if(n_cells[7] == true)
    {
        $("#cell_n8").css("text-align", "left");
    }
    else if(n_cells[8] == true)
    {
        $("#cell_n9").css("text-align", "left");
    }
    else if(n_cells[9] == true)
    {
        $("#cell_n10").css("text-align", "left");
    }
    else if(n_cells[10] == true)
    {
        $("#cell_n11").css("text-align", "left");
    }
    else if(n_cells[11] == true)
    {
        $("#cell_n12").css("text-align", "left");
    }
    else if(n_cells[12] == true)
    {
        $("#cell_n13").css("text-align", "left");
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        $("#cell_o1").css("text-align", "left");
    }
    else if(o_cells[1] == true)
    {
        $("#cell_o2").css("text-align", "left");
    }
    else if(o_cells[2] == true)
    {
        $("#cell_o3").css("text-align", "left");
    }
    else if(o_cells[3] == true)
    {
        $("#cell_o4").css("text-align", "left");
    }
    else if(o_cells[4] == true)
    {
        $("#cell_o5").css("text-align", "left");
    }
    else if(o_cells[5] == true)
    {
        $("#cell_o6").css("text-align", "left");
    }
    else if(o_cells[6] == true)
    {
        $("#cell_o7").css("text-align", "left");
    }
    else if(o_cells[7] == true)
    {
        $("#cell_o8").css("text-align", "left");
    }
    else if(o_cells[8] == true)
    {
        $("#cell_o9").css("text-align", "left");
    }
    else if(o_cells[9] == true)
    {
        $("#cell_o10").css("text-align", "left");
    }
    else if(o_cells[10] == true)
    {
        $("#cell_o11").css("text-align", "left");
    }
    else if(o_cells[11] == true)
    {
        $("#cell_o12").css("text-align", "left");
    }
    else if(o_cells[12] == true)
    {
        $("#cell_o13").css("text-align", "left");
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        $("#cell_p1").css("text-align", "left");
    }
    else if(p_cells[1] == true)
    {
        $("#cell_p2").css("text-align", "left");
    }
    else if(p_cells[2] == true)
    {
        $("#cell_p3").css("text-align", "left");
    }
    else if(p_cells[3] == true)
    {
        $("#cell_p3").css("text-align", "left");
    }
    else if(p_cells[4] == true)
    {
        $("#cell_p4").css("text-align", "left");
    }
    else if(p_cells[5] == true)
    {
        $("#cell_p5").css("text-align", "left");
    }
    else if(p_cells[6] == true)
    {
        $("#cell_p6").css("text-align", "left");
    }
    else if(p_cells[7] == true)
    {
        $("#cell_p7").css("text-align", "left");
    }
    else if(p_cells[8] == true)
    {
        $("#cell_p8").css("text-align", "left");
    }
    else if(p_cells[9] == true)
    {
        $("#cell_p10").css("text-align", "left");
    }
    else if(p_cells[10] == true)
    {
        $("#cell_p11").css("text-align", "left");
    }
    else if(p_cells[11] == true)
    {
        $("#cell_p12").css("text-align", "left");
    }
    else if(p_cells[12] == true)
    {
        $("#cell_p13").css("text-align", "left");
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        $("#cell_q1").css("text-align", "left");
    }
    else if(q_cells[1] == true)
    {
        $("#cell_q2").css("text-align", "left");
    }
    else if(q_cells[2] == true)
    {
        $("#cell_q3").css("text-align", "left");
    }
    else if(q_cells[3] == true)
    {
        $("#cell_q4").css("text-align", "left");
    }
    else if(q_cells[4] == true)
    {
        $("#cell_q5").css("text-align", "left");
    }
    else if(q_cells[5] == true)
    {
        $("#cell_q6").css("text-align", "left");
    }
    else if(q_cells[6] == true)
    {
        $("#cell_q7").css("text-align", "left");
    }
    else if(q_cells[7] == true)
    {
        $("#cell_q8").css("text-align", "left");
    }
    else if(q_cells[8] == true)
    {
        $("#cell_q9").css("text-align", "left");
    }
    else if(q_cells[9] == true)
    {
        $("#cell_q10").css("text-align", "left");
    }
    else if(q_cells[10] == true)
    {
        $("#cell_q11").css("text-align", "left");
    }
    else if(q_cells[11] == true)
    {
        $("#cell_q12").css("text-align", "left");
    }
    else if(q_cells[12] == true)
    {
        $("#cell_q13").css("text-align", "left");
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        $("#cell_r1").css("text-align", "left");
    }
    else if(r_cells[1] == true)
    {
        $("#cell_r2").css("text-align", "left");
    }
    else if(r_cells[2] == true)
    {
        $("#cell_r3").css("text-align", "left");
    }
    else if(r_cells[3] == true)
    {
        $("#cell_r4").css("text-align", "left");
    }
    else if(r_cells[4] == true)
    {
        $("#cell_r5").css("text-align", "left");
    }
    else if(r_cells[5] == true)
    {
        $("#cell_r6").css("text-align", "left");
    }
    else if(r_cells[6] == true)
    {
        $("#cell_r7").css("text-align", "left");
    }
    else if(r_cells[7] == true)
    {
        $("#cell_r8").css("text-align", "left");
    }
    else if(r_cells[8] == true)
    {
        $("#cell_r9").css("text-align", "left");
    }
    else if(r_cells[9] == true)
    {
        $("#cell_r10").css("text-align", "left");
    }
    else if(r_cells[10] == true)
    {
        $("#cell_r11").css("text-align", "left");
    }
    else if(r_cells[11] == true)
    {
        $("#cell_r12").css("text-align", "left");
    }
    else if(r_cells[12] == true)
    {
        $("#cell_r13").css("text-align", "left");
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        $("#cell_s1").css("text-align", "left");
    }
    else if(s_cells[1] == true)
    {
        $("#cell_s2").css("text-align", "left");
    }
    else if(s_cells[2] == true)
    {
        $("#cell_s3").css("text-align", "left");
    }
    else if(s_cells[3] == true)
    {
        $("#cell_s4").css("text-align", "left");
    }
    else if(s_cells[4] == true)
    {
        $("#cell_s5").css("text-align", "left");
    }
    else if(s_cells[5] == true)
    {
        $("#cell_s6").css("text-align", "left");
    }
    else if(s_cells[6] == true)
    {
        $("#cell_s7").css("text-align", "left");
    }
    else if(s_cells[7] == true)
    {
        $("#cell_s8").css("text-align", "left");
    }
    else if(s_cells[8] == true)
    {
        $("#cell_s9").css("text-align", "left");
    }
    else if(s_cells[9] == true)
    {
        $("#cell_s10").css("text-align", "left");
    }
    else if(s_cells[10] == true)
    {
        $("#cell_s11").css("text-align", "left");
    }
    else if(s_cells[11] == true)
    {
        $("#cell_s12").css("text-align", "left");
    }
    else if(s_cells[12] == true)
    {
        $("#cell_s13").css("text-align", "left");
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        $("#cell_t1").css("text-align", "left");
    }
    else if(t_cells[1] == true)
    {
        $("#cell_t2").css("text-align", "left");
    }
    else if(t_cells[2] == true)
    {
        $("#cell_t3").css("text-align", "left");
    }
    else if(t_cells[3] == true)
    {
        $("#cell_t4").css("text-align", "left");
    }
    else if(t_cells[4] == true)
    {
        $("#cell_t5").css("text-align", "left");
    }
    else if(t_cells[5] == true)
    {
        $("#cell_t6").css("text-align", "left");
    }
    else if(t_cells[6] == true)
    {
        $("#cell_t7").css("text-align", "left");
    }
    else if(t_cells[7] == true)
    {
        $("#cell_t8").css("text-align", "left");
    }
    else if(t_cells[8] == true)
    {
        $("#cell_t9").css("text-align", "left");
    }
    else if(t_cells[9] == true)
    {
        $("#cell_t10").css("text-align", "left");
    }
    else if(t_cells[10] == true)
    {
        $("#cell_t11").css("text-align", "left");
    }
    else if(t_cells[11] == true)
    {
        $("#cell_t12").css("text-align", "left");
    }
    else if(t_cells[12] == true)
    {
        $("#cell_t13").css("text-align", "left");
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        $("#cell_u1").css("text-align", "left");
    }
    else if(u_cells[1] == true)
    {
        $("#cell_u2").css("text-align", "left");
    }
    else if(u_cells[2] == true)
    {
        $("#cell_u3").css("text-align", "left");
    }
    else if(u_cells[3] == true)
    {
        $("#cell_u4").css("text-align", "left");
    }
    else if(u_cells[4] == true)
    {
        $("#cell_u5").css("text-align", "left");
    }
    else if(u_cells[5] == true)
    {
        $("#cell_u6").css("text-align", "left");
    }
    else if(u_cells[6] == true)
    {
        $("#cell_u7").css("text-align", "left");
    }
    else if(u_cells[7] == true)
    {
        $("#cell_u8").css("text-align", "left");
    }
    else if(u_cells[8] == true)
    {
        $("#cell_u9").css("text-align", "left");
    }
    else if(u_cells[9] == true)
    {
        $("#cell_u10").css("text-align", "left");
    }
    else if(u_cells[10] == true)
    {
        $("#cell_u11").css("text-align", "left");
    }
    else if(u_cells[11] == true)
    {
        $("#cell_u12").css("text-align", "left");
    }
    else if(u_cells[12] == true)
    {
        $("#cell_u13").css("text-align", "left");
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        $("#cell_v1").css("text-align", "left");
    }
    else if(v_cells[1] == true)
    {
        $("#cell_v2").css("text-align", "left");
    }
    else if(v_cells[2] == true)
    {
        $("#cell_v3").css("text-align", "left");
    }
    else if(v_cells[3] == true)
    {
        $("#cell_v4").css("text-align", "left");
    }
    else if(v_cells[4] == true)
    {
        $("#cell_v5").css("text-align", "left");
    }
    else if(v_cells[5] == true)
    {
        $("#cell_v6").css("text-align", "left");
    }
    else if(v_cells[6] == true)
    {
        $("#cell_v7").css("text-align", "left");
    }
    else if(v_cells[7] == true)
    {
        $("#cell_v8").css("text-align", "left");
    }
    else if(v_cells[8] == true)
    {
        $("#cell_v9").css("text-align", "left");
    }
    else if(v_cells[9] == true)
    {
        $("#cell_v10").css("text-align", "left");
    }
    else if(v_cells[10] == true)
    {
        $("#cell_v11").css("text-align", "left");
    }
    else if(v_cells[11] == true)
    {
        $("#cell_v12").css("text-align", "left");
    }
    else if(v_cells[12] == true)
    {
        $("#cell_v13").css("text-align", "left");
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        $("#cell_w1").css("text-align", "left");
    }
    else if(w_cells[1] == true)
    {
        $("#cell_w2").css("text-align", "left");
    }
    else if(w_cells[2] == true)
    {
        $("#cell_w3").css("text-align", "left");
    }
    else if(w_cells[3] == true)
    {
        $("#cell_w4").css("text-align", "left");
    }
    else if(w_cells[4] == true)
    {
        $("#cell_w5").css("text-align", "left");
    }
    else if(w_cells[5] == true)
    {
        $("#cell_w6").css("text-align", "left");
    }
    else if(w_cells[6] == true)
    {
        $("#cell_w7").css("text-align", "left");
    }
    else if(w_cells[7] == true)
    {
        $("#cell_w8").css("text-align", "left");
    }
    else if(w_cells[8] == true)
    {
        $("#cell_w9").css("text-align", "left");
    }
    else if(w_cells[9] == true)
    {
        $("#cell_w10").css("text-align", "left");
    }
    else if(w_cells[10] == true)
    {
        $("#cell_w11").css("text-align", "left");
    }
    else if(w_cells[11] == true)
    {
        $("#cell_w12").css("text-align", "left");
    }
    else if(w_cells[12] == true)
    {
        $("#cell_w13").css("text-align", "left");
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        $("#cell_x1").css("text-align", "left");
    }
    else if(x_cells[1] == true)
    {
        $("#cell_x2").css("text-align", "left");
    }
    else if(x_cells[2] == true)
    {
        $("#cell_x3").css("text-align", "left");
    }
    else if(x_cells[3] == true)
    {
        $("#cell_x4").css("text-align", "left");
    }
    else if(x_cells[4] == true)
    {
        $("#cell_x5").css("text-align", "left");
    }
    else if(x_cells[5] == true)
    {
        $("#cell_x6").css("text-align", "left");
    }
    else if(x_cells[6] == true)
    {
        $("#cell_x7").css("text-align", "left");
    }
    else if(x_cells[7] == true)
    {
        $("#cell_x8").css("text-align", "left");
    }
    else if(x_cells[8] == true)
    {
        $("#cell_x9").css("text-align", "left");
    }
    else if(x_cells[9] == true)
    {
        $("#cell_x10").css("text-align", "left");
    }
    else if(x_cells[10] == true)
    {
        $("#cell_x11").css("text-align", "left");
    }
    else if(x_cells[11] == true)
    {
        $("#cell_x12").css("text-align", "left");
    }
    else if(x_cells[12] == true)
    {
        $("#cell_x13").css("text-align", "left");
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        $("#cell_y1").css("text-align", "left");
    }
    else if(y_cells[1] == true)
    {
        $("#cell_y2").css("text-align", "left");
    }
    else if(y_cells[2] == true)
    {
        $("#cell_y3").css("text-align", "left");
    }
    else if(y_cells[3] == true)
    {
        $("#cell_y4").css("text-align", "left");
    }
    else if(y_cells[4] == true)
    {
        $("#cell_y5").css("text-align", "left");
    }
    else if(y_cells[5] == true)
    {
        $("#cell_y6").css("text-align", "left");
    }
    else if(y_cells[6] == true)
    {
        $("#cell_y7").css("text-align", "left");
    }
    else if(y_cells[7] == true)
    {
        $("#cell_y8").css("text-align", "left");
    }
    else if(y_cells[8] == true)
    {
        $("#cell_y9").css("text-align", "left");
    }
    else if(y_cells[9] == true)
    {
        $("#cell_y10").css("text-align", "left");
    }
    else if(y_cells[10] == true)
    {
        $("#cell_y11").css("text-align", "left");
    }
    else if(y_cells[11] == true)
    {
        $("#cell_y12").css("text-align", "left");
    }
    else if(y_cells[12] == true)
    {
        $("#cell_y13").css("text-align", "left");
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        $("#cell_z1").css("text-align", "left");
    }
    else if(z_cells[1] == true)
    {
        $("#cell_z2").css("text-align", "left");
    }
    else if(z_cells[2] == true)
    {
        $("#cell_z3").css("text-align", "left");
    }
    else if(z_cells[3] == true)
    {
        $("#cell_z4").css("text-align", "left");
    }
    else if(z_cells[4] == true)
    {
        $("#cell_z5").css("text-align", "left");
    }
    else if(z_cells[5] == true)
    {
        $("#cell_z6").css("text-align", "left");
    }
    else if(z_cells[6] == true)
    {
        $("#cell_z7").css("text-align", "left");
    }
    else if(z_cells[7] == true)
    {
        $("#cell_z8").css("text-align", "left");
    }
    else if(z_cells[8] == true)
    {
        $("#cell_z9").css("text-align", "left");
    }
    else if(z_cells[9] == true)
    {
        $("#cell_z10").css("text-align", "left");
    }
    else if(z_cells[10] == true)
    {
        $("#cell_z11").css("text-align", "left");
    }
    else if(z_cells[11] == true)
    {
        $("#cell_z12").css("text-align", "left");
    }
    else if(z_cells[12] == true)
    {
        $("#cell_z13").css("text-align", "left");
    }
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#uppercase_function").hover(function(){
  $(".function_description").text("Transforms all lowercase characters in the cell into uppercase characters.");
  }, function(){
  $(".function_description").text("");
});

/*if the user clicks on the uppercase function's button*/
function cell_uppercase()
{
    //A column cells
    if(a_cells[0] == true)
    {
        $("#cell_a1").css("text-transform", "uppercase");
    }
    else if(a_cells[1] == true)
    {
        $("#cell_a2").css("text-transform", "uppercase");
    }
    else if(a_cells[2] == true)
    {
        $("#cell_a3").css("text-transform", "uppercase");
    }
    else if(a_cells[3] == true)
    {
        $("#cell_a4").css("text-transform", "uppercase");
    }
    else if(a_cells[4] == true)
    {
        $("#cell_a5").css("text-transform", "uppercase");
    }
    else if(a_cells[5] == true)
    {
        $("#cell_a6").css("text-transform", "uppercase");
    }
    else if(a_cells[6] == true)
    {
        $("#cell_a7").css("text-transform", "uppercase");
    }
    else if(a_cells[7] == true)
    {
        $("#cell_a8").css("text-transform", "uppercase");
    }
    else if(a_cells[8] == true)
    {
        $("#cell_a9").css("text-transform", "uppercase");
    }
    else if(a_cells[9] == true)
    {
        $("#cell_a10").css("text-transform", "uppercase");
    }
    else if(a_cells[10] == true)
    {
        $("#cell_a11").css("text-transform", "uppercase");
    }
    else if(a_cells[11] == true)
    {
        $("#cell_a12").css("text-transform", "uppercase");
    }
    else if(a_cells[12] == true)
    {
        $("#cell_a13").css("text-transform", "uppercase");
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        $("#cell_b1").css("text-transform", "uppercase");
    }
    else if(b_cells[1] == true)
    {
        $("#cell_b2").css("text-transform", "uppercase");
    }
    else if(b_cells[2] == true)
    {
        $("#cell_b3").css("text-transform", "uppercase");
    }
    else if(b_cells[3] == true)
    {
        $("#cell_b4").css("text-transform", "uppercase");
    }
    else if(b_cells[4] == true)
    {
        $("#cell_b5").css("text-transform", "uppercase");
    }
    else if(b_cells[5] == true)
    {
        $("#cell_b6").css("text-transform", "uppercase");
    }
    else if(b_cells[6] == true)
    {
        $("#cell_b7").css("text-transform", "uppercase");
    }
    else if(b_cells[7] == true)
    {
        $("#cell_b8").css("text-transform", "uppercase");
    }
    else if(b_cells[8] == true)
    {
        $("#cell_b9").css("text-transform", "uppercase");
    }
    else if(b_cells[9] == true)
    {
        $("#cell_b10").css("text-transform", "uppercase");
    }
    else if(b_cells[10] == true)
    {
        $("#cell_b11").css("text-transform", "uppercase");
    }
    else if(b_cells[11] == true)
    {
        $("#cell_b12").css("text-transform", "uppercase");
    }
    else if(b_cells[12] == true)
    {
        $("#cell_b13").css("text-transform", "uppercase");
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        $("#cell_c1").css("text-transform", "uppercase");
    }
    else if(c_cells[1] == true)
    {
        $("#cell_c2").css("text-transform", "uppercase");
    }
    else if(c_cells[2] == true)
    {
        $("#cell_c3").css("text-transform", "uppercase");
    }
    else if(c_cells[3] == true)
    {
        $("#cell_c4").css("text-transform", "uppercase");
    }
    else if(c_cells[4] == true)
    {
        $("#cell_c5").css("text-transform", "uppercase");
    }
    else if(c_cells[5] == true)
    {
        $("#cell_c6").css("text-transform", "uppercase");
    }
    else if(c_cells[6] == true)
    {
        $("#cell_c7").css("text-transform", "uppercase");
    }
    else if(c_cells[7] == true)
    {
        $("#cell_c8").css("text-transform", "uppercase");
    }
    else if(c_cells[8] == true)
    {
        $("#cell_c9").css("text-transform", "uppercase");
    }
    else if(c_cells[9] == true)
    {
        $("#cell_c10").css("text-transform", "uppercase");
    }
    else if(c_cells[10] == true)
    {
        $("#cell_c11").css("text-transform", "uppercase");
    }
    else if(c_cells[11] == true)
    {
        $("#cell_c12").css("text-transform", "uppercase");
    }
    else if(c_cells[12] == true)
    {
        $("#cell_c13").css("text-transform", "uppercase");
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        $("#cell_d1").css("text-transform", "uppercase");
    }
    else if(d_cells[1] == true)
    {
        $("#cell_d2").css("text-transform", "uppercase");
    }
    else if(d_cells[2] == true)
    {
        $("#cell_d3").css("text-transform", "uppercase");
    }
    else if(d_cells[3] == true)
    {
        $("#cell_d4").css("text-transform", "uppercase");
    }
    else if(d_cells[4] == true)
    {
        $("#cell_d5").css("text-transform", "uppercase");
    }
    else if(d_cells[5] == true)
    {
        $("#cell_d6").css("text-transform", "uppercase");
    }
    else if(d_cells[6] == true)
    {
        $("#cell_d7").css("text-transform", "uppercase");
    }
    else if(d_cells[7] == true)
    {
        $("#cell_d8").css("text-transform", "uppercase");
    }
    else if(d_cells[8] == true)
    {
        $("#cell_d9").css("text-transform", "uppercase");
    }
    else if(d_cells[9] == true)
    {
        $("#cell_d10").css("text-transform", "uppercase");
    }
    else if(d_cells[10] == true)
    {
        $("#cell_d11").css("text-transform", "uppercase");
    }
    else if(d_cells[11] == true)
    {
        $("#cell_d12").css("text-transform", "uppercase");
    }
    else if(d_cells[12] == true)
    {
        $("#cell_d13").css("text-transform", "uppercase");
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        $("#cell_e1").css("text-transform", "uppercase");
    }
    else if(e_cells[1] == true)
    {
        $("#cell_e2").css("text-transform", "uppercase");
    }
    else if(e_cells[2] == true)
    {
        $("#cell_e3").css("text-transform", "uppercase");
    }
    else if(e_cells[3] == true)
    {
        $("#cell_e4").css("text-transform", "uppercase");
    }
    else if(e_cells[4] == true)
    {
        $("#cell_e5").css("text-transform", "uppercase");
    }
    else if(e_cells[5] == true)
    {
        $("#cell_e6").css("text-transform", "uppercase");
    }
    else if(e_cells[6] == true)
    {
        $("#cell_e7").css("text-transform", "uppercase");
    }
    else if(e_cells[7] == true)
    {
        $("#cell_e8").css("text-transform", "uppercase");
    }
    else if(e_cells[8] == true)
    {
        $("#cell_e9").css("text-transform", "uppercase");
    }
    else if(e_cells[9] == true)
    {
        $("#cell_e10").css("text-transform", "uppercase");
    }
    else if(e_cells[10] == true)
    {
        $("#cell_e11").css("text-transform", "uppercase");
    }
    else if(e_cells[11] == true)
    {
        $("#cell_e12").css("text-transform", "uppercase");
    }
    else if(e_cells[12] == true)
    {
        $("#cell_e13").css("text-transform", "uppercase");
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        $("#cell_f1").css("text-transform", "uppercase");
    }
    else if(f_cells[1] == true)
    {
        $("#cell_f2").css("text-transform", "uppercase");
    }
    else if(f_cells[2] == true)
    {
        $("#cell_f3").css("text-transform", "uppercase");
    }
    else if(f_cells[3] == true)
    {
        $("#cell_f4").css("text-transform", "uppercase");
    }
    else if(f_cells[4] == true)
    {
        $("#cell_f5").css("text-transform", "uppercase");
    }
    else if(f_cells[5] == true)
    {
        $("#cell_f6").css("text-transform", "uppercase");
    }
    else if(f_cells[6] == true)
    {
        $("#cell_f7").css("text-transform", "uppercase");
    }
    else if(f_cells[7] == true)
    {
        $("#cell_f8").css("text-transform", "uppercase");
    }
    else if(f_cells[8] == true)
    {
        $("#cell_f9").css("text-transform", "uppercase");
    }
    else if(f_cells[9] == true)
    {
        $("#cell_f10").css("text-transform", "uppercase");
    }
    else if(f_cells[10] == true)
    {
        $("#cell_f11").css("text-transform", "uppercase");
    }
    else if(f_cells[11] == true)
    {
        $("#cell_f12").css("text-transform", "uppercase");
    }
    else if(f_cells[12] == true)
    {
        $("#cell_f13").css("text-transform", "uppercase");
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        $("#cell_g1").css("text-transform", "uppercase");
    }
    else if(g_cells[1] == true)
    {
        $("#cell_g2").css("text-transform", "uppercase");
    }
    else if(g_cells[2] == true)
    {
        $("#cell_g3").css("text-transform", "uppercase");
    }
    else if(g_cells[3] == true)
    {
        $("#cell_g4").css("text-transform", "uppercase");
    }
    else if(g_cells[4] == true)
    {
        $("#cell_g5").css("text-transform", "uppercase");
    }
    else if(g_cells[5] == true)
    {
        $("#cell_g6").css("text-transform", "uppercase");
    }
    else if(g_cells[6] == true)
    {
        $("#cell_g7").css("text-transform", "uppercase");
    }
    else if(g_cells[7] == true)
    {
        $("#cell_g8").css("text-transform", "uppercase");
    }
    else if(g_cells[8] == true)
    {
        $("#cell_g9").css("text-transform", "uppercase");
    }
    else if(g_cells[9] == true)
    {
        $("#cell_g10").css("text-transform", "uppercase");
    }
    else if(g_cells[10] == true)
    {
        $("#cell_g11").css("text-transform", "uppercase");
    }
    else if(g_cells[11] == true)
    {
        $("#cell_g12").css("text-transform", "uppercase");
    }
    else if(g_cells[12] == true)
    {
        $("#cell_g13").css("text-transform", "uppercase");
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        $("#cell_h1").css("text-transform", "uppercase");
    }
    else if(h_cells[1] == true)
    {
        $("#cell_h2").css("text-transform", "uppercase");
    }
    else if(h_cells[2] == true)
    {
        $("#cell_h3").css("text-transform", "uppercase");
    }
    else if(h_cells[3] == true)
    {
        $("#cell_h4").css("text-transform", "uppercase");
    }
    else if(h_cells[4] == true)
    {
        $("#cell_h5").css("text-transform", "uppercase");
    }
    else if(h_cells[5] == true)
    {
        $("#cell_h6").css("text-transform", "uppercase");
    }
    else if(h_cells[6] == true)
    {
        $("#cell_h7").css("text-transform", "uppercase");
    }
    else if(h_cells[7] == true)
    {
        $("#cell_h8").css("text-transform", "uppercase");
    }
    else if(h_cells[8] == true)
    {
        $("#cell_h9").css("text-transform", "uppercase");
    }
    else if(h_cells[9] == true)
    {
        $("#cell_h10").css("text-transform", "uppercase");
    }
    else if(h_cells[10] == true)
    {
        $("#cell_h11").css("text-transform", "uppercase");
    }
    else if(h_cells[11] == true)
    {
        $("#cell_h12").css("text-transform", "uppercase");
    }
    else if(h_cells[12] == true)
    {
        $("#cell_h13").css("text-transform", "uppercase");
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        $("#cell_i1").css("text-transform", "uppercase");
    }
    else if(i_cells[1] == true)
    {
        $("#cell_i2").css("text-transform", "uppercase");
    }
    else if(i_cells[2] == true)
    {
        $("#cell_i3").css("text-transform", "uppercase");
    }
    else if(i_cells[3] == true)
    {
        $("#cell_i4").css("text-transform", "uppercase");
    }
    else if(i_cells[4] == true)
    {
        $("#cell_i5").css("text-transform", "uppercase");
    }
    else if(i_cells[5] == true)
    {
        $("#cell_i6").css("text-transform", "uppercase");
    }
    else if(i_cells[6] == true)
    {
        $("#cell_i7").css("text-transform", "uppercase");
    }
    else if(i_cells[7] == true)
    {
        $("#cell_i8").css("text-transform", "uppercase");
    }
    else if(i_cells[8] == true)
    {
        $("#cell_i9").css("text-transform", "uppercase");
    }
    else if(i_cells[9] == true)
    {
        $("#cell_i10").css("text-transform", "uppercase");
    }
    else if(i_cells[10] == true)
    {
        $("#cell_i11").css("text-transform", "uppercase");
    }
    else if(i_cells[11] == true)
    {
        $("#cell_i12").css("text-transform", "uppercase");
    }
    else if(i_cells[12] == true)
    {
        $("#cell_i13").css("text-transform", "uppercase");
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        $("#cell_j1").css("text-transform", "uppercase");
    }
    else if(j_cells[1] == true)
    {
        $("#cell_j2").css("text-transform", "uppercase");
    }
    else if(j_cells[2] == true)
    {
        $("#cell_j3").css("text-transform", "uppercase");
    }
    else if(j_cells[3] == true)
    {
        $("#cell_j4").css("text-transform", "uppercase");
    }
    else if(j_cells[4] == true)
    {
        $("#cell_j5").css("text-transform", "uppercase");
    }
    else if(j_cells[5] == true)
    {
        $("#cell_j6").css("text-transform", "uppercase");
    }
    else if(j_cells[6] == true)
    {
        $("#cell_j7").css("text-transform", "uppercase");
    }
    else if(j_cells[7] == true)
    {
        $("#cell_j8").css("text-transform", "uppercase");
    }
    else if(j_cells[8] == true)
    {
        $("#cell_j9").css("text-transform", "uppercase");
    }
    else if(j_cells[9] == true)
    {
        $("#cell_j10").css("text-transform", "uppercase");
    }
    else if(j_cells[10] == true)
    {
        $("#cell_j11").css("text-transform", "uppercase");
    }
    else if(j_cells[11] == true)
    {
        $("#cell_j12").css("text-transform", "uppercase");
    }
    else if(j_cells[12] == true)
    {
        $("#cell_j13").css("text-transform", "uppercase");
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        $("#cell_k1").css("text-transform", "uppercase");
    }
    else if(k_cells[1] == true)
    {
        $("#cell_k2").css("text-transform", "uppercase");
    }
    else if(k_cells[2] == true)
    {
        $("#cell_k3").css("text-transform", "uppercase");
    }
    else if(k_cells[3] == true)
    {
        $("#cell_k4").css("text-transform", "uppercase");
    }
    else if(k_cells[4] == true)
    {
        $("#cell_k5").css("text-transform", "uppercase");
    }
    else if(k_cells[5] == true)
    {
        $("#cell_k6").css("text-transform", "uppercase");
    }
    else if(k_cells[6] == true)
    {
        $("#cell_k7").css("text-transform", "uppercase");
    }
    else if(k_cells[7] == true)
    {
        $("#cell_k8").css("text-transform", "uppercase");
    }
    else if(k_cells[8] == true)
    {
        $("#cell_k9").css("text-transform", "uppercase");
    }
    else if(k_cells[9] == true)
    {
        $("#cell_k10").css("text-transform", "uppercase");
    }
    else if(k_cells[10] == true)
    {
        $("#cell_k11").css("text-transform", "uppercase");
    }
    else if(k_cells[11] == true)
    {
        $("#cell_k12").css("text-transform", "uppercase");
    }
    else if(k_cells[12] == true)
    {
        $("#cell_k13").css("text-transform", "uppercase");
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        $("#cell_l1").css("text-transform", "uppercase");
    }
    else if(l_cells[1] == true)
    {
        $("#cell_l2").css("text-transform", "uppercase");
    }
    else if(l_cells[2] == true)
    {
        $("#cell_l3").css("text-transform", "uppercase");
    }
    else if(l_cells[3] == true)
    {
        $("#cell_l4").css("text-transform", "uppercase");
    }
    else if(l_cells[4] == true)
    {
        $("#cell_l5").css("text-transform", "uppercase");
    }
    else if(l_cells[5] == true)
    {
        $("#cell_l6").css("text-transform", "uppercase");
    }
    else if(l_cells[6] == true)
    {
        $("#cell_l7").css("text-transform", "uppercase");
    }
    else if(l_cells[7] == true)
    {
        $("#cell_l8").css("text-transform", "uppercase");
    }
    else if(l_cells[8] == true)
    {
        $("#cell_l9").css("text-transform", "uppercase");
    }
    else if(l_cells[9] == true)
    {
        $("#cell_l10").css("text-transform", "uppercase");
    }
    else if(l_cells[10] == true)
    {
        $("#cell_l11").css("text-transform", "uppercase");
    }
    else if(l_cells[11] == true)
    {
        $("#cell_l12").css("text-transform", "uppercase");
    }
    else if(l_cells[12] == true)
    {
        $("#cell_l13").css("text-transform", "uppercase");
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        $("#cell_m1").css("text-transform", "uppercase");
    }
    else if(m_cells[1] == true)
    {
        $("#cell_m2").css("text-transform", "uppercase");
    }
    else if(m_cells[2] == true)
    {
        $("#cell_m3").css("text-transform", "uppercase");
    }
    else if(m_cells[3] == true)
    {
        $("#cell_m4").css("text-transform", "uppercase");
    }
    else if(m_cells[4] == true)
    {
        $("#cell_m5").css("text-transform", "uppercase");
    }
    else if(m_cells[5] == true)
    {
        $("#cell_m6").css("text-transform", "uppercase");
    }
    else if(m_cells[6] == true)
    {
        $("#cell_m7").css("text-transform", "uppercase");
    }
    else if(m_cells[7] == true)
    {
        $("#cell_m8").css("text-transform", "uppercase");
    }
    else if(m_cells[8] == true)
    {
        $("#cell_m9").css("text-transform", "uppercase");
    }
    else if(m_cells[9] == true)
    {
        $("#cell_m10").css("text-transform", "uppercase");
    }
    else if(m_cells[10] == true)
    {
        $("#cell_m11").css("text-transform", "uppercase");
    }
    else if(m_cells[11] == true)
    {
        $("#cell_m12").css("text-transform", "uppercase");
    }
    else if(m_cells[12] == true)
    {
        $("#cell_m13").css("text-transform", "uppercase");
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        $("#cell_n1").css("text-transform", "uppercase");
    }
    else if(n_cells[1] == true)
    {
        $("#cell_n2").css("text-transform", "uppercase");
    }
    else if(n_cells[2] == true)
    {
        $("#cell_n3").css("text-transform", "uppercase");
    }
    else if(n_cells[3] == true)
    {
        $("#cell_n4").css("text-transform", "uppercase");
    }
    else if(n_cells[4] == true)
    {
        $("#cell_n5").css("text-transform", "uppercase");
    }
    else if(n_cells[5] == true)
    {
        $("#cell_n6").css("text-transform", "uppercase");
    }
    else if(n_cells[6] == true)
    {
        $("#cell_n7").css("text-transform", "uppercase");
    }
    else if(n_cells[7] == true)
    {
        $("#cell_n8").css("text-transform", "uppercase");
    }
    else if(n_cells[8] == true)
    {
        $("#cell_n9").css("text-transform", "uppercase");
    }
    else if(n_cells[9] == true)
    {
        $("#cell_n10").css("text-transform", "uppercase");
    }
    else if(n_cells[10] == true)
    {
        $("#cell_n11").css("text-transform", "uppercase");
    }
    else if(n_cells[11] == true)
    {
        $("#cell_n12").css("text-transform", "uppercase");
    }
    else if(n_cells[12] == true)
    {
        $("#cell_n13").css("text-transform", "uppercase");
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        $("#cell_o1").css("text-transform", "uppercase");
    }
    else if(o_cells[1] == true)
    {
        $("#cell_o2").css("text-transform", "uppercase");
    }
    else if(o_cells[2] == true)
    {
        $("#cell_o3").css("text-transform", "uppercase");
    }
    else if(o_cells[3] == true)
    {
        $("#cell_o4").css("text-transform", "uppercase");
    }
    else if(o_cells[4] == true)
    {
        $("#cell_o5").css("text-transform", "uppercase");
    }
    else if(o_cells[5] == true)
    {
        $("#cell_o6").css("text-transform", "uppercase");
    }
    else if(o_cells[6] == true)
    {
        $("#cell_o7").css("text-transform", "uppercase");
    }
    else if(o_cells[7] == true)
    {
        $("#cell_o8").css("text-transform", "uppercase");
    }
    else if(o_cells[8] == true)
    {
        $("#cell_o9").css("text-transform", "uppercase");
    }
    else if(o_cells[9] == true)
    {
        $("#cell_o10").css("text-transform", "uppercase");
    }
    else if(o_cells[10] == true)
    {
        $("#cell_o11").css("text-transform", "uppercase");
    }
    else if(o_cells[11] == true)
    {
        $("#cell_o12").css("text-transform", "uppercase");
    }
    else if(o_cells[12] == true)
    {
        $("#cell_o13").css("text-transform", "uppercase");
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        $("#cell_p1").css("text-transform", "uppercase");
    }
    else if(p_cells[1] == true)
    {
        $("#cell_p2").css("text-transform", "uppercase");
    }
    else if(p_cells[2] == true)
    {
        $("#cell_p3").css("text-transform", "uppercase");
    }
    else if(p_cells[3] == true)
    {
        $("#cell_p3").css("text-transform", "uppercase");
    }
    else if(p_cells[4] == true)
    {
        $("#cell_p4").css("text-transform", "uppercase");
    }
    else if(p_cells[5] == true)
    {
        $("#cell_p5").css("text-transform", "uppercase");
    }
    else if(p_cells[6] == true)
    {
        $("#cell_p6").css("text-transform", "uppercase");
    }
    else if(p_cells[7] == true)
    {
        $("#cell_p7").css("text-transform", "uppercase");
    }
    else if(p_cells[8] == true)
    {
        $("#cell_p8").css("text-transform", "uppercase");
    }
    else if(p_cells[9] == true)
    {
        $("#cell_p10").css("text-transform", "uppercase");
    }
    else if(p_cells[10] == true)
    {
        $("#cell_p11").css("text-transform", "uppercase");
    }
    else if(p_cells[11] == true)
    {
        $("#cell_p12").css("text-transform", "uppercase");
    }
    else if(p_cells[12] == true)
    {
        $("#cell_p13").css("text-transform", "uppercase");
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        $("#cell_q1").css("text-transform", "uppercase");
    }
    else if(q_cells[1] == true)
    {
        $("#cell_q2").css("text-transform", "uppercase");
    }
    else if(q_cells[2] == true)
    {
        $("#cell_q3").css("text-transform", "uppercase");
    }
    else if(q_cells[3] == true)
    {
        $("#cell_q4").css("text-transform", "uppercase");
    }
    else if(q_cells[4] == true)
    {
        $("#cell_q5").css("text-transform", "uppercase");
    }
    else if(q_cells[5] == true)
    {
        $("#cell_q6").css("text-transform", "uppercase");
    }
    else if(q_cells[6] == true)
    {
        $("#cell_q7").css("text-transform", "uppercase");
    }
    else if(q_cells[7] == true)
    {
        $("#cell_q8").css("text-transform", "uppercase");
    }
    else if(q_cells[8] == true)
    {
        $("#cell_q9").css("text-transform", "uppercase");
    }
    else if(q_cells[9] == true)
    {
        $("#cell_q10").css("text-transform", "uppercase");
    }
    else if(q_cells[10] == true)
    {
        $("#cell_q11").css("text-transform", "uppercase");
    }
    else if(q_cells[11] == true)
    {
        $("#cell_q12").css("text-transform", "uppercase");
    }
    else if(q_cells[12] == true)
    {
        $("#cell_q13").css("text-transform", "uppercase");
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        $("#cell_r1").css("text-transform", "uppercase");
    }
    else if(r_cells[1] == true)
    {
        $("#cell_r2").css("text-transform", "uppercase");
    }
    else if(r_cells[2] == true)
    {
        $("#cell_r3").css("text-transform", "uppercase");
    }
    else if(r_cells[3] == true)
    {
        $("#cell_r4").css("text-transform", "uppercase");
    }
    else if(r_cells[4] == true)
    {
        $("#cell_r5").css("text-transform", "uppercase");
    }
    else if(r_cells[5] == true)
    {
        $("#cell_r6").css("text-transform", "uppercase");
    }
    else if(r_cells[6] == true)
    {
        $("#cell_r7").css("text-transform", "uppercase");
    }
    else if(r_cells[7] == true)
    {
        $("#cell_r8").css("text-transform", "uppercase");
    }
    else if(r_cells[8] == true)
    {
        $("#cell_r9").css("text-transform", "uppercase");
    }
    else if(r_cells[9] == true)
    {
        $("#cell_r10").css("text-transform", "uppercase");
    }
    else if(r_cells[10] == true)
    {
        $("#cell_r11").css("text-transform", "uppercase");
    }
    else if(r_cells[11] == true)
    {
        $("#cell_r12").css("text-transform", "uppercase");
    }
    else if(r_cells[12] == true)
    {
        $("#cell_r13").css("text-transform", "uppercase");
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        $("#cell_s1").css("text-transform", "uppercase");
    }
    else if(s_cells[1] == true)
    {
        $("#cell_s2").css("text-transform", "uppercase");
    }
    else if(s_cells[2] == true)
    {
        $("#cell_s3").css("text-transform", "uppercase");
    }
    else if(s_cells[3] == true)
    {
        $("#cell_s4").css("text-transform", "uppercase");
    }
    else if(s_cells[4] == true)
    {
        $("#cell_s5").css("text-transform", "uppercase");
    }
    else if(s_cells[5] == true)
    {
        $("#cell_s6").css("text-transform", "uppercase");
    }
    else if(s_cells[6] == true)
    {
        $("#cell_s7").css("text-transform", "uppercase");
    }
    else if(s_cells[7] == true)
    {
        $("#cell_s8").css("text-transform", "uppercase");
    }
    else if(s_cells[8] == true)
    {
        $("#cell_s9").css("text-transform", "uppercase");
    }
    else if(s_cells[9] == true)
    {
        $("#cell_s10").css("text-transform", "uppercase");
    }
    else if(s_cells[10] == true)
    {
        $("#cell_s11").css("text-transform", "uppercase");
    }
    else if(s_cells[11] == true)
    {
        $("#cell_s12").css("text-transform", "uppercase");
    }
    else if(s_cells[12] == true)
    {
        $("#cell_s13").css("text-transform", "uppercase");
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        $("#cell_t1").css("text-transform", "uppercase");
    }
    else if(t_cells[1] == true)
    {
        $("#cell_t2").css("text-transform", "uppercase");
    }
    else if(t_cells[2] == true)
    {
        $("#cell_t3").css("text-transform", "uppercase");
    }
    else if(t_cells[3] == true)
    {
        $("#cell_t4").css("text-transform", "uppercase");
    }
    else if(t_cells[4] == true)
    {
        $("#cell_t5").css("text-transform", "uppercase");
    }
    else if(t_cells[5] == true)
    {
        $("#cell_t6").css("text-transform", "uppercase");
    }
    else if(t_cells[6] == true)
    {
        $("#cell_t7").css("text-transform", "uppercase");
    }
    else if(t_cells[7] == true)
    {
        $("#cell_t8").css("text-transform", "uppercase");
    }
    else if(t_cells[8] == true)
    {
        $("#cell_t9").css("text-transform", "uppercase");
    }
    else if(t_cells[9] == true)
    {
        $("#cell_t10").css("text-transform", "uppercase");
    }
    else if(t_cells[10] == true)
    {
        $("#cell_t11").css("text-transform", "uppercase");
    }
    else if(t_cells[11] == true)
    {
        $("#cell_t12").css("text-transform", "uppercase");
    }
    else if(t_cells[12] == true)
    {
        $("#cell_t13").css("text-transform", "uppercase");
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        $("#cell_u1").css("text-transform", "uppercase");
    }
    else if(u_cells[1] == true)
    {
        $("#cell_u2").css("text-transform", "uppercase");
    }
    else if(u_cells[2] == true)
    {
        $("#cell_u3").css("text-transform", "uppercase");
    }
    else if(u_cells[3] == true)
    {
        $("#cell_u4").css("text-transform", "uppercase");
    }
    else if(u_cells[4] == true)
    {
        $("#cell_u5").css("text-transform", "uppercase");
    }
    else if(u_cells[5] == true)
    {
        $("#cell_u6").css("text-transform", "uppercase");
    }
    else if(u_cells[6] == true)
    {
        $("#cell_u7").css("text-transform", "uppercase");
    }
    else if(u_cells[7] == true)
    {
        $("#cell_u8").css("text-transform", "uppercase");
    }
    else if(u_cells[8] == true)
    {
        $("#cell_u9").css("text-transform", "uppercase");
    }
    else if(u_cells[9] == true)
    {
        $("#cell_u10").css("text-transform", "uppercase");
    }
    else if(u_cells[10] == true)
    {
        $("#cell_u11").css("text-transform", "uppercase");
    }
    else if(u_cells[11] == true)
    {
        $("#cell_u12").css("text-transform", "uppercase");
    }
    else if(u_cells[12] == true)
    {
        $("#cell_u13").css("text-transform", "uppercase");
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        $("#cell_v1").css("text-transform", "uppercase");
    }
    else if(v_cells[1] == true)
    {
        $("#cell_v2").css("text-transform", "uppercase");
    }
    else if(v_cells[2] == true)
    {
        $("#cell_v3").css("text-transform", "uppercase");
    }
    else if(v_cells[3] == true)
    {
        $("#cell_v4").css("text-transform", "uppercase");
    }
    else if(v_cells[4] == true)
    {
        $("#cell_v5").css("text-transform", "uppercase");
    }
    else if(v_cells[5] == true)
    {
        $("#cell_v6").css("text-transform", "uppercase");
    }
    else if(v_cells[6] == true)
    {
        $("#cell_v7").css("text-transform", "uppercase");
    }
    else if(v_cells[7] == true)
    {
        $("#cell_v8").css("text-transform", "uppercase");
    }
    else if(v_cells[8] == true)
    {
        $("#cell_v9").css("text-transform", "uppercase");
    }
    else if(v_cells[9] == true)
    {
        $("#cell_v10").css("text-transform", "uppercase");
    }
    else if(v_cells[10] == true)
    {
        $("#cell_v11").css("text-transform", "uppercase");
    }
    else if(v_cells[11] == true)
    {
        $("#cell_v12").css("text-transform", "uppercase");
    }
    else if(v_cells[12] == true)
    {
        $("#cell_v13").css("text-transform", "uppercase");
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        $("#cell_w1").css("text-transform", "uppercase");
    }
    else if(w_cells[1] == true)
    {
        $("#cell_w2").css("text-transform", "uppercase");
    }
    else if(w_cells[2] == true)
    {
        $("#cell_w3").css("text-transform", "uppercase");
    }
    else if(w_cells[3] == true)
    {
        $("#cell_w4").css("text-transform", "uppercase");
    }
    else if(w_cells[4] == true)
    {
        $("#cell_w5").css("text-transform", "uppercase");
    }
    else if(w_cells[5] == true)
    {
        $("#cell_w6").css("text-transform", "uppercase");
    }
    else if(w_cells[6] == true)
    {
        $("#cell_w7").css("text-transform", "uppercase");
    }
    else if(w_cells[7] == true)
    {
        $("#cell_w8").css("text-transform", "uppercase");
    }
    else if(w_cells[8] == true)
    {
        $("#cell_w9").css("text-transform", "uppercase");
    }
    else if(w_cells[9] == true)
    {
        $("#cell_w10").css("text-transform", "uppercase");
    }
    else if(w_cells[10] == true)
    {
        $("#cell_w11").css("text-transform", "uppercase");
    }
    else if(w_cells[11] == true)
    {
        $("#cell_w12").css("text-transform", "uppercase");
    }
    else if(w_cells[12] == true)
    {
        $("#cell_w13").css("text-transform", "uppercase");
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        $("#cell_x1").css("text-transform", "uppercase");
    }
    else if(x_cells[1] == true)
    {
        $("#cell_x2").css("text-transform", "uppercase");
    }
    else if(x_cells[2] == true)
    {
        $("#cell_x3").css("text-transform", "uppercase");
    }
    else if(x_cells[3] == true)
    {
        $("#cell_x4").css("text-transform", "uppercase");
    }
    else if(x_cells[4] == true)
    {
        $("#cell_x5").css("text-transform", "uppercase");
    }
    else if(x_cells[5] == true)
    {
        $("#cell_x6").css("text-transform", "uppercase");
    }
    else if(x_cells[6] == true)
    {
        $("#cell_x7").css("text-transform", "uppercase");
    }
    else if(x_cells[7] == true)
    {
        $("#cell_x8").css("text-transform", "uppercase");
    }
    else if(x_cells[8] == true)
    {
        $("#cell_x9").css("text-transform", "uppercase");
    }
    else if(x_cells[9] == true)
    {
        $("#cell_x10").css("text-transform", "uppercase");
    }
    else if(x_cells[10] == true)
    {
        $("#cell_x11").css("text-transform", "uppercase");
    }
    else if(x_cells[11] == true)
    {
        $("#cell_x12").css("text-transform", "uppercase");
    }
    else if(x_cells[12] == true)
    {
        $("#cell_x13").css("text-transform", "uppercase");
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        $("#cell_y1").css("text-transform", "uppercase");
    }
    else if(y_cells[1] == true)
    {
        $("#cell_y2").css("text-transform", "uppercase");
    }
    else if(y_cells[2] == true)
    {
        $("#cell_y3").css("text-transform", "uppercase");
    }
    else if(y_cells[3] == true)
    {
        $("#cell_y4").css("text-transform", "uppercase");
    }
    else if(y_cells[4] == true)
    {
        $("#cell_y5").css("text-transform", "uppercase");
    }
    else if(y_cells[5] == true)
    {
        $("#cell_y6").css("text-transform", "uppercase");
    }
    else if(y_cells[6] == true)
    {
        $("#cell_y7").css("text-transform", "uppercase");
    }
    else if(y_cells[7] == true)
    {
        $("#cell_y8").css("text-transform", "uppercase");
    }
    else if(y_cells[8] == true)
    {
        $("#cell_y9").css("text-transform", "uppercase");
    }
    else if(y_cells[9] == true)
    {
        $("#cell_y10").css("text-transform", "uppercase");
    }
    else if(y_cells[10] == true)
    {
        $("#cell_y11").css("text-transform", "uppercase");
    }
    else if(y_cells[11] == true)
    {
        $("#cell_y12").css("text-transform", "uppercase");
    }
    else if(y_cells[12] == true)
    {
        $("#cell_y13").css("text-transform", "uppercase");
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        $("#cell_z1").css("text-transform", "uppercase");
    }
    else if(z_cells[1] == true)
    {
        $("#cell_z2").css("text-transform", "uppercase");
    }
    else if(z_cells[2] == true)
    {
        $("#cell_z3").css("text-transform", "uppercase");
    }
    else if(z_cells[3] == true)
    {
        $("#cell_z4").css("text-transform", "uppercase");
    }
    else if(z_cells[4] == true)
    {
        $("#cell_z5").css("text-transform", "uppercase");
    }
    else if(z_cells[5] == true)
    {
        $("#cell_z6").css("text-transform", "uppercase");
    }
    else if(z_cells[6] == true)
    {
        $("#cell_z7").css("text-transform", "uppercase");
    }
    else if(z_cells[7] == true)
    {
        $("#cell_z8").css("text-transform", "uppercase");
    }
    else if(z_cells[8] == true)
    {
        $("#cell_z9").css("text-transform", "uppercase");
    }
    else if(z_cells[9] == true)
    {
        $("#cell_z10").css("text-transform", "uppercase");
    }
    else if(z_cells[10] == true)
    {
        $("#cell_z11").css("text-transform", "uppercase");
    }
    else if(z_cells[11] == true)
    {
        $("#cell_z12").css("text-transform", "uppercase");
    }
    else if(z_cells[12] == true)
    {
        $("#cell_z13").css("text-transform", "uppercase");
    }
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#lowercase_function").hover(function(){
  $(".function_description").text("Transforms all uppercase characters in the cell into lowercase characters.");
  }, function(){
  $(".function_description").text("");
});

/*if the user clicks on the lowercase function's button*/
function cell_lowercase()
{
    //A column cells
    if(a_cells[0] == true)
    {
        $("#cell_a1").css("text-transform", "lowercase");
    }
    else if(a_cells[1] == true)
    {
        $("#cell_a2").css("text-transform", "lowercase");
    }
    else if(a_cells[2] == true)
    {
        $("#cell_a3").css("text-transform", "lowercase");
    }
    else if(a_cells[3] == true)
    {
        $("#cell_a4").css("text-transform", "lowercase");
    }
    else if(a_cells[4] == true)
    {
        $("#cell_a5").css("text-transform", "lowercase");
    }
    else if(a_cells[5] == true)
    {
        $("#cell_a6").css("text-transform", "lowercase");
    }
    else if(a_cells[6] == true)
    {
        $("#cell_a7").css("text-transform", "lowercase");
    }
    else if(a_cells[7] == true)
    {
        $("#cell_a8").css("text-transform", "lowercase");
    }
    else if(a_cells[8] == true)
    {
        $("#cell_a9").css("text-transform", "lowercase");
    }
    else if(a_cells[9] == true)
    {
        $("#cell_a10").css("text-transform", "lowercase");
    }
    else if(a_cells[10] == true)
    {
        $("#cell_a11").css("text-transform", "lowercase");
    }
    else if(a_cells[11] == true)
    {
        $("#cell_a12").css("text-transform", "lowercase");
    }
    else if(a_cells[12] == true)
    {
        $("#cell_a13").css("text-transform", "lowercase");
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        $("#cell_b1").css("text-transform", "lowercase");
    }
    else if(b_cells[1] == true)
    {
        $("#cell_b2").css("text-transform", "lowercase");
    }
    else if(b_cells[2] == true)
    {
        $("#cell_b3").css("text-transform", "lowercase");
    }
    else if(b_cells[3] == true)
    {
        $("#cell_b4").css("text-transform", "lowercase");
    }
    else if(b_cells[4] == true)
    {
        $("#cell_b5").css("text-transform", "lowercase");
    }
    else if(b_cells[5] == true)
    {
        $("#cell_b6").css("text-transform", "lowercase");
    }
    else if(b_cells[6] == true)
    {
        $("#cell_b7").css("text-transform", "lowercase");
    }
    else if(b_cells[7] == true)
    {
        $("#cell_b8").css("text-transform", "lowercase");
    }
    else if(b_cells[8] == true)
    {
        $("#cell_b9").css("text-transform", "lowercase");
    }
    else if(b_cells[9] == true)
    {
        $("#cell_b10").css("text-transform", "lowercase");
    }
    else if(b_cells[10] == true)
    {
        $("#cell_b11").css("text-transform", "lowercase");
    }
    else if(b_cells[11] == true)
    {
        $("#cell_b12").css("text-transform", "lowercase");
    }
    else if(b_cells[12] == true)
    {
        $("#cell_b13").css("text-transform", "lowercase");
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        $("#cell_c1").css("text-transform", "lowercase");
    }
    else if(c_cells[1] == true)
    {
        $("#cell_c2").css("text-transform", "lowercase");
    }
    else if(c_cells[2] == true)
    {
        $("#cell_c3").css("text-transform", "lowercase");
    }
    else if(c_cells[3] == true)
    {
        $("#cell_c4").css("text-transform", "lowercase");
    }
    else if(c_cells[4] == true)
    {
        $("#cell_c5").css("text-transform", "lowercase");
    }
    else if(c_cells[5] == true)
    {
        $("#cell_c6").css("text-transform", "lowercase");
    }
    else if(c_cells[6] == true)
    {
        $("#cell_c7").css("text-transform", "lowercase");
    }
    else if(c_cells[7] == true)
    {
        $("#cell_c8").css("text-transform", "lowercase");
    }
    else if(c_cells[8] == true)
    {
        $("#cell_c9").css("text-transform", "lowercase");
    }
    else if(c_cells[9] == true)
    {
        $("#cell_c10").css("text-transform", "lowercase");
    }
    else if(c_cells[10] == true)
    {
        $("#cell_c11").css("text-transform", "lowercase");
    }
    else if(c_cells[11] == true)
    {
        $("#cell_c12").css("text-transform", "lowercase");
    }
    else if(c_cells[12] == true)
    {
        $("#cell_c13").css("text-transform", "lowercase");
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        $("#cell_d1").css("text-transform", "lowercase");
    }
    else if(d_cells[1] == true)
    {
        $("#cell_d2").css("text-transform", "lowercase");
    }
    else if(d_cells[2] == true)
    {
        $("#cell_d3").css("text-transform", "lowercase");
    }
    else if(d_cells[3] == true)
    {
        $("#cell_d4").css("text-transform", "lowercase");
    }
    else if(d_cells[4] == true)
    {
        $("#cell_d5").css("text-transform", "lowercase");
    }
    else if(d_cells[5] == true)
    {
        $("#cell_d6").css("text-transform", "lowercase");
    }
    else if(d_cells[6] == true)
    {
        $("#cell_d7").css("text-transform", "lowercase");
    }
    else if(d_cells[7] == true)
    {
        $("#cell_d8").css("text-transform", "lowercase");
    }
    else if(d_cells[8] == true)
    {
        $("#cell_d9").css("text-transform", "lowercase");
    }
    else if(d_cells[9] == true)
    {
        $("#cell_d10").css("text-transform", "lowercase");
    }
    else if(d_cells[10] == true)
    {
        $("#cell_d11").css("text-transform", "lowercase");
    }
    else if(d_cells[11] == true)
    {
        $("#cell_d12").css("text-transform", "lowercase");
    }
    else if(d_cells[12] == true)
    {
        $("#cell_d13").css("text-transform", "lowercase");
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        $("#cell_e1").css("text-transform", "lowercase");
    }
    else if(e_cells[1] == true)
    {
        $("#cell_e2").css("text-transform", "lowercase");
    }
    else if(e_cells[2] == true)
    {
        $("#cell_e3").css("text-transform", "lowercase");
    }
    else if(e_cells[3] == true)
    {
        $("#cell_e4").css("text-transform", "lowercase");
    }
    else if(e_cells[4] == true)
    {
        $("#cell_e5").css("text-transform", "lowercase");
    }
    else if(e_cells[5] == true)
    {
        $("#cell_e6").css("text-transform", "lowercase");
    }
    else if(e_cells[6] == true)
    {
        $("#cell_e7").css("text-transform", "lowercase");
    }
    else if(e_cells[7] == true)
    {
        $("#cell_e8").css("text-transform", "lowercase");
    }
    else if(e_cells[8] == true)
    {
        $("#cell_e9").css("text-transform", "lowercase");
    }
    else if(e_cells[9] == true)
    {
        $("#cell_e10").css("text-transform", "lowercase");
    }
    else if(e_cells[10] == true)
    {
        $("#cell_e11").css("text-transform", "lowercase");
    }
    else if(e_cells[11] == true)
    {
        $("#cell_e12").css("text-transform", "lowercase");
    }
    else if(e_cells[12] == true)
    {
        $("#cell_e13").css("text-transform", "lowercase");
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        $("#cell_f1").css("text-transform", "lowercase");
    }
    else if(f_cells[1] == true)
    {
        $("#cell_f2").css("text-transform", "lowercase");
    }
    else if(f_cells[2] == true)
    {
        $("#cell_f3").css("text-transform", "lowercase");
    }
    else if(f_cells[3] == true)
    {
        $("#cell_f4").css("text-transform", "lowercase");
    }
    else if(f_cells[4] == true)
    {
        $("#cell_f5").css("text-transform", "lowercase");
    }
    else if(f_cells[5] == true)
    {
        $("#cell_f6").css("text-transform", "lowercase");
    }
    else if(f_cells[6] == true)
    {
        $("#cell_f7").css("text-transform", "lowercase");
    }
    else if(f_cells[7] == true)
    {
        $("#cell_f8").css("text-transform", "lowercase");
    }
    else if(f_cells[8] == true)
    {
        $("#cell_f9").css("text-transform", "lowercase");
    }
    else if(f_cells[9] == true)
    {
        $("#cell_f10").css("text-transform", "lowercase");
    }
    else if(f_cells[10] == true)
    {
        $("#cell_f11").css("text-transform", "lowercase");
    }
    else if(f_cells[11] == true)
    {
        $("#cell_f12").css("text-transform", "lowercase");
    }
    else if(f_cells[12] == true)
    {
        $("#cell_f13").css("text-transform", "lowercase");
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        $("#cell_g1").css("text-transform", "lowercase");
    }
    else if(g_cells[1] == true)
    {
        $("#cell_g2").css("text-transform", "lowercase");
    }
    else if(g_cells[2] == true)
    {
        $("#cell_g3").css("text-transform", "lowercase");
    }
    else if(g_cells[3] == true)
    {
        $("#cell_g4").css("text-transform", "lowercase");
    }
    else if(g_cells[4] == true)
    {
        $("#cell_g5").css("text-transform", "lowercase");
    }
    else if(g_cells[5] == true)
    {
        $("#cell_g6").css("text-transform", "lowercase");
    }
    else if(g_cells[6] == true)
    {
        $("#cell_g7").css("text-transform", "lowercase");
    }
    else if(g_cells[7] == true)
    {
        $("#cell_g8").css("text-transform", "lowercase");
    }
    else if(g_cells[8] == true)
    {
        $("#cell_g9").css("text-transform", "lowercase");
    }
    else if(g_cells[9] == true)
    {
        $("#cell_g10").css("text-transform", "lowercase");
    }
    else if(g_cells[10] == true)
    {
        $("#cell_g11").css("text-transform", "lowercase");
    }
    else if(g_cells[11] == true)
    {
        $("#cell_g12").css("text-transform", "lowercase");
    }
    else if(g_cells[12] == true)
    {
        $("#cell_g13").css("text-transform", "lowercase");
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        $("#cell_h1").css("text-transform", "lowercase");
    }
    else if(h_cells[1] == true)
    {
        $("#cell_h2").css("text-transform", "lowercase");
    }
    else if(h_cells[2] == true)
    {
        $("#cell_h3").css("text-transform", "lowercase");
    }
    else if(h_cells[3] == true)
    {
        $("#cell_h4").css("text-transform", "lowercase");
    }
    else if(h_cells[4] == true)
    {
        $("#cell_h5").css("text-transform", "lowercase");
    }
    else if(h_cells[5] == true)
    {
        $("#cell_h6").css("text-transform", "lowercase");
    }
    else if(h_cells[6] == true)
    {
        $("#cell_h7").css("text-transform", "lowercase");
    }
    else if(h_cells[7] == true)
    {
        $("#cell_h8").css("text-transform", "lowercase");
    }
    else if(h_cells[8] == true)
    {
        $("#cell_h9").css("text-transform", "lowercase");
    }
    else if(h_cells[9] == true)
    {
        $("#cell_h10").css("text-transform", "lowercase");
    }
    else if(h_cells[10] == true)
    {
        $("#cell_h11").css("text-transform", "lowercase");
    }
    else if(h_cells[11] == true)
    {
        $("#cell_h12").css("text-transform", "lowercase");
    }
    else if(h_cells[12] == true)
    {
        $("#cell_h13").css("text-transform", "lowercase");
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        $("#cell_i1").css("text-transform", "lowercase");
    }
    else if(i_cells[1] == true)
    {
        $("#cell_i2").css("text-transform", "lowercase");
    }
    else if(i_cells[2] == true)
    {
        $("#cell_i3").css("text-transform", "lowercase");
    }
    else if(i_cells[3] == true)
    {
        $("#cell_i4").css("text-transform", "lowercase");
    }
    else if(i_cells[4] == true)
    {
        $("#cell_i5").css("text-transform", "lowercase");
    }
    else if(i_cells[5] == true)
    {
        $("#cell_i6").css("text-transform", "lowercase");
    }
    else if(i_cells[6] == true)
    {
        $("#cell_i7").css("text-transform", "lowercase");
    }
    else if(i_cells[7] == true)
    {
        $("#cell_i8").css("text-transform", "lowercase");
    }
    else if(i_cells[8] == true)
    {
        $("#cell_i9").css("text-transform", "lowercase");
    }
    else if(i_cells[9] == true)
    {
        $("#cell_i10").css("text-transform", "lowercase");
    }
    else if(i_cells[10] == true)
    {
        $("#cell_i11").css("text-transform", "lowercase");
    }
    else if(i_cells[11] == true)
    {
        $("#cell_i12").css("text-transform", "lowercase");
    }
    else if(i_cells[12] == true)
    {
        $("#cell_i13").css("text-transform", "lowercase");
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        $("#cell_j1").css("text-transform", "lowercase");
    }
    else if(j_cells[1] == true)
    {
        $("#cell_j2").css("text-transform", "lowercase");
    }
    else if(j_cells[2] == true)
    {
        $("#cell_j3").css("text-transform", "lowercase");
    }
    else if(j_cells[3] == true)
    {
        $("#cell_j4").css("text-transform", "lowercase");
    }
    else if(j_cells[4] == true)
    {
        $("#cell_j5").css("text-transform", "lowercase");
    }
    else if(j_cells[5] == true)
    {
        $("#cell_j6").css("text-transform", "lowercase");
    }
    else if(j_cells[6] == true)
    {
        $("#cell_j7").css("text-transform", "lowercase");
    }
    else if(j_cells[7] == true)
    {
        $("#cell_j8").css("text-transform", "lowercase");
    }
    else if(j_cells[8] == true)
    {
        $("#cell_j9").css("text-transform", "lowercase");
    }
    else if(j_cells[9] == true)
    {
        $("#cell_j10").css("text-transform", "lowercase");
    }
    else if(j_cells[10] == true)
    {
        $("#cell_j11").css("text-transform", "lowercase");
    }
    else if(j_cells[11] == true)
    {
        $("#cell_j12").css("text-transform", "lowercase");
    }
    else if(j_cells[12] == true)
    {
        $("#cell_j13").css("text-transform", "lowercase");
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        $("#cell_k1").css("text-transform", "lowercase");
    }
    else if(k_cells[1] == true)
    {
        $("#cell_k2").css("text-transform", "lowercase");
    }
    else if(k_cells[2] == true)
    {
        $("#cell_k3").css("text-transform", "lowercase");
    }
    else if(k_cells[3] == true)
    {
        $("#cell_k4").css("text-transform", "lowercase");
    }
    else if(k_cells[4] == true)
    {
        $("#cell_k5").css("text-transform", "lowercase");
    }
    else if(k_cells[5] == true)
    {
        $("#cell_k6").css("text-transform", "lowercase");
    }
    else if(k_cells[6] == true)
    {
        $("#cell_k7").css("text-transform", "lowercase");
    }
    else if(k_cells[7] == true)
    {
        $("#cell_k8").css("text-transform", "lowercase");
    }
    else if(k_cells[8] == true)
    {
        $("#cell_k9").css("text-transform", "lowercase");
    }
    else if(k_cells[9] == true)
    {
        $("#cell_k10").css("text-transform", "lowercase");
    }
    else if(k_cells[10] == true)
    {
        $("#cell_k11").css("text-transform", "lowercase");
    }
    else if(k_cells[11] == true)
    {
        $("#cell_k12").css("text-transform", "lowercase");
    }
    else if(k_cells[12] == true)
    {
        $("#cell_k13").css("text-transform", "lowercase");
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        $("#cell_l1").css("text-transform", "lowercase");
    }
    else if(l_cells[1] == true)
    {
        $("#cell_l2").css("text-transform", "lowercase");
    }
    else if(l_cells[2] == true)
    {
        $("#cell_l3").css("text-transform", "lowercase");
    }
    else if(l_cells[3] == true)
    {
        $("#cell_l4").css("text-transform", "lowercase");
    }
    else if(l_cells[4] == true)
    {
        $("#cell_l5").css("text-transform", "lowercase");
    }
    else if(l_cells[5] == true)
    {
        $("#cell_l6").css("text-transform", "lowercase");
    }
    else if(l_cells[6] == true)
    {
        $("#cell_l7").css("text-transform", "lowercase");
    }
    else if(l_cells[7] == true)
    {
        $("#cell_l8").css("text-transform", "lowercase");
    }
    else if(l_cells[8] == true)
    {
        $("#cell_l9").css("text-transform", "lowercase");
    }
    else if(l_cells[9] == true)
    {
        $("#cell_l10").css("text-transform", "lowercase");
    }
    else if(l_cells[10] == true)
    {
        $("#cell_l11").css("text-transform", "lowercase");
    }
    else if(l_cells[11] == true)
    {
        $("#cell_l12").css("text-transform", "lowercase");
    }
    else if(l_cells[12] == true)
    {
        $("#cell_l13").css("text-transform", "lowercase");
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        $("#cell_m1").css("text-transform", "lowercase");
    }
    else if(m_cells[1] == true)
    {
        $("#cell_m2").css("text-transform", "lowercase");
    }
    else if(m_cells[2] == true)
    {
        $("#cell_m3").css("text-transform", "lowercase");
    }
    else if(m_cells[3] == true)
    {
        $("#cell_m4").css("text-transform", "lowercase");
    }
    else if(m_cells[4] == true)
    {
        $("#cell_m5").css("text-transform", "lowercase");
    }
    else if(m_cells[5] == true)
    {
        $("#cell_m6").css("text-transform", "lowercase");
    }
    else if(m_cells[6] == true)
    {
        $("#cell_m7").css("text-transform", "lowercase");
    }
    else if(m_cells[7] == true)
    {
        $("#cell_m8").css("text-transform", "lowercase");
    }
    else if(m_cells[8] == true)
    {
        $("#cell_m9").css("text-transform", "lowercase");
    }
    else if(m_cells[9] == true)
    {
        $("#cell_m10").css("text-transform", "lowercase");
    }
    else if(m_cells[10] == true)
    {
        $("#cell_m11").css("text-transform", "lowercase");
    }
    else if(m_cells[11] == true)
    {
        $("#cell_m12").css("text-transform", "lowercase");
    }
    else if(m_cells[12] == true)
    {
        $("#cell_m13").css("text-transform", "lowercase");
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        $("#cell_n1").css("text-transform", "lowercase");
    }
    else if(n_cells[1] == true)
    {
        $("#cell_n2").css("text-transform", "lowercase");
    }
    else if(n_cells[2] == true)
    {
        $("#cell_n3").css("text-transform", "lowercase");
    }
    else if(n_cells[3] == true)
    {
        $("#cell_n4").css("text-transform", "lowercase");
    }
    else if(n_cells[4] == true)
    {
        $("#cell_n5").css("text-transform", "lowercase");
    }
    else if(n_cells[5] == true)
    {
        $("#cell_n6").css("text-transform", "lowercase");
    }
    else if(n_cells[6] == true)
    {
        $("#cell_n7").css("text-transform", "lowercase");
    }
    else if(n_cells[7] == true)
    {
        $("#cell_n8").css("text-transform", "lowercase");
    }
    else if(n_cells[8] == true)
    {
        $("#cell_n9").css("text-transform", "lowercase");
    }
    else if(n_cells[9] == true)
    {
        $("#cell_n10").css("text-transform", "lowercase");
    }
    else if(n_cells[10] == true)
    {
        $("#cell_n11").css("text-transform", "lowercase");
    }
    else if(n_cells[11] == true)
    {
        $("#cell_n12").css("text-transform", "lowercase");
    }
    else if(n_cells[12] == true)
    {
        $("#cell_n13").css("text-transform", "lowercase");
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        $("#cell_o1").css("text-transform", "lowercase");
    }
    else if(o_cells[1] == true)
    {
        $("#cell_o2").css("text-transform", "lowercase");
    }
    else if(o_cells[2] == true)
    {
        $("#cell_o3").css("text-transform", "lowercase");
    }
    else if(o_cells[3] == true)
    {
        $("#cell_o4").css("text-transform", "lowercase");
    }
    else if(o_cells[4] == true)
    {
        $("#cell_o5").css("text-transform", "lowercase");
    }
    else if(o_cells[5] == true)
    {
        $("#cell_o6").css("text-transform", "lowercase");
    }
    else if(o_cells[6] == true)
    {
        $("#cell_o7").css("text-transform", "lowercase");
    }
    else if(o_cells[7] == true)
    {
        $("#cell_o8").css("text-transform", "lowercase");
    }
    else if(o_cells[8] == true)
    {
        $("#cell_o9").css("text-transform", "lowercase");
    }
    else if(o_cells[9] == true)
    {
        $("#cell_o10").css("text-transform", "lowercase");
    }
    else if(o_cells[10] == true)
    {
        $("#cell_o11").css("text-transform", "lowercase");
    }
    else if(o_cells[11] == true)
    {
        $("#cell_o12").css("text-transform", "lowercase");
    }
    else if(o_cells[12] == true)
    {
        $("#cell_o13").css("text-transform", "lowercase");
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        $("#cell_p1").css("text-transform", "lowercase");
    }
    else if(p_cells[1] == true)
    {
        $("#cell_p2").css("text-transform", "lowercase");
    }
    else if(p_cells[2] == true)
    {
        $("#cell_p3").css("text-transform", "lowercase");
    }
    else if(p_cells[3] == true)
    {
        $("#cell_p3").css("text-transform", "lowercase");
    }
    else if(p_cells[4] == true)
    {
        $("#cell_p4").css("text-transform", "lowercase");
    }
    else if(p_cells[5] == true)
    {
        $("#cell_p5").css("text-transform", "lowercase");
    }
    else if(p_cells[6] == true)
    {
        $("#cell_p6").css("text-transform", "lowercase");
    }
    else if(p_cells[7] == true)
    {
        $("#cell_p7").css("text-transform", "lowercase");
    }
    else if(p_cells[8] == true)
    {
        $("#cell_p8").css("text-transform", "lowercase");
    }
    else if(p_cells[9] == true)
    {
        $("#cell_p10").css("text-transform", "lowercase");
    }
    else if(p_cells[10] == true)
    {
        $("#cell_p11").css("text-transform", "lowercase");
    }
    else if(p_cells[11] == true)
    {
        $("#cell_p12").css("text-transform", "lowercase");
    }
    else if(p_cells[12] == true)
    {
        $("#cell_p13").css("text-transform", "lowercase");
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        $("#cell_q1").css("text-transform", "lowercase");
    }
    else if(q_cells[1] == true)
    {
        $("#cell_q2").css("text-transform", "lowercase");
    }
    else if(q_cells[2] == true)
    {
        $("#cell_q3").css("text-transform", "lowercase");
    }
    else if(q_cells[3] == true)
    {
        $("#cell_q4").css("text-transform", "lowercase");
    }
    else if(q_cells[4] == true)
    {
        $("#cell_q5").css("text-transform", "lowercase");
    }
    else if(q_cells[5] == true)
    {
        $("#cell_q6").css("text-transform", "lowercase");
    }
    else if(q_cells[6] == true)
    {
        $("#cell_q7").css("text-transform", "lowercase");
    }
    else if(q_cells[7] == true)
    {
        $("#cell_q8").css("text-transform", "lowercase");
    }
    else if(q_cells[8] == true)
    {
        $("#cell_q9").css("text-transform", "lowercase");
    }
    else if(q_cells[9] == true)
    {
        $("#cell_q10").css("text-transform", "lowercase");
    }
    else if(q_cells[10] == true)
    {
        $("#cell_q11").css("text-transform", "lowercase");
    }
    else if(q_cells[11] == true)
    {
        $("#cell_q12").css("text-transform", "lowercase");
    }
    else if(q_cells[12] == true)
    {
        $("#cell_q13").css("text-transform", "lowercase");
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        $("#cell_r1").css("text-transform", "lowercase");
    }
    else if(r_cells[1] == true)
    {
        $("#cell_r2").css("text-transform", "lowercase");
    }
    else if(r_cells[2] == true)
    {
        $("#cell_r3").css("text-transform", "lowercase");
    }
    else if(r_cells[3] == true)
    {
        $("#cell_r4").css("text-transform", "lowercase");
    }
    else if(r_cells[4] == true)
    {
        $("#cell_r5").css("text-transform", "lowercase");
    }
    else if(r_cells[5] == true)
    {
        $("#cell_r6").css("text-transform", "lowercase");
    }
    else if(r_cells[6] == true)
    {
        $("#cell_r7").css("text-transform", "lowercase");
    }
    else if(r_cells[7] == true)
    {
        $("#cell_r8").css("text-transform", "lowercase");
    }
    else if(r_cells[8] == true)
    {
        $("#cell_r9").css("text-transform", "lowercase");
    }
    else if(r_cells[9] == true)
    {
        $("#cell_r10").css("text-transform", "lowercase");
    }
    else if(r_cells[10] == true)
    {
        $("#cell_r11").css("text-transform", "lowercase");
    }
    else if(r_cells[11] == true)
    {
        $("#cell_r12").css("text-transform", "lowercase");
    }
    else if(r_cells[12] == true)
    {
        $("#cell_r13").css("text-transform", "lowercase");
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        $("#cell_s1").css("text-transform", "lowercase");
    }
    else if(s_cells[1] == true)
    {
        $("#cell_s2").css("text-transform", "lowercase");
    }
    else if(s_cells[2] == true)
    {
        $("#cell_s3").css("text-transform", "lowercase");
    }
    else if(s_cells[3] == true)
    {
        $("#cell_s4").css("text-transform", "lowercase");
    }
    else if(s_cells[4] == true)
    {
        $("#cell_s5").css("text-transform", "lowercase");
    }
    else if(s_cells[5] == true)
    {
        $("#cell_s6").css("text-transform", "lowercase");
    }
    else if(s_cells[6] == true)
    {
        $("#cell_s7").css("text-transform", "lowercase");
    }
    else if(s_cells[7] == true)
    {
        $("#cell_s8").css("text-transform", "lowercase");
    }
    else if(s_cells[8] == true)
    {
        $("#cell_s9").css("text-transform", "lowercase");
    }
    else if(s_cells[9] == true)
    {
        $("#cell_s10").css("text-transform", "lowercase");
    }
    else if(s_cells[10] == true)
    {
        $("#cell_s11").css("text-transform", "lowercase");
    }
    else if(s_cells[11] == true)
    {
        $("#cell_s12").css("text-transform", "lowercase");
    }
    else if(s_cells[12] == true)
    {
        $("#cell_s13").css("text-transform", "lowercase");
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        $("#cell_t1").css("text-transform", "lowercase");
    }
    else if(t_cells[1] == true)
    {
        $("#cell_t2").css("text-transform", "lowercase");
    }
    else if(t_cells[2] == true)
    {
        $("#cell_t3").css("text-transform", "lowercase");
    }
    else if(t_cells[3] == true)
    {
        $("#cell_t4").css("text-transform", "lowercase");
    }
    else if(t_cells[4] == true)
    {
        $("#cell_t5").css("text-transform", "lowercase");
    }
    else if(t_cells[5] == true)
    {
        $("#cell_t6").css("text-transform", "lowercase");
    }
    else if(t_cells[6] == true)
    {
        $("#cell_t7").css("text-transform", "lowercase");
    }
    else if(t_cells[7] == true)
    {
        $("#cell_t8").css("text-transform", "lowercase");
    }
    else if(t_cells[8] == true)
    {
        $("#cell_t9").css("text-transform", "lowercase");
    }
    else if(t_cells[9] == true)
    {
        $("#cell_t10").css("text-transform", "lowercase");
    }
    else if(t_cells[10] == true)
    {
        $("#cell_t11").css("text-transform", "lowercase");
    }
    else if(t_cells[11] == true)
    {
        $("#cell_t12").css("text-transform", "lowercase");
    }
    else if(t_cells[12] == true)
    {
        $("#cell_t13").css("text-transform", "lowercase");
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        $("#cell_u1").css("text-transform", "lowercase");
    }
    else if(u_cells[1] == true)
    {
        $("#cell_u2").css("text-transform", "lowercase");
    }
    else if(u_cells[2] == true)
    {
        $("#cell_u3").css("text-transform", "lowercase");
    }
    else if(u_cells[3] == true)
    {
        $("#cell_u4").css("text-transform", "lowercase");
    }
    else if(u_cells[4] == true)
    {
        $("#cell_u5").css("text-transform", "lowercase");
    }
    else if(u_cells[5] == true)
    {
        $("#cell_u6").css("text-transform", "lowercase");
    }
    else if(u_cells[6] == true)
    {
        $("#cell_u7").css("text-transform", "lowercase");
    }
    else if(u_cells[7] == true)
    {
        $("#cell_u8").css("text-transform", "lowercase");
    }
    else if(u_cells[8] == true)
    {
        $("#cell_u9").css("text-transform", "lowercase");
    }
    else if(u_cells[9] == true)
    {
        $("#cell_u10").css("text-transform", "lowercase");
    }
    else if(u_cells[10] == true)
    {
        $("#cell_u11").css("text-transform", "lowercase");
    }
    else if(u_cells[11] == true)
    {
        $("#cell_u12").css("text-transform", "lowercase");
    }
    else if(u_cells[12] == true)
    {
        $("#cell_u13").css("text-transform", "lowercase");
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        $("#cell_v1").css("text-transform", "lowercase");
    }
    else if(v_cells[1] == true)
    {
        $("#cell_v2").css("text-transform", "lowercase");
    }
    else if(v_cells[2] == true)
    {
        $("#cell_v3").css("text-transform", "lowercase");
    }
    else if(v_cells[3] == true)
    {
        $("#cell_v4").css("text-transform", "lowercase");
    }
    else if(v_cells[4] == true)
    {
        $("#cell_v5").css("text-transform", "lowercase");
    }
    else if(v_cells[5] == true)
    {
        $("#cell_v6").css("text-transform", "lowercase");
    }
    else if(v_cells[6] == true)
    {
        $("#cell_v7").css("text-transform", "lowercase");
    }
    else if(v_cells[7] == true)
    {
        $("#cell_v8").css("text-transform", "lowercase");
    }
    else if(v_cells[8] == true)
    {
        $("#cell_v9").css("text-transform", "lowercase");
    }
    else if(v_cells[9] == true)
    {
        $("#cell_v10").css("text-transform", "lowercase");
    }
    else if(v_cells[10] == true)
    {
        $("#cell_v11").css("text-transform", "lowercase");
    }
    else if(v_cells[11] == true)
    {
        $("#cell_v12").css("text-transform", "lowercase");
    }
    else if(v_cells[12] == true)
    {
        $("#cell_v13").css("text-transform", "lowercase");
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        $("#cell_w1").css("text-transform", "lowercase");
    }
    else if(w_cells[1] == true)
    {
        $("#cell_w2").css("text-transform", "lowercase");
    }
    else if(w_cells[2] == true)
    {
        $("#cell_w3").css("text-transform", "lowercase");
    }
    else if(w_cells[3] == true)
    {
        $("#cell_w4").css("text-transform", "lowercase");
    }
    else if(w_cells[4] == true)
    {
        $("#cell_w5").css("text-transform", "lowercase");
    }
    else if(w_cells[5] == true)
    {
        $("#cell_w6").css("text-transform", "lowercase");
    }
    else if(w_cells[6] == true)
    {
        $("#cell_w7").css("text-transform", "lowercase");
    }
    else if(w_cells[7] == true)
    {
        $("#cell_w8").css("text-transform", "lowercase");
    }
    else if(w_cells[8] == true)
    {
        $("#cell_w9").css("text-transform", "lowercase");
    }
    else if(w_cells[9] == true)
    {
        $("#cell_w10").css("text-transform", "lowercase");
    }
    else if(w_cells[10] == true)
    {
        $("#cell_w11").css("text-transform", "lowercase");
    }
    else if(w_cells[11] == true)
    {
        $("#cell_w12").css("text-transform", "lowercase");
    }
    else if(w_cells[12] == true)
    {
        $("#cell_w13").css("text-transform", "lowercase");
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        $("#cell_x1").css("text-transform", "lowercase");
    }
    else if(x_cells[1] == true)
    {
        $("#cell_x2").css("text-transform", "lowercase");
    }
    else if(x_cells[2] == true)
    {
        $("#cell_x3").css("text-transform", "lowercase");
    }
    else if(x_cells[3] == true)
    {
        $("#cell_x4").css("text-transform", "lowercase");
    }
    else if(x_cells[4] == true)
    {
        $("#cell_x5").css("text-transform", "lowercase");
    }
    else if(x_cells[5] == true)
    {
        $("#cell_x6").css("text-transform", "lowercase");
    }
    else if(x_cells[6] == true)
    {
        $("#cell_x7").css("text-transform", "lowercase");
    }
    else if(x_cells[7] == true)
    {
        $("#cell_x8").css("text-transform", "lowercase");
    }
    else if(x_cells[8] == true)
    {
        $("#cell_x9").css("text-transform", "lowercase");
    }
    else if(x_cells[9] == true)
    {
        $("#cell_x10").css("text-transform", "lowercase");
    }
    else if(x_cells[10] == true)
    {
        $("#cell_x11").css("text-transform", "lowercase");
    }
    else if(x_cells[11] == true)
    {
        $("#cell_x12").css("text-transform", "lowercase");
    }
    else if(x_cells[12] == true)
    {
        $("#cell_x13").css("text-transform", "lowercase");
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        $("#cell_y1").css("text-transform", "lowercase");
    }
    else if(y_cells[1] == true)
    {
        $("#cell_y2").css("text-transform", "lowercase");
    }
    else if(y_cells[2] == true)
    {
        $("#cell_y3").css("text-transform", "lowercase");
    }
    else if(y_cells[3] == true)
    {
        $("#cell_y4").css("text-transform", "lowercase");
    }
    else if(y_cells[4] == true)
    {
        $("#cell_y5").css("text-transform", "lowercase");
    }
    else if(y_cells[5] == true)
    {
        $("#cell_y6").css("text-transform", "lowercase");
    }
    else if(y_cells[6] == true)
    {
        $("#cell_y7").css("text-transform", "lowercase");
    }
    else if(y_cells[7] == true)
    {
        $("#cell_y8").css("text-transform", "lowercase");
    }
    else if(y_cells[8] == true)
    {
        $("#cell_y9").css("text-transform", "lowercase");
    }
    else if(y_cells[9] == true)
    {
        $("#cell_y10").css("text-transform", "lowercase");
    }
    else if(y_cells[10] == true)
    {
        $("#cell_y11").css("text-transform", "lowercase");
    }
    else if(y_cells[11] == true)
    {
        $("#cell_y12").css("text-transform", "lowercase");
    }
    else if(y_cells[12] == true)
    {
        $("#cell_y13").css("text-transform", "lowercase");
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        $("#cell_z1").css("text-transform", "lowercase");
    }
    else if(z_cells[1] == true)
    {
        $("#cell_z2").css("text-transform", "lowercase");
    }
    else if(z_cells[2] == true)
    {
        $("#cell_z3").css("text-transform", "lowercase");
    }
    else if(z_cells[3] == true)
    {
        $("#cell_z4").css("text-transform", "lowercase");
    }
    else if(z_cells[4] == true)
    {
        $("#cell_z5").css("text-transform", "lowercase");
    }
    else if(z_cells[5] == true)
    {
        $("#cell_z6").css("text-transform", "lowercase");
    }
    else if(z_cells[6] == true)
    {
        $("#cell_z7").css("text-transform", "lowercase");
    }
    else if(z_cells[7] == true)
    {
        $("#cell_z8").css("text-transform", "lowercase");
    }
    else if(z_cells[8] == true)
    {
        $("#cell_z9").css("text-transform", "lowercase");
    }
    else if(z_cells[9] == true)
    {
        $("#cell_z10").css("text-transform", "lowercase");
    }
    else if(z_cells[10] == true)
    {
        $("#cell_z11").css("text-transform", "lowercase");
    }
    else if(z_cells[11] == true)
    {
        $("#cell_z12").css("text-transform", "lowercase");
    }
    else if(z_cells[12] == true)
    {
        $("#cell_z13").css("text-transform", "lowercase");
    }
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#index_of_function").hover(function(){
  $(".function_description").text("Searches for the given input string and returns the index of the cell containing it.");
  }, function(){
  $(".function_description").text("");
});

/*Requires dynamic cell data handling and backend code, it will appear in the future Python version!*/
function cell_index_of()
{
    alert("Specific backend code needed, which will appear in the Python version!");
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#min_function").hover(function(){
  $(".function_description").text("Returns the min value of a set of numeric cell values.");
  }, function(){
  $(".function_description").text("");
});

/*Requires dynamic cell data handling and backend code, it will appear in the future Python version!*/
function cell_min()
{
    alert("Specific backend code needed, which will appear in the Python version!");
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#max_function").hover(function(){
  $(".function_description").text("Returns the max value of a set of numeric cell values.");
  }, function(){
  $(".function_description").text("");
});

/*Requires dynamic cell data handling and backend code, it will appear in the future Python version!*/
function cell_max()
{
    alert("Specific backend code needed, which will appear in the Python version!");
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#avg_function").hover(function(){
  $(".function_description").text("Returns the average value of a set of numeric cell values.");
  }, function(){
  $(".function_description").text("");
});

/*Requires dynamic cell data handling and backend code, it will appear in the future Python version!*/
function cell_avg()
{
    alert("Specific backend code needed, which will appear in the Python version!");
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#sum_function").hover(function(){
  $(".function_description").text("Returns the sum of a set of numeric cell values.");
  }, function(){
  $(".function_description").text("");
});

/*Requires dynamic cell data handling and backend code, it will appear in the future Python version!*/
function cell_sum()
{
    alert("Specific backend code needed, which will appear in the Python version!");
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#to_num_function").hover(function(){
  $(".function_description").text("Transforms the string value of a cell into a numeric value.");
  }, function(){
  $(".function_description").text("");
});

/*if the user clicks on the to-num function's button*/
function cell_to_num()
{
    //A column cells
    if(a_cells[0] == true)
    {
        $("#cell_a1").text(parseFloat(localStorage.getItem("cell_a1_inner_text")));
    }
    else if(a_cells[1] == true)
    {
        $("#cell_a2").text(parseFloat(localStorage.getItem("cell_a2_inner_text")));
    }
    else if(a_cells[2] == true)
    {
        $("#cell_a3").text(parseFloat(localStorage.getItem("cell_a3_inner_text")));
    }
    else if(a_cells[3] == true)
    {
        $("#cell_a4").text(parseFloat(localStorage.getItem("cell_a4_inner_text")));
    }
    else if(a_cells[4] == true)
    {
        $("#cell_a5").text(parseFloat(localStorage.getItem("cell_a5_inner_text")));
    }
    else if(a_cells[5] == true)
    {
        $("#cell_a6").text(parseFloat(localStorage.getItem("cell_a6_inner_text")));
    }
    else if(a_cells[6] == true)
    {
        $("#cell_a7").text(parseFloat(localStorage.getItem("cell_a7_inner_text")));
    }
    else if(a_cells[7] == true)
    {
        $("#cell_a8").text(parseFloat(localStorage.getItem("cell_a8_inner_text")));
    }
    else if(a_cells[8] == true)
    {
        $("#cell_a9").text(parseFloat(localStorage.getItem("cell_a9_inner_text")));
    }
    else if(a_cells[9] == true)
    {
        $("#cell_a10").text(parseFloat(localStorage.getItem("cell_a10_inner_text")));
    }
    else if(a_cells[10] == true)
    {
        $("#cell_a11").text(parseFloat(localStorage.getItem("cell_a11_inner_text")));
    }
    else if(a_cells[11] == true)
    {
        $("#cell_a12").text(parseFloat(localStorage.getItem("cell_a12_inner_text")));
    }
    else if(a_cells[12] == true)
    {
        $("#cell_a13").text(parseFloat(localStorage.getItem("cell_a13_inner_text")));
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        $("#cell_b1").text(parseFloat(localStorage.getItem("cell_b1_inner_text")));
    }
    else if(b_cells[1] == true)
    {
        $("#cell_b2").text(parseFloat(localStorage.getItem("cell_b2_inner_text")));
    }
    else if(b_cells[2] == true)
    {
        $("#cell_b3").text(parseFloat(localStorage.getItem("cell_b3_inner_text")));
    }
    else if(b_cells[3] == true)
    {
        $("#cell_b4").text(parseFloat(localStorage.getItem("cell_b4_inner_text")));
    }
    else if(b_cells[4] == true)
    {
        $("#cell_b5").text(parseFloat(localStorage.getItem("cell_b5_inner_text")));
    }
    else if(b_cells[5] == true)
    {
        $("#cell_b6").text(parseFloat(localStorage.getItem("cell_b6_inner_text")));
    }
    else if(b_cells[6] == true)
    {
        $("#cell_b7").text(parseFloat(localStorage.getItem("cell_b7_inner_text")));
    }
    else if(b_cells[7] == true)
    {
        $("#cell_b8").text(parseFloat(localStorage.getItem("cell_b8_inner_text")));
    }
    else if(b_cells[8] == true)
    {
        $("#cell_b9").text(parseFloat(localStorage.getItem("cell_b9_inner_text")));
    }
    else if(b_cells[9] == true)
    {
        $("#cell_b10").text(parseFloat(localStorage.getItem("cell_b10_inner_text")));
    }
    else if(b_cells[10] == true)
    {
        $("#cell_b11").text(parseFloat(localStorage.getItem("cell_b11_inner_text")));
    }
    else if(b_cells[11] == true)
    {
        $("#cell_b12").text(parseFloat(localStorage.getItem("cell_b12_inner_text")));
    }
    else if(b_cells[12] == true)
    {
        $("#cell_b13").text(parseFloat(localStorage.getItem("cell_b13_inner_text")));
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        $("#cell_c1").text(parseFloat(localStorage.getItem("cell_c1_inner_text")));
    }
    else if(c_cells[1] == true)
    {
        $("#cell_c2").text(parseFloat(localStorage.getItem("cell_c2_inner_text")));
    }
    else if(c_cells[2] == true)
    {
        $("#cell_c3").text(parseFloat(localStorage.getItem("cell_c3_inner_text")));
    }
    else if(c_cells[3] == true)
    {
        $("#cell_c4").text(parseFloat(localStorage.getItem("cell_c4_inner_text")));
    }
    else if(c_cells[4] == true)
    {
        $("#cell_c5").text(parseFloat(localStorage.getItem("cell_c5_inner_text")));
    }
    else if(c_cells[5] == true)
    {
        $("#cell_c6").text(parseFloat(localStorage.getItem("cell_c6_inner_text")));
    }
    else if(c_cells[6] == true)
    {
        $("#cell_c7").text(parseFloat(localStorage.getItem("cell_c7_inner_text")));
    }
    else if(c_cells[7] == true)
    {
        $("#cell_c8").text(parseFloat(localStorage.getItem("cell_c8_inner_text")));
    }
    else if(c_cells[8] == true)
    {
        $("#cell_c9").text(parseFloat(localStorage.getItem("cell_c9_inner_text")));
    }
    else if(c_cells[9] == true)
    {
        $("#cell_c10").text(parseFloat(localStorage.getItem("cell_c10_inner_text")));
    }
    else if(c_cells[10] == true)
    {
        $("#cell_c11").text(parseFloat(localStorage.getItem("cell_c11_inner_text")));
    }
    else if(c_cells[11] == true)
    {
        $("#cell_c12").text(parseFloat(localStorage.getItem("cell_c12_inner_text")));
    }
    else if(c_cells[12] == true)
    {
        $("#cell_c13").text(parseFloat(localStorage.getItem("cell_c13_inner_text")));
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        $("#cell_d1").text(parseFloat(localStorage.getItem("cell_d1_inner_text")));
    }
    else if(d_cells[1] == true)
    {
        $("#cell_d2").text(parseFloat(localStorage.getItem("cell_d2_inner_text")));
    }
    else if(d_cells[2] == true)
    {
        $("#cell_d3").text(parseFloat(localStorage.getItem("cell_d3_inner_text")));
    }
    else if(d_cells[3] == true)
    {
        $("#cell_d4").text(parseFloat(localStorage.getItem("cell_d4_inner_text")));
    }
    else if(d_cells[4] == true)
    {
        $("#cell_d5").text(parseFloat(localStorage.getItem("cell_d5_inner_text")));
    }
    else if(d_cells[5] == true)
    {
        $("#cell_d6").text(parseFloat(localStorage.getItem("cell_d6_inner_text")));
    }
    else if(d_cells[6] == true)
    {
        $("#cell_d7").text(parseFloat(localStorage.getItem("cell_d7_inner_text")));
    }
    else if(d_cells[7] == true)
    {
        $("#cell_d8").text(parseFloat(localStorage.getItem("cell_d8_inner_text")));
    }
    else if(d_cells[8] == true)
    {
        $("#cell_d9").text(parseFloat(localStorage.getItem("cell_d9_inner_text")));
    }
    else if(d_cells[9] == true)
    {
        $("#cell_d10").text(parseFloat(localStorage.getItem("cell_d10_inner_text")));
    }
    else if(d_cells[10] == true)
    {
        $("#cell_d11").text(parseFloat(localStorage.getItem("cell_d11_inner_text")));
    }
    else if(d_cells[11] == true)
    {
        $("#cell_d12").text(parseFloat(localStorage.getItem("cell_d12_inner_text")));
    }
    else if(d_cells[12] == true)
    {
        $("#cell_d13").text(parseFloat(localStorage.getItem("cell_d13_inner_text")));
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        $("#cell_e1").text(parseFloat(localStorage.getItem("cell_e1_inner_text")));
    }
    else if(e_cells[1] == true)
    {
        $("#cell_e2").text(parseFloat(localStorage.getItem("cell_e2_inner_text")));
    }
    else if(e_cells[2] == true)
    {
        $("#cell_e3").text(parseFloat(localStorage.getItem("cell_e3_inner_text")));
    }
    else if(e_cells[3] == true)
    {
        $("#cell_e4").text(parseFloat(localStorage.getItem("cell_e4_inner_text")));
    }
    else if(e_cells[4] == true)
    {
        $("#cell_e5").text(parseFloat(localStorage.getItem("cell_e5_inner_text")));
    }
    else if(e_cells[5] == true)
    {
        $("#cell_e6").text(parseFloat(localStorage.getItem("cell_e6_inner_text")));
    }
    else if(e_cells[6] == true)
    {
        $("#cell_e7").text(parseFloat(localStorage.getItem("cell_e7_inner_text")));
    }
    else if(e_cells[7] == true)
    {
        $("#cell_e8").text(parseFloat(localStorage.getItem("cell_e8_inner_text")));
    }
    else if(e_cells[8] == true)
    {
        $("#cell_e9").text(parseFloat(localStorage.getItem("cell_e9_inner_text")));
    }
    else if(e_cells[9] == true)
    {
        $("#cell_e10").text(parseFloat(localStorage.getItem("cell_e10_inner_text")));
    }
    else if(e_cells[10] == true)
    {
        $("#cell_e11").text(parseFloat(localStorage.getItem("cell_e11_inner_text")));
    }
    else if(e_cells[11] == true)
    {
        $("#cell_e12").text(parseFloat(localStorage.getItem("cell_e12_inner_text")));
    }
    else if(e_cells[12] == true)
    {
        $("#cell_e13").text(parseFloat(localStorage.getItem("cell_e13_inner_text")));
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        $("#cell_f1").text(parseFloat(localStorage.getItem("cell_f1_inner_text")));
    }
    else if(f_cells[1] == true)
    {
        $("#cell_f2").text(parseFloat(localStorage.getItem("cell_f2_inner_text")));
    }
    else if(f_cells[2] == true)
    {
        $("#cell_f3").text(parseFloat(localStorage.getItem("cell_f3_inner_text")));
    }
    else if(f_cells[3] == true)
    {
        $("#cell_f4").text(parseFloat(localStorage.getItem("cell_f4_inner_text")));
    }
    else if(f_cells[4] == true)
    {
        $("#cell_f5").text(parseFloat(localStorage.getItem("cell_f5_inner_text")));
    }
    else if(f_cells[5] == true)
    {
        $("#cell_f6").text(parseFloat(localStorage.getItem("cell_f6_inner_text")));
    }
    else if(f_cells[6] == true)
    {
        $("#cell_f7").text(parseFloat(localStorage.getItem("cell_f7_inner_text")));
    }
    else if(f_cells[7] == true)
    {
        $("#cell_f8").text(parseFloat(localStorage.getItem("cell_f8_inner_text")));
    }
    else if(f_cells[8] == true)
    {
        $("#cell_f9").text(parseFloat(localStorage.getItem("cell_f9_inner_text")));
    }
    else if(f_cells[9] == true)
    {
        $("#cell_f10").text(parseFloat(localStorage.getItem("cell_f10_inner_text")));
    }
    else if(f_cells[10] == true)
    {
        $("#cell_f11").text(parseFloat(localStorage.getItem("cell_f11_inner_text")));
    }
    else if(f_cells[11] == true)
    {
        $("#cell_f12").text(parseFloat(localStorage.getItem("cell_f12_inner_text")));
    }
    else if(f_cells[12] == true)
    {
        $("#cell_f13").text(parseFloat(localStorage.getItem("cell_f13_inner_text")));
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        $("#cell_g1").text(parseFloat(localStorage.getItem("cell_g1_inner_text")));
    }
    else if(g_cells[1] == true)
    {
        $("#cell_g2").text(parseFloat(localStorage.getItem("cell_g2_inner_text")));
    }
    else if(g_cells[2] == true)
    {
        $("#cell_g3").text(parseFloat(localStorage.getItem("cell_g3_inner_text")));
    }
    else if(g_cells[3] == true)
    {
        $("#cell_g4").text(parseFloat(localStorage.getItem("cell_g4_inner_text")));
    }
    else if(g_cells[4] == true)
    {
        $("#cell_g5").text(parseFloat(localStorage.getItem("cell_g5_inner_text")));
    }
    else if(g_cells[5] == true)
    {
        $("#cell_g6").text(parseFloat(localStorage.getItem("cell_g6_inner_text")));
    }
    else if(g_cells[6] == true)
    {
        $("#cell_g7").text(parseFloat(localStorage.getItem("cell_g7_inner_text")));
    }
    else if(g_cells[7] == true)
    {
        $("#cell_g8").text(parseFloat(localStorage.getItem("cell_g8_inner_text")));
    }
    else if(g_cells[8] == true)
    {
        $("#cell_g9").text(parseFloat(localStorage.getItem("cell_g9_inner_text")));
    }
    else if(g_cells[9] == true)
    {
        $("#cell_g10").text(parseFloat(localStorage.getItem("cell_g10_inner_text")));
    }
    else if(g_cells[10] == true)
    {
        $("#cell_g11").text(parseFloat(localStorage.getItem("cell_g11_inner_text")));
    }
    else if(g_cells[11] == true)
    {
        $("#cell_g12").text(parseFloat(localStorage.getItem("cell_g12_inner_text")));
    }
    else if(g_cells[12] == true)
    {
        $("#cell_g13").text(parseFloat(localStorage.getItem("cell_g13_inner_text")));
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        $("#cell_h1").text(parseFloat(localStorage.getItem("cell_h1_inner_text")));
    }
    else if(h_cells[1] == true)
    {
        $("#cell_h2").text(parseFloat(localStorage.getItem("cell_h2_inner_text")));
    }
    else if(h_cells[2] == true)
    {
        $("#cell_h3").text(parseFloat(localStorage.getItem("cell_h3_inner_text")));
    }
    else if(h_cells[3] == true)
    {
        $("#cell_h4").text(parseFloat(localStorage.getItem("cell_h4_inner_text")));
    }
    else if(h_cells[4] == true)
    {
        $("#cell_h5").text(parseFloat(localStorage.getItem("cell_h5_inner_text")));
    }
    else if(h_cells[5] == true)
    {
        $("#cell_h6").text(parseFloat(localStorage.getItem("cell_h6_inner_text")));
    }
    else if(h_cells[6] == true)
    {
        $("#cell_h7").text(parseFloat(localStorage.getItem("cell_h7_inner_text")));
    }
    else if(h_cells[7] == true)
    {
        $("#cell_h8").text(parseFloat(localStorage.getItem("cell_h8_inner_text")));
    }
    else if(h_cells[8] == true)
    {
        $("#cell_h9").text(parseFloat(localStorage.getItem("cell_h9_inner_text")));
    }
    else if(h_cells[9] == true)
    {
        $("#cell_h10").text(parseFloat(localStorage.getItem("cell_h10_inner_text")));
    }
    else if(h_cells[10] == true)
    {
        $("#cell_h11").text(parseFloat(localStorage.getItem("cell_h11_inner_text")));
    }
    else if(h_cells[11] == true)
    {
        $("#cell_h12").text(parseFloat(localStorage.getItem("cell_h12_inner_text")));
    }
    else if(h_cells[12] == true)
    {
        $("#cell_h13").text(parseFloat(localStorage.getItem("cell_h13_inner_text")));
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        $("#cell_i1").text(parseFloat(localStorage.getItem("cell_i1_inner_text")));
    }
    else if(i_cells[1] == true)
    {
        $("#cell_i2").text(parseFloat(localStorage.getItem("cell_i2_inner_text")));
    }
    else if(i_cells[2] == true)
    {
        $("#cell_i3").text(parseFloat(localStorage.getItem("cell_i3_inner_text")));
    }
    else if(i_cells[3] == true)
    {
        $("#cell_i4").text(parseFloat(localStorage.getItem("cell_i4_inner_text")));
    }
    else if(i_cells[4] == true)
    {
        $("#cell_i5").text(parseFloat(localStorage.getItem("cell_i5_inner_text")));
    }
    else if(i_cells[5] == true)
    {
        $("#cell_i6").text(parseFloat(localStorage.getItem("cell_i6_inner_text")));
    }
    else if(i_cells[6] == true)
    {
        $("#cell_i7").text(parseFloat(localStorage.getItem("cell_i7_inner_text")));
    }
    else if(i_cells[7] == true)
    {
        $("#cell_i8").text(parseFloat(localStorage.getItem("cell_i8_inner_text")));
    }
    else if(i_cells[8] == true)
    {
        $("#cell_i9").text(parseFloat(localStorage.getItem("cell_i9_inner_text")));
    }
    else if(i_cells[9] == true)
    {
        $("#cell_i10").text(parseFloat(localStorage.getItem("cell_i10_inner_text")));
    }
    else if(i_cells[10] == true)
    {
        $("#cell_i11").text(parseFloat(localStorage.getItem("cell_i11_inner_text")));
    }
    else if(i_cells[11] == true)
    {
        $("#cell_i12").text(parseFloat(localStorage.getItem("cell_i12_inner_text")));
    }
    else if(i_cells[12] == true)
    {
        $("#cell_i13").text(parseFloat(localStorage.getItem("cell_i13_inner_text")));
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        $("#cell_j1").text(parseFloat(localStorage.getItem("cell_j1_inner_text")));
    }
    else if(j_cells[1] == true)
    {
        $("#cell_j2").text(parseFloat(localStorage.getItem("cell_j2_inner_text")));
    }
    else if(j_cells[2] == true)
    {
        $("#cell_j3").text(parseFloat(localStorage.getItem("cell_j3_inner_text")));
    }
    else if(j_cells[3] == true)
    {
        $("#cell_j4").text(parseFloat(localStorage.getItem("cell_j4_inner_text")));
    }
    else if(j_cells[4] == true)
    {
        $("#cell_j5").text(parseFloat(localStorage.getItem("cell_j5_inner_text")));
    }
    else if(j_cells[5] == true)
    {
        $("#cell_j6").text(parseFloat(localStorage.getItem("cell_j6_inner_text")));
    }
    else if(j_cells[6] == true)
    {
        $("#cell_j7").text(parseFloat(localStorage.getItem("cell_j7_inner_text")));
    }
    else if(j_cells[7] == true)
    {
        $("#cell_j8").text(parseFloat(localStorage.getItem("cell_j8_inner_text")));
    }
    else if(j_cells[8] == true)
    {
        $("#cell_j9").text(parseFloat(localStorage.getItem("cell_j9_inner_text")));
    }
    else if(j_cells[9] == true)
    {
        $("#cell_j10").text(parseFloat(localStorage.getItem("cell_j10_inner_text")));
    }
    else if(j_cells[10] == true)
    {
        $("#cell_j11").text(parseFloat(localStorage.getItem("cell_j11_inner_text")));
    }
    else if(j_cells[11] == true)
    {
        $("#cell_j12").text(parseFloat(localStorage.getItem("cell_j12_inner_text")));
    }
    else if(j_cells[12] == true)
    {
        $("#cell_j13").text(parseFloat(localStorage.getItem("cell_j13_inner_text")));
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        $("#cell_k1").text(parseFloat(localStorage.getItem("cell_k1_inner_text")));
    }
    else if(k_cells[1] == true)
    {
        $("#cell_k2").text(parseFloat(localStorage.getItem("cell_k2_inner_text")));
    }
    else if(k_cells[2] == true)
    {
        $("#cell_k3").text(parseFloat(localStorage.getItem("cell_k3_inner_text")));
    }
    else if(k_cells[3] == true)
    {
        $("#cell_k4").text(parseFloat(localStorage.getItem("cell_k4_inner_text")));
    }
    else if(k_cells[4] == true)
    {
        $("#cell_k5").text(parseFloat(localStorage.getItem("cell_k5_inner_text")));
    }
    else if(k_cells[5] == true)
    {
        $("#cell_k6").text(parseFloat(localStorage.getItem("cell_k6_inner_text")));
    }
    else if(k_cells[6] == true)
    {
        $("#cell_k7").text(parseFloat(localStorage.getItem("cell_k7_inner_text")));
    }
    else if(k_cells[7] == true)
    {
        $("#cell_k8").text(parseFloat(localStorage.getItem("cell_k8_inner_text")));
    }
    else if(k_cells[8] == true)
    {
        $("#cell_k9").text(parseFloat(localStorage.getItem("cell_k9_inner_text")));
    }
    else if(k_cells[9] == true)
    {
        $("#cell_k10").text(parseFloat(localStorage.getItem("cell_k10_inner_text")));
    }
    else if(k_cells[10] == true)
    {
        $("#cell_k11").text(parseFloat(localStorage.getItem("cell_k11_inner_text")));
    }
    else if(k_cells[11] == true)
    {
        $("#cell_k12").text(parseFloat(localStorage.getItem("cell_k12_inner_text")));
    }
    else if(k_cells[12] == true)
    {
        $("#cell_k13").text(parseFloat(localStorage.getItem("cell_k13_inner_text")));
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        $("#cell_l1").text(parseFloat(localStorage.getItem("cell_l1_inner_text")));
    }
    else if(l_cells[1] == true)
    {
        $("#cell_l2").text(parseFloat(localStorage.getItem("cell_l2_inner_text")));
    }
    else if(l_cells[2] == true)
    {
        $("#cell_l3").text(parseFloat(localStorage.getItem("cell_l3_inner_text")));
    }
    else if(l_cells[3] == true)
    {
        $("#cell_l4").text(parseFloat(localStorage.getItem("cell_l4_inner_text")));
    }
    else if(l_cells[4] == true)
    {
        $("#cell_l5").text(parseFloat(localStorage.getItem("cell_l5_inner_text")));
    }
    else if(l_cells[5] == true)
    {
        $("#cell_l6").text(parseFloat(localStorage.getItem("cell_l6_inner_text")));
    }
    else if(l_cells[6] == true)
    {
        $("#cell_l7").text(parseFloat(localStorage.getItem("cell_l7_inner_text")));
    }
    else if(l_cells[7] == true)
    {
        $("#cell_l8").text(parseFloat(localStorage.getItem("cell_l8_inner_text")));
    }
    else if(l_cells[8] == true)
    {
        $("#cell_l9").text(parseFloat(localStorage.getItem("cell_l9_inner_text")));
    }
    else if(l_cells[9] == true)
    {
        $("#cell_l10").text(parseFloat(localStorage.getItem("cell_l10_inner_text")));
    }
    else if(l_cells[10] == true)
    {
        $("#cell_l11").text(parseFloat(localStorage.getItem("cell_l11_inner_text")));
    }
    else if(l_cells[11] == true)
    {
        $("#cell_l12").text(parseFloat(localStorage.getItem("cell_l12_inner_text")));
    }
    else if(l_cells[12] == true)
    {
        $("#cell_l13").text(parseFloat(localStorage.getItem("cell_l13_inner_text")));
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        $("#cell_m1").text(parseFloat(localStorage.getItem("cell_m1_inner_text")));
    }
    else if(m_cells[1] == true)
    {
        $("#cell_m2").text(parseFloat(localStorage.getItem("cell_m2_inner_text")));
    }
    else if(m_cells[2] == true)
    {
        $("#cell_m3").text(parseFloat(localStorage.getItem("cell_m3_inner_text")));
    }
    else if(m_cells[3] == true)
    {
        $("#cell_m4").text(parseFloat(localStorage.getItem("cell_m4_inner_text")));
    }
    else if(m_cells[4] == true)
    {
        $("#cell_m5").text(parseFloat(localStorage.getItem("cell_m5_inner_text")));
    }
    else if(m_cells[5] == true)
    {
        $("#cell_m6").text(parseFloat(localStorage.getItem("cell_m6_inner_text")));
    }
    else if(m_cells[6] == true)
    {
        $("#cell_m7").text(parseFloat(localStorage.getItem("cell_m7_inner_text")));
    }
    else if(m_cells[7] == true)
    {
        $("#cell_m8").text(parseFloat(localStorage.getItem("cell_m8_inner_text")));
    }
    else if(m_cells[8] == true)
    {
        $("#cell_m9").text(parseFloat(localStorage.getItem("cell_m9_inner_text")));
    }
    else if(m_cells[9] == true)
    {
        $("#cell_m10").text(parseFloat(localStorage.getItem("cell_m10_inner_text")));
    }
    else if(m_cells[10] == true)
    {
        $("#cell_m11").text(parseFloat(localStorage.getItem("cell_m11_inner_text")));
    }
    else if(m_cells[11] == true)
    {
        $("#cell_m12").text(parseFloat(localStorage.getItem("cell_m12_inner_text")));
    }
    else if(m_cells[12] == true)
    {
        $("#cell_m13").text(parseFloat(localStorage.getItem("cell_m13_inner_text")));
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        $("#cell_n1").text(parseFloat(localStorage.getItem("cell_n1_inner_text")));
    }
    else if(n_cells[1] == true)
    {
        $("#cell_n2").text(parseFloat(localStorage.getItem("cell_n2_inner_text")));
    }
    else if(n_cells[2] == true)
    {
        $("#cell_n3").text(parseFloat(localStorage.getItem("cell_n3_inner_text")));
    }
    else if(n_cells[3] == true)
    {
        $("#cell_n4").text(parseFloat(localStorage.getItem("cell_n4_inner_text")));
    }
    else if(n_cells[4] == true)
    {
        $("#cell_n5").text(parseFloat(localStorage.getItem("cell_n5_inner_text")));
    }
    else if(n_cells[5] == true)
    {
        $("#cell_n6").text(parseFloat(localStorage.getItem("cell_n6_inner_text")));
    }
    else if(n_cells[6] == true)
    {
        $("#cell_n7").text(parseFloat(localStorage.getItem("cell_n7_inner_text")));
    }
    else if(n_cells[7] == true)
    {
        $("#cell_n8").text(parseFloat(localStorage.getItem("cell_n8_inner_text")));
    }
    else if(n_cells[8] == true)
    {
        $("#cell_n9").text(parseFloat(localStorage.getItem("cell_n9_inner_text")));
    }
    else if(n_cells[9] == true)
    {
        $("#cell_n10").text(parseFloat(localStorage.getItem("cell_n10_inner_text")));
    }
    else if(n_cells[10] == true)
    {
        $("#cell_n11").text(parseFloat(localStorage.getItem("cell_n11_inner_text")));
    }
    else if(n_cells[11] == true)
    {
        $("#cell_n12").text(parseFloat(localStorage.getItem("cell_n12_inner_text")));
    }
    else if(n_cells[12] == true)
    {
        $("#cell_n13").text(parseFloat(localStorage.getItem("cell_n13_inner_text")));
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        $("#cell_o1").text(parseFloat(localStorage.getItem("cell_o1_inner_text")));
    }
    else if(o_cells[1] == true)
    {
        $("#cell_o2").text(parseFloat(localStorage.getItem("cell_o2_inner_text")));
    }
    else if(o_cells[2] == true)
    {
        $("#cell_o3").text(parseFloat(localStorage.getItem("cell_o3_inner_text")));
    }
    else if(o_cells[3] == true)
    {
        $("#cell_o4").text(parseFloat(localStorage.getItem("cell_o4_inner_text")));
    }
    else if(o_cells[4] == true)
    {
        $("#cell_o5").text(parseFloat(localStorage.getItem("cell_o5_inner_text")));
    }
    else if(o_cells[5] == true)
    {
        $("#cell_o6").text(parseFloat(localStorage.getItem("cell_o6_inner_text")));
    }
    else if(o_cells[6] == true)
    {
        $("#cell_o7").text(parseFloat(localStorage.getItem("cell_o7_inner_text")));
    }
    else if(o_cells[7] == true)
    {
        $("#cell_o8").text(parseFloat(localStorage.getItem("cell_o8_inner_text")));
    }
    else if(o_cells[8] == true)
    {
        $("#cell_o9").text(parseFloat(localStorage.getItem("cell_o9_inner_text")));
    }
    else if(o_cells[9] == true)
    {
        $("#cell_o10").text(parseFloat(localStorage.getItem("cell_o10_inner_text")));
    }
    else if(o_cells[10] == true)
    {
        $("#cell_o11").text(parseFloat(localStorage.getItem("cell_o11_inner_text")));
    }
    else if(o_cells[11] == true)
    {
        $("#cell_o12").text(parseFloat(localStorage.getItem("cell_o12_inner_text")));
    }
    else if(o_cells[12] == true)
    {
        $("#cell_o13").text(parseFloat(localStorage.getItem("cell_o13_inner_text")));
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        $("#cell_p1").text(parseFloat(localStorage.getItem("cell_p1_inner_text")));
    }
    else if(p_cells[1] == true)
    {
        $("#cell_p2").text(parseFloat(localStorage.getItem("cell_p2_inner_text")));
    }
    else if(p_cells[2] == true)
    {
        $("#cell_p3").text(parseFloat(localStorage.getItem("cell_p3_inner_text")));
    }
    else if(p_cells[3] == true)
    {
        $("#cell_p3").text(parseFloat(localStorage.getItem("cell_p4_inner_text")));
    }
    else if(p_cells[4] == true)
    {
        $("#cell_p4").text(parseFloat(localStorage.getItem("cell_p5_inner_text")));
    }
    else if(p_cells[5] == true)
    {
        $("#cell_p5").text(parseFloat(localStorage.getItem("cell_p6_inner_text")));
    }
    else if(p_cells[6] == true)
    {
        $("#cell_p6").text(parseFloat(localStorage.getItem("cell_p7_inner_text")));
    }
    else if(p_cells[7] == true)
    {
        $("#cell_p7").text(parseFloat(localStorage.getItem("cell_p8_inner_text")));
    }
    else if(p_cells[8] == true)
    {
        $("#cell_p8").text(parseFloat(localStorage.getItem("cell_p9_inner_text")));
    }
    else if(p_cells[9] == true)
    {
        $("#cell_p10").text(parseFloat(localStorage.getItem("cell_p10_inner_text")));
    }
    else if(p_cells[10] == true)
    {
        $("#cell_p11").text(parseFloat(localStorage.getItem("cell_p11_inner_text")));
    }
    else if(p_cells[11] == true)
    {
        $("#cell_p12").text(parseFloat(localStorage.getItem("cell_p12_inner_text")));
    }
    else if(p_cells[12] == true)
    {
        $("#cell_p13").text(parseFloat(localStorage.getItem("cell_p13_inner_text")));
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        $("#cell_q1").text(parseFloat(localStorage.getItem("cell_q1_inner_text")));
    }
    else if(q_cells[1] == true)
    {
        $("#cell_q2").text(parseFloat(localStorage.getItem("cell_q2_inner_text")));
    }
    else if(q_cells[2] == true)
    {
        $("#cell_q3").text(parseFloat(localStorage.getItem("cell_q3_inner_text")));
    }
    else if(q_cells[3] == true)
    {
        $("#cell_q4").text(parseFloat(localStorage.getItem("cell_q4_inner_text")));
    }
    else if(q_cells[4] == true)
    {
        $("#cell_q5").text(parseFloat(localStorage.getItem("cell_q5_inner_text")));
    }
    else if(q_cells[5] == true)
    {
        $("#cell_q6").text(parseFloat(localStorage.getItem("cell_q6_inner_text")));
    }
    else if(q_cells[6] == true)
    {
        $("#cell_q7").text(parseFloat(localStorage.getItem("cell_q7_inner_text")));
    }
    else if(q_cells[7] == true)
    {
        $("#cell_q8").text(parseFloat(localStorage.getItem("cell_q8_inner_text")));
    }
    else if(q_cells[8] == true)
    {
        $("#cell_q9").text(parseFloat(localStorage.getItem("cell_q9_inner_text")));
    }
    else if(q_cells[9] == true)
    {
        $("#cell_q10").text(parseFloat(localStorage.getItem("cell_q10_inner_text")));
    }
    else if(q_cells[10] == true)
    {
        $("#cell_q11").text(parseFloat(localStorage.getItem("cell_q11_inner_text")));
    }
    else if(q_cells[11] == true)
    {
        $("#cell_q12").text(parseFloat(localStorage.getItem("cell_q12_inner_text")));
    }
    else if(q_cells[12] == true)
    {
        $("#cell_q13").text(parseFloat(localStorage.getItem("cell_q13_inner_text")));
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        $("#cell_r1").text(parseFloat(localStorage.getItem("cell_r1_inner_text")));
    }
    else if(r_cells[1] == true)
    {
        $("#cell_r2").text(parseFloat(localStorage.getItem("cell_r2_inner_text")));
    }
    else if(r_cells[2] == true)
    {
        $("#cell_r3").text(parseFloat(localStorage.getItem("cell_r3_inner_text")));
    }
    else if(r_cells[3] == true)
    {
        $("#cell_r4").text(parseFloat(localStorage.getItem("cell_r4_inner_text")));
    }
    else if(r_cells[4] == true)
    {
        $("#cell_r5").text(parseFloat(localStorage.getItem("cell_r5_inner_text")));
    }
    else if(r_cells[5] == true)
    {
        $("#cell_r6").text(parseFloat(localStorage.getItem("cell_r6_inner_text")));
    }
    else if(r_cells[6] == true)
    {
        $("#cell_r7").text(parseFloat(localStorage.getItem("cell_r7_inner_text")));
    }
    else if(r_cells[7] == true)
    {
        $("#cell_r8").text(parseFloat(localStorage.getItem("cell_r8_inner_text")));
    }
    else if(r_cells[8] == true)
    {
        $("#cell_r9").text(parseFloat(localStorage.getItem("cell_r9_inner_text")));
    }
    else if(r_cells[9] == true)
    {
        $("#cell_r10").text(parseFloat(localStorage.getItem("cell_r10_inner_text")));
    }
    else if(r_cells[10] == true)
    {
        $("#cell_r11").text(parseFloat(localStorage.getItem("cell_r11_inner_text")));
    }
    else if(r_cells[11] == true)
    {
        $("#cell_r12").text(parseFloat(localStorage.getItem("cell_r12_inner_text")));
    }
    else if(r_cells[12] == true)
    {
        $("#cell_r13").text(parseFloat(localStorage.getItem("cell_r13_inner_text")));
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        $("#cell_s1").text(parseFloat(localStorage.getItem("cell_s1_inner_text")));
    }
    else if(s_cells[1] == true)
    {
        $("#cell_s2").text(parseFloat(localStorage.getItem("cell_s2_inner_text")));
    }
    else if(s_cells[2] == true)
    {
        $("#cell_s3").text(parseFloat(localStorage.getItem("cell_s3_inner_text")));
    }
    else if(s_cells[3] == true)
    {
        $("#cell_s4").text(parseFloat(localStorage.getItem("cell_s4_inner_text")));
    }
    else if(s_cells[4] == true)
    {
        $("#cell_s5").text(parseFloat(localStorage.getItem("cell_s5_inner_text")));
    }
    else if(s_cells[5] == true)
    {
        $("#cell_s6").text(parseFloat(localStorage.getItem("cell_s6_inner_text")));
    }
    else if(s_cells[6] == true)
    {
        $("#cell_s7").text(parseFloat(localStorage.getItem("cell_s7_inner_text")));
    }
    else if(s_cells[7] == true)
    {
        $("#cell_s8").text(parseFloat(localStorage.getItem("cell_s8_inner_text")));
    }
    else if(s_cells[8] == true)
    {
        $("#cell_s9").text(parseFloat(localStorage.getItem("cell_s9_inner_text")));
    }
    else if(s_cells[9] == true)
    {
        $("#cell_s10").text(parseFloat(localStorage.getItem("cell_s10_inner_text")));
    }
    else if(s_cells[10] == true)
    {
        $("#cell_s11").text(parseFloat(localStorage.getItem("cell_s11_inner_text")));
    }
    else if(s_cells[11] == true)
    {
        $("#cell_s12").text(parseFloat(localStorage.getItem("cell_s12_inner_text")));
    }
    else if(s_cells[12] == true)
    {
        $("#cell_s13").text(parseFloat(localStorage.getItem("cell_s13_inner_text")));
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        $("#cell_t1").text(parseFloat(localStorage.getItem("cell_t1_inner_text")));
    }
    else if(t_cells[1] == true)
    {
        $("#cell_t2").text(parseFloat(localStorage.getItem("cell_t2_inner_text")));
    }
    else if(t_cells[2] == true)
    {
        $("#cell_t3").text(parseFloat(localStorage.getItem("cell_t3_inner_text")));
    }
    else if(t_cells[3] == true)
    {
        $("#cell_t4").text(parseFloat(localStorage.getItem("cell_t4_inner_text")));
    }
    else if(t_cells[4] == true)
    {
        $("#cell_t5").text(parseFloat(localStorage.getItem("cell_t5_inner_text")));
    }
    else if(t_cells[5] == true)
    {
        $("#cell_t6").text(parseFloat(localStorage.getItem("cell_t6_inner_text")));
    }
    else if(t_cells[6] == true)
    {
        $("#cell_t7").text(parseFloat(localStorage.getItem("cell_t7_inner_text")));
    }
    else if(t_cells[7] == true)
    {
        $("#cell_t8").text(parseFloat(localStorage.getItem("cell_t8_inner_text")));
    }
    else if(t_cells[8] == true)
    {
        $("#cell_t9").text(parseFloat(localStorage.getItem("cell_t9_inner_text")));
    }
    else if(t_cells[9] == true)
    {
        $("#cell_t10").text(parseFloat(localStorage.getItem("cell_t10_inner_text")));
    }
    else if(t_cells[10] == true)
    {
        $("#cell_t11").text(parseFloat(localStorage.getItem("cell_t11_inner_text")));
    }
    else if(t_cells[11] == true)
    {
        $("#cell_t12").text(parseFloat(localStorage.getItem("cell_t12_inner_text")));
    }
    else if(t_cells[12] == true)
    {
        $("#cell_t13").text(parseFloat(localStorage.getItem("cell_t13_inner_text")));
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        $("#cell_u1").text(parseFloat(localStorage.getItem("cell_u1_inner_text")));
    }
    else if(u_cells[1] == true)
    {
        $("#cell_u2").text(parseFloat(localStorage.getItem("cell_u2_inner_text")));
    }
    else if(u_cells[2] == true)
    {
        $("#cell_u3").text(parseFloat(localStorage.getItem("cell_u3_inner_text")));
    }
    else if(u_cells[3] == true)
    {
        $("#cell_u4").text(parseFloat(localStorage.getItem("cell_u4_inner_text")));
    }
    else if(u_cells[4] == true)
    {
        $("#cell_u5").text(parseFloat(localStorage.getItem("cell_u5_inner_text")));
    }
    else if(u_cells[5] == true)
    {
        $("#cell_u6").text(parseFloat(localStorage.getItem("cell_u6_inner_text")));
    }
    else if(u_cells[6] == true)
    {
        $("#cell_u7").text(parseFloat(localStorage.getItem("cell_u7_inner_text")));
    }
    else if(u_cells[7] == true)
    {
        $("#cell_u8").text(parseFloat(localStorage.getItem("cell_u8_inner_text")));
    }
    else if(u_cells[8] == true)
    {
        $("#cell_u9").text(parseFloat(localStorage.getItem("cell_u9_inner_text")));
    }
    else if(u_cells[9] == true)
    {
        $("#cell_u10").text(parseFloat(localStorage.getItem("cell_u10_inner_text")));
    }
    else if(u_cells[10] == true)
    {
        $("#cell_u11").text(parseFloat(localStorage.getItem("cell_u11_inner_text")));
    }
    else if(u_cells[11] == true)
    {
        $("#cell_u12").text(parseFloat(localStorage.getItem("cell_u12_inner_text")));
    }
    else if(u_cells[12] == true)
    {
        $("#cell_u13").text(parseFloat(localStorage.getItem("cell_u13_inner_text")));
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        $("#cell_v1").text(parseFloat(localStorage.getItem("cell_v1_inner_text")));
    }
    else if(v_cells[1] == true)
    {
        $("#cell_v2").text(parseFloat(localStorage.getItem("cell_v2_inner_text")));
    }
    else if(v_cells[2] == true)
    {
        $("#cell_v3").text(parseFloat(localStorage.getItem("cell_v3_inner_text")));
    }
    else if(v_cells[3] == true)
    {
        $("#cell_v4").text(parseFloat(localStorage.getItem("cell_v4_inner_text")));
    }
    else if(v_cells[4] == true)
    {
        $("#cell_v5").text(parseFloat(localStorage.getItem("cell_v5_inner_text")));
    }
    else if(v_cells[5] == true)
    {
        $("#cell_v6").text(parseFloat(localStorage.getItem("cell_v6_inner_text")));
    }
    else if(v_cells[6] == true)
    {
        $("#cell_v7").text(parseFloat(localStorage.getItem("cell_v7_inner_text")));
    }
    else if(v_cells[7] == true)
    {
        $("#cell_v8").text(parseFloat(localStorage.getItem("cell_v8_inner_text")));
    }
    else if(v_cells[8] == true)
    {
        $("#cell_v9").text(parseFloat(localStorage.getItem("cell_v9_inner_text")));
    }
    else if(v_cells[9] == true)
    {
        $("#cell_v10").text(parseFloat(localStorage.getItem("cell_v10_inner_text")));
    }
    else if(v_cells[10] == true)
    {
        $("#cell_v11").text(parseFloat(localStorage.getItem("cell_v11_inner_text")));
    }
    else if(v_cells[11] == true)
    {
        $("#cell_v12").text(parseFloat(localStorage.getItem("cell_v12_inner_text")));
    }
    else if(v_cells[12] == true)
    {
        $("#cell_v13").text(parseFloat(localStorage.getItem("cell_v13_inner_text")));
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        $("#cell_w1").text(parseFloat(localStorage.getItem("cell_w1_inner_text")));
    }
    else if(w_cells[1] == true)
    {
        $("#cell_w2").text(parseFloat(localStorage.getItem("cell_w2_inner_text")));
    }
    else if(w_cells[2] == true)
    {
        $("#cell_w3").text(parseFloat(localStorage.getItem("cell_w3_inner_text")));
    }
    else if(w_cells[3] == true)
    {
        $("#cell_w4").text(parseFloat(localStorage.getItem("cell_w4_inner_text")));
    }
    else if(w_cells[4] == true)
    {
        $("#cell_w5").text(parseFloat(localStorage.getItem("cell_w5_inner_text")));
    }
    else if(w_cells[5] == true)
    {
        $("#cell_w6").text(parseFloat(localStorage.getItem("cell_w6_inner_text")));
    }
    else if(w_cells[6] == true)
    {
        $("#cell_w7").text(parseFloat(localStorage.getItem("cell_w7_inner_text")));
    }
    else if(w_cells[7] == true)
    {
        $("#cell_w8").text(parseFloat(localStorage.getItem("cell_w8_inner_text")));
    }
    else if(w_cells[8] == true)
    {
        $("#cell_w9").text(parseFloat(localStorage.getItem("cell_w9_inner_text")));
    }
    else if(w_cells[9] == true)
    {
        $("#cell_w10").text(parseFloat(localStorage.getItem("cell_w10_inner_text")));
    }
    else if(w_cells[10] == true)
    {
        $("#cell_w11").text(parseFloat(localStorage.getItem("cell_w11_inner_text")));
    }
    else if(w_cells[11] == true)
    {
        $("#cell_w12").text(parseFloat(localStorage.getItem("cell_w12_inner_text")));
    }
    else if(w_cells[12] == true)
    {
        $("#cell_w13").text(parseFloat(localStorage.getItem("cell_w13_inner_text")));
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        $("#cell_x1").text(parseFloat(localStorage.getItem("cell_x1_inner_text")));
    }
    else if(x_cells[1] == true)
    {
        $("#cell_x2").text(parseFloat(localStorage.getItem("cell_x2_inner_text")));
    }
    else if(x_cells[2] == true)
    {
        $("#cell_x3").text(parseFloat(localStorage.getItem("cell_x3_inner_text")));
    }
    else if(x_cells[3] == true)
    {
        $("#cell_x4").text(parseFloat(localStorage.getItem("cell_x4_inner_text")));
    }
    else if(x_cells[4] == true)
    {
        $("#cell_x5").text(parseFloat(localStorage.getItem("cell_x5_inner_text")));
    }
    else if(x_cells[5] == true)
    {
        $("#cell_x6").text(parseFloat(localStorage.getItem("cell_x6_inner_text")));
    }
    else if(x_cells[6] == true)
    {
        $("#cell_x7").text(parseFloat(localStorage.getItem("cell_x7_inner_text")));
    }
    else if(x_cells[7] == true)
    {
        $("#cell_x8").text(parseFloat(localStorage.getItem("cell_x8_inner_text")));
    }
    else if(x_cells[8] == true)
    {
        $("#cell_x9").text(parseFloat(localStorage.getItem("cell_x9_inner_text")));
    }
    else if(x_cells[9] == true)
    {
        $("#cell_x10").text(parseFloat(localStorage.getItem("cell_x10_inner_text")));
    }
    else if(x_cells[10] == true)
    {
        $("#cell_x11").text(parseFloat(localStorage.getItem("cell_x11_inner_text")));
    }
    else if(x_cells[11] == true)
    {
        $("#cell_x12").text(parseFloat(localStorage.getItem("cell_x12_inner_text")));
    }
    else if(x_cells[12] == true)
    {
        $("#cell_x13").text(parseFloat(localStorage.getItem("cell_x13_inner_text")));
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        $("#cell_y1").text(parseFloat(localStorage.getItem("cell_y1_inner_text")));
    }
    else if(y_cells[1] == true)
    {
        $("#cell_y2").text(parseFloat(localStorage.getItem("cell_y2_inner_text")));
    }
    else if(y_cells[2] == true)
    {
        $("#cell_y3").text(parseFloat(localStorage.getItem("cell_y3_inner_text")));
    }
    else if(y_cells[3] == true)
    {
        $("#cell_y4").text(parseFloat(localStorage.getItem("cell_y4_inner_text")));
    }
    else if(y_cells[4] == true)
    {
        $("#cell_y5").text(parseFloat(localStorage.getItem("cell_y5_inner_text")));
    }
    else if(y_cells[5] == true)
    {
        $("#cell_y6").text(parseFloat(localStorage.getItem("cell_y6_inner_text")));
    }
    else if(y_cells[6] == true)
    {
        $("#cell_y7").text(parseFloat(localStorage.getItem("cell_y7_inner_text")));
    }
    else if(y_cells[7] == true)
    {
        $("#cell_y8").text(parseFloat(localStorage.getItem("cell_y8_inner_text")));
    }
    else if(y_cells[8] == true)
    {
        $("#cell_y9").text(parseFloat(localStorage.getItem("cell_y9_inner_text")));
    }
    else if(y_cells[9] == true)
    {
        $("#cell_y10").text(parseFloat(localStorage.getItem("cell_y10_inner_text")));
    }
    else if(y_cells[10] == true)
    {
        $("#cell_y11").text(parseFloat(localStorage.getItem("cell_y11_inner_text")));
    }
    else if(y_cells[11] == true)
    {
        $("#cell_y12").text(parseFloat(localStorage.getItem("cell_y12_inner_text")));
    }
    else if(y_cells[12] == true)
    {
        $("#cell_y13").text(parseFloat(localStorage.getItem("cell_y13_inner_text")));
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        $("#cell_z1").text(parseFloat(localStorage.getItem("cell_z1_inner_text")));
    }
    else if(z_cells[1] == true)
    {
        $("#cell_z2").text(parseFloat(localStorage.getItem("cell_z2_inner_text")));
    }
    else if(z_cells[2] == true)
    {
        $("#cell_z3").text(parseFloat(localStorage.getItem("cell_z3_inner_text")));
    }
    else if(z_cells[3] == true)
    {
        $("#cell_z4").text(parseFloat(localStorage.getItem("cell_z4_inner_text")));
    }
    else if(z_cells[4] == true)
    {
        $("#cell_z5").text(parseFloat(localStorage.getItem("cell_z5_inner_text")));
    }
    else if(z_cells[5] == true)
    {
        $("#cell_z6").text(parseFloat(localStorage.getItem("cell_z6_inner_text")));
    }
    else if(z_cells[6] == true)
    {
        $("#cell_z7").text(parseFloat(localStorage.getItem("cell_z7_inner_text")));
    }
    else if(z_cells[7] == true)
    {
        $("#cell_z8").text(parseFloat(localStorage.getItem("cell_z8_inner_text")));
    }
    else if(z_cells[8] == true)
    {
        $("#cell_z9").text(parseFloat(localStorage.getItem("cell_z9_inner_text")));
    }
    else if(z_cells[9] == true)
    {
        $("#cell_z10").text(parseFloat(localStorage.getItem("cell_z10_inner_text")));
    }
    else if(z_cells[10] == true)
    {
        $("#cell_z11").text(parseFloat(localStorage.getItem("cell_z11_inner_text")));
    }
    else if(z_cells[11] == true)
    {
        $("#cell_z12").text(parseFloat(localStorage.getItem("cell_z12_inner_text")));
    }
    else if(z_cells[12] == true)
    {
        $("#cell_z13").text(parseFloat(localStorage.getItem("cell_z13_inner_text")));
    }
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#round_function").hover(function(){
  $(".function_description").text("Rounds the numeric value of a cell to the nearest numeric value.");
  }, function(){
  $(".function_description").text("");
});

/*if the user clicks on the round function's button*/
function cell_round()
{
    //A column cells
    if(a_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a1_inner_text"));
        $("#cell_a1").text(Math.round(taken_num_value));
    }
    else if(a_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a2_inner_text"));
        $("#cell_a2").text(Math.round(taken_num_value));
    }
    else if(a_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a3_inner_text"));
        $("#cell_a3").text(Math.round(taken_num_value));
    }
    else if(a_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a4_inner_text"));
        $("#cell_a4").text(Math.round(taken_num_value));
    }
    else if(a_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a5_inner_text"));
        $("#cell_a5").text(Math.round(taken_num_value));
    }
    else if(a_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a6_inner_text"));
        $("#cell_a6").text(Math.round(taken_num_value));
    }
    else if(a_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a7_inner_text"));
        $("#cell_a7").text(Math.round(taken_num_value));
    }
    else if(a_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a8_inner_text"));
        $("#cell_a8").text(Math.round(taken_num_value));
    }
    else if(a_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a9_inner_text"));
        $("#cell_a9").text(Math.round(taken_num_value));
    }
    else if(a_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a10_inner_text"));
        $("#cell_a10").text(Math.round(taken_num_value));
    }
    else if(a_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a11_inner_text"));
        $("#cell_a11").text(Math.round(taken_num_value));
    }
    else if(a_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a12_inner_text"));
        $("#cell_a12").text(Math.round(taken_num_value));
    }
    else if(a_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_a13_inner_text"));
        $("#cell_a13").text(Math.round(taken_num_value));
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b1_inner_text"));
        $("#cell_b1").text(Math.round(taken_num_value));
    }
    else if(b_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b2_inner_text"));
        $("#cell_b2").text(Math.round(taken_num_value));
    }
    else if(b_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b3_inner_text"));
        $("#cell_b3").text(Math.round(taken_num_value));
    }
    else if(b_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b4_inner_text"));
        $("#cell_b4").text(Math.round(taken_num_value));
    }
    else if(b_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b5_inner_text"));
        $("#cell_b5").text(Math.round(taken_num_value));
    }
    else if(b_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b6_inner_text"));
        $("#cell_b6").text(Math.round(taken_num_value));
    }
    else if(b_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b7_inner_text"));
        $("#cell_b7").text(Math.round(taken_num_value));
    }
    else if(b_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b8_inner_text"));
        $("#cell_b8").text(Math.round(taken_num_value));
    }
    else if(b_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b9_inner_text"));
        $("#cell_b9").text(Math.round(taken_num_value));
    }
    else if(b_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b10_inner_text"));
        $("#cell_b10").text(Math.round(taken_num_value));
    }
    else if(b_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b11_inner_text"));
        $("#cell_b11").text(Math.round(taken_num_value));
    }
    else if(b_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b12_inner_text"));
        $("#cell_b12").text(Math.round(taken_num_value));
    }
    else if(b_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_b13_inner_text"));
        $("#cell_b13").text(Math.round(taken_num_value));
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c1_inner_text"));
        $("#cell_c1").text(Math.round(taken_num_value));
    }
    else if(c_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c2_inner_text"));
        $("#cell_c2").text(Math.round(taken_num_value));
    }
    else if(c_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c3_inner_text"));
        $("#cell_c3").text(Math.round(taken_num_value));
    }
    else if(c_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c4_inner_text"));
        $("#cell_c4").text(Math.round(taken_num_value));
    }
    else if(c_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c5_inner_text"));
        $("#cell_c5").text(Math.round(taken_num_value));
    }
    else if(c_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c6_inner_text"));
        $("#cell_c6").text(Math.round(taken_num_value));
    }
    else if(c_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c7_inner_text"));
        $("#cell_c7").text(Math.round(taken_num_value));
    }
    else if(c_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c8_inner_text"));
        $("#cell_c8").text(Math.round(taken_num_value));
    }
    else if(c_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c9_inner_text"));
        $("#cell_c9").text(Math.round(taken_num_value));
    }
    else if(c_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c10_inner_text"));
        $("#cell_c10").text(Math.round(taken_num_value));
    }
    else if(c_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c11_inner_text"));
        $("#cell_c11").text(Math.round(taken_num_value));
    }
    else if(c_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c12_inner_text"));
        $("#cell_c12").text(Math.round(taken_num_value));
    }
    else if(c_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_c13_inner_text"));
        $("#cell_c13").text(Math.round(taken_num_value));
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d1_inner_text"));
        $("#cell_d1").text(Math.round(taken_num_value));
    }
    else if(d_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d2_inner_text"));
        $("#cell_d2").text(Math.round(taken_num_value));
    }
    else if(d_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d3_inner_text"));
        $("#cell_d3").text(Math.round(taken_num_value));
    }
    else if(d_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d4_inner_text"));
        $("#cell_d4").text(Math.round(taken_num_value));
    }
    else if(d_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d5_inner_text"));
        $("#cell_d5").text(Math.round(taken_num_value));
    }
    else if(d_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d6_inner_text"));
        $("#cell_d6").text(Math.round(taken_num_value));
    }
    else if(d_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d7_inner_text"));
        $("#cell_d7").text(Math.round(taken_num_value));
    }
    else if(d_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d8_inner_text"));
        $("#cell_d8").text(Math.round(taken_num_value));
    }
    else if(d_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d9_inner_text"));
        $("#cell_d9").text(Math.round(taken_num_value));
    }
    else if(d_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d10_inner_text"));
        $("#cell_d10").text(Math.round(taken_num_value));
    }
    else if(d_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d11_inner_text"));
        $("#cell_d11").text(Math.round(taken_num_value));
    }
    else if(d_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d12_inner_text"));
        $("#cell_d12").text(Math.round(taken_num_value));
    }
    else if(d_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_d13_inner_text"));
        $("#cell_d13").text(Math.round(taken_num_value));
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e1_inner_text"));
        $("#cell_e1").text(Math.round(taken_num_value));
    }
    else if(e_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e2_inner_text"));
        $("#cell_e2").text(Math.round(taken_num_value));
    }
    else if(e_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e3_inner_text"));
        $("#cell_e3").text(Math.round(taken_num_value));
    }
    else if(e_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e4_inner_text"));
        $("#cell_e4").text(Math.round(taken_num_value));
    }
    else if(e_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e5_inner_text"));
        $("#cell_e5").text(Math.round(taken_num_value));
    }
    else if(e_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e6_inner_text"));
        $("#cell_e6").text(Math.round(taken_num_value));
    }
    else if(e_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e7_inner_text"));
        $("#cell_e7").text(Math.round(taken_num_value));
    }
    else if(e_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e8_inner_text"));
        $("#cell_e8").text(Math.round(taken_num_value));
    }
    else if(e_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e9_inner_text"));
        $("#cell_e9").text(Math.round(taken_num_value));
    }
    else if(e_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e10_inner_text"));
        $("#cell_e10").text(Math.round(taken_num_value));
    }
    else if(e_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e11_inner_text"));
        $("#cell_e11").text(Math.round(taken_num_value));
    }
    else if(e_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e12_inner_text"));
        $("#cell_e12").text(Math.round(taken_num_value));
    }
    else if(e_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_e13_inner_text"));
        $("#cell_e13").text(Math.round(taken_num_value));
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f1_inner_text"));
        $("#cell_f1").text(Math.round(taken_num_value));
    }
    else if(f_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f2_inner_text"));
        $("#cell_f2").text(Math.round(taken_num_value));
    }
    else if(f_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f3_inner_text"));
        $("#cell_f3").text(Math.round(taken_num_value));
    }
    else if(f_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f4_inner_text"));
        $("#cell_f4").text(Math.round(taken_num_value));
    }
    else if(f_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f5_inner_text"));
        $("#cell_f5").text(Math.round(taken_num_value));
    }
    else if(f_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f6_inner_text"));
        $("#cell_f6").text(Math.round(taken_num_value));
    }
    else if(f_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f7_inner_text"));
        $("#cell_f7").text(Math.round(taken_num_value));
    }
    else if(f_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f8_inner_text"));
        $("#cell_f8").text(Math.round(taken_num_value));
    }
    else if(f_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f9_inner_text"));
        $("#cell_f9").text(Math.round(taken_num_value));
    }
    else if(f_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f10_inner_text"));
        $("#cell_f10").text(Math.round(taken_num_value));
    }
    else if(f_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f11_inner_text"));
        $("#cell_f11").text(Math.round(taken_num_value));
    }
    else if(f_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f12_inner_text"));
        $("#cell_f12").text(Math.round(taken_num_value));
    }
    else if(f_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_f13_inner_text"));
        $("#cell_f13").text(Math.round(taken_num_value));
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g1_inner_text"));
        $("#cell_g1").text(Math.round(taken_num_value));
    }
    else if(g_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g2_inner_text"));
        $("#cell_g2").text(Math.round(taken_num_value));
    }
    else if(g_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g3_inner_text"));
        $("#cell_g3").text(Math.round(taken_num_value));
    }
    else if(g_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g4_inner_text"));
        $("#cell_g4").text(Math.round(taken_num_value));
    }
    else if(g_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g5_inner_text"));
        $("#cell_g5").text(Math.round(taken_num_value));
    }
    else if(g_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g6_inner_text"));
        $("#cell_g6").text(Math.round(taken_num_value));
    }
    else if(g_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g7_inner_text"));
        $("#cell_g7").text(Math.round(taken_num_value));
    }
    else if(g_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g8_inner_text"));
        $("#cell_g8").text(Math.round(taken_num_value));
    }
    else if(g_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g9_inner_text"));
        $("#cell_g9").text(Math.round(taken_num_value));
    }
    else if(g_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g10_inner_text"));
        $("#cell_g10").text(Math.round(taken_num_value));
    }
    else if(g_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g11_inner_text"));
        $("#cell_g11").text(Math.round(taken_num_value));
    }
    else if(g_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g12_inner_text"));
        $("#cell_g12").text(Math.round(taken_num_value));
    }
    else if(g_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_g13_inner_text"));
        $("#cell_g13").text(Math.round(taken_num_value));
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h1_inner_text"));
        $("#cell_h1").text(Math.round(taken_num_value));
    }
    else if(h_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h2_inner_text"));
        $("#cell_h2").text(Math.round(taken_num_value));
    }
    else if(h_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h3_inner_text"));
        $("#cell_h3").text(Math.round(taken_num_value));
    }
    else if(h_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h4_inner_text"));
        $("#cell_h4").text(Math.round(taken_num_value));
    }
    else if(h_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h5_inner_text"));
        $("#cell_h5").text(Math.round(taken_num_value));
    }
    else if(h_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h6_inner_text"));
        $("#cell_h6").text(Math.round(taken_num_value));
    }
    else if(h_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h7_inner_text"));
        $("#cell_h7").text(Math.round(taken_num_value));
    }
    else if(h_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h8_inner_text"));
        $("#cell_h8").text(Math.round(taken_num_value));
    }
    else if(h_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h9_inner_text"));
        $("#cell_h9").text(Math.round(taken_num_value));
    }
    else if(h_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h10_inner_text"));
        $("#cell_h10").text(Math.round(taken_num_value));
    }
    else if(h_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h11_inner_text"));
        $("#cell_h11").text(Math.round(taken_num_value));
    }
    else if(h_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h12_inner_text"));
        $("#cell_h12").text(Math.round(taken_num_value));
    }
    else if(h_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_h13_inner_text"));
        $("#cell_h13").text(Math.round(taken_num_value));
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i1_inner_text"));
        $("#cell_i1").text(Math.round(taken_num_value));
    }
    else if(i_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i2_inner_text"));
        $("#cell_i2").text(Math.round(taken_num_value));
    }
    else if(i_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i3_inner_text"));
        $("#cell_i3").text(Math.round(taken_num_value));
    }
    else if(i_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i4_inner_text"));
        $("#cell_i4").text(Math.round(taken_num_value));
    }
    else if(i_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i5_inner_text"));
        $("#cell_i5").text(Math.round(taken_num_value));
    }
    else if(i_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i6_inner_text"));
        $("#cell_i6").text(Math.round(taken_num_value));
    }
    else if(i_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i7_inner_text"));
        $("#cell_i7").text(Math.round(taken_num_value));
    }
    else if(i_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i8_inner_text"));
        $("#cell_i8").text(Math.round(taken_num_value));
    }
    else if(i_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i9_inner_text"));
        $("#cell_i9").text(Math.round(taken_num_value));
    }
    else if(i_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i10_inner_text"));
        $("#cell_i10").text(Math.round(taken_num_value));
    }
    else if(i_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i11_inner_text"));
        $("#cell_i11").text(Math.round(taken_num_value));
    }
    else if(i_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i12_inner_text"));
        $("#cell_i12").text(Math.round(taken_num_value));
    }
    else if(i_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_i13_inner_text"));
        $("#cell_i13").text(Math.round(taken_num_value));
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j1_inner_text"));
        $("#cell_j1").text(Math.round(taken_num_value));
    }
    else if(j_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j2_inner_text"));
        $("#cell_j2").text(Math.round(taken_num_value));
    }
    else if(j_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j3_inner_text"));
        $("#cell_j3").text(Math.round(taken_num_value));
    }
    else if(j_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j4_inner_text"));
        $("#cell_j4").text(Math.round(taken_num_value));
    }
    else if(j_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j5_inner_text"));
        $("#cell_j5").text(Math.round(taken_num_value));
    }
    else if(j_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j6_inner_text"));
        $("#cell_j6").text(Math.round(taken_num_value));
    }
    else if(j_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j7_inner_text"));
        $("#cell_j7").text(Math.round(taken_num_value));
    }
    else if(j_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j8_inner_text"));
        $("#cell_j8").text(Math.round(taken_num_value));
    }
    else if(j_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j9_inner_text"));
        $("#cell_j9").text(Math.round(taken_num_value));
    }
    else if(j_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j10_inner_text"));
        $("#cell_j10").text(Math.round(taken_num_value));
    }
    else if(j_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j11_inner_text"));
        $("#cell_j11").text(Math.round(taken_num_value));
    }
    else if(j_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j12_inner_text"));
        $("#cell_j12").text(Math.round(taken_num_value));
    }
    else if(j_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_j13_inner_text"));
        $("#cell_j13").text(Math.round(taken_num_value));
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k1_inner_text"));
        $("#cell_k1").text(Math.round(taken_num_value));
    }
    else if(k_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k2_inner_text"));
        $("#cell_k2").text(Math.round(taken_num_value));
    }
    else if(k_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k3_inner_text"));
        $("#cell_k3").text(Math.round(taken_num_value));
    }
    else if(k_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k4_inner_text"));
        $("#cell_k4").text(Math.round(taken_num_value));
    }
    else if(k_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k5_inner_text"));
        $("#cell_k5").text(Math.round(taken_num_value));
    }
    else if(k_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k6_inner_text"));
        $("#cell_k6").text(Math.round(taken_num_value));
    }
    else if(k_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k7_inner_text"));
        $("#cell_k7").text(Math.round(taken_num_value));
    }
    else if(k_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k8_inner_text"));
        $("#cell_k8").text(Math.round(taken_num_value));
    }
    else if(k_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k9_inner_text"));
        $("#cell_k9").text(Math.round(taken_num_value));
    }
    else if(k_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k10_inner_text"));
        $("#cell_k10").text(Math.round(taken_num_value));
    }
    else if(k_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k11_inner_text"));
        $("#cell_k11").text(Math.round(taken_num_value));
    }
    else if(k_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k12_inner_text"));
        $("#cell_k12").text(Math.round(taken_num_value));
    }
    else if(k_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_k13_inner_text"));
        $("#cell_k13").text(Math.round(taken_num_value));
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l1_inner_text"));
        $("#cell_l1").text(Math.round(taken_num_value));
    }
    else if(l_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l2_inner_text"));
        $("#cell_l2").text(Math.round(taken_num_value));
    }
    else if(l_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l3_inner_text"));
        $("#cell_l3").text(Math.round(taken_num_value));
    }
    else if(l_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l4_inner_text"));
        $("#cell_l4").text(Math.round(taken_num_value));
    }
    else if(l_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l5_inner_text"));
        $("#cell_l5").text(Math.round(taken_num_value));
    }
    else if(l_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l6_inner_text"));
        $("#cell_l6").text(Math.round(taken_num_value));
    }
    else if(l_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l7_inner_text"));
        $("#cell_l7").text(Math.round(taken_num_value));
    }
    else if(l_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l8_inner_text"));
        $("#cell_l8").text(Math.round(taken_num_value));
    }
    else if(l_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l9_inner_text"));
        $("#cell_l9").text(Math.round(taken_num_value));
    }
    else if(l_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l10_inner_text"));
        $("#cell_l10").text(Math.round(taken_num_value));
    }
    else if(l_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l11_inner_text"));
        $("#cell_l11").text(Math.round(taken_num_value));
    }
    else if(l_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l12_inner_text"));
        $("#cell_l12").text(Math.round(taken_num_value));
    }
    else if(l_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_l13_inner_text"));
        $("#cell_l13").text(Math.round(taken_num_value));
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m1_inner_text"));
        $("#cell_m1").text(Math.round(taken_num_value));
    }
    else if(m_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m2_inner_text"));
        $("#cell_m2").text(Math.round(taken_num_value));
    }
    else if(m_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m3_inner_text"));
        $("#cell_m3").text(Math.round(taken_num_value));
    }
    else if(m_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m4_inner_text"));
        $("#cell_m4").text(Math.round(taken_num_value));
    }
    else if(m_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m5_inner_text"));
        $("#cell_m5").text(Math.round(taken_num_value));
    }
    else if(m_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m6_inner_text"));
        $("#cell_m6").text(Math.round(taken_num_value));
    }
    else if(m_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m7_inner_text"));
        $("#cell_m7").text(Math.round(taken_num_value));
    }
    else if(m_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m8_inner_text"));
        $("#cell_m8").text(Math.round(taken_num_value));
    }
    else if(m_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m9_inner_text"));
        $("#cell_m9").text(Math.round(taken_num_value));
    }
    else if(m_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m10_inner_text"));
        $("#cell_m10").text(Math.round(taken_num_value));
    }
    else if(m_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m11_inner_text"));
        $("#cell_m11").text(Math.round(taken_num_value));
    }
    else if(m_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m12_inner_text"));
        $("#cell_m12").text(Math.round(taken_num_value));
    }
    else if(m_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_m13_inner_text"));
        $("#cell_m13").text(Math.round(taken_num_value));
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n1_inner_text"));
        $("#cell_n1").text(Math.round(taken_num_value));
    }
    else if(n_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n2_inner_text"));
        $("#cell_n2").text(Math.round(taken_num_value));
    }
    else if(n_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n3_inner_text"));
        $("#cell_n3").text(Math.round(taken_num_value));
    }
    else if(n_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n4_inner_text"));
        $("#cell_n4").text(Math.round(taken_num_value));
    }
    else if(n_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n5_inner_text"));
        $("#cell_n5").text(Math.round(taken_num_value));
    }
    else if(n_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n6_inner_text"));
        $("#cell_n6").text(Math.round(taken_num_value));
    }
    else if(n_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n7_inner_text"));
        $("#cell_n7").text(Math.round(taken_num_value));
    }
    else if(n_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n8_inner_text"));
        $("#cell_n8").text(Math.round(taken_num_value));
    }
    else if(n_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n9_inner_text"));
        $("#cell_n9").text(Math.round(taken_num_value));
    }
    else if(n_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n10_inner_text"));
        $("#cell_n10").text(Math.round(taken_num_value));
    }
    else if(n_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n11_inner_text"));
        $("#cell_n11").text(Math.round(taken_num_value));
    }
    else if(n_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n12_inner_text"));
        $("#cell_n12").text(Math.round(taken_num_value));
    }
    else if(n_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_n13_inner_text"));
        $("#cell_n13").text(Math.round(taken_num_value));
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o1_inner_text"));
        $("#cell_o1").text(Math.round(taken_num_value));
    }
    else if(o_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o2_inner_text"));
        $("#cell_o2").text(Math.round(taken_num_value));
    }
    else if(o_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o3_inner_text"));
        $("#cell_o3").text(Math.round(taken_num_value));
    }
    else if(o_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o4_inner_text"));
        $("#cell_o4").text(Math.round(taken_num_value));
    }
    else if(o_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o5_inner_text"));
        $("#cell_o5").text(Math.round(taken_num_value));
    }
    else if(o_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o6_inner_text"));
        $("#cell_o6").text(Math.round(taken_num_value));
    }
    else if(o_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o7_inner_text"));
        $("#cell_o7").text(Math.round(taken_num_value));
    }
    else if(o_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o8_inner_text"));
        $("#cell_o8").text(Math.round(taken_num_value));
    }
    else if(o_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o9_inner_text"));
        $("#cell_o9").text(Math.round(taken_num_value));
    }
    else if(o_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o10_inner_text"));
        $("#cell_o10").text(Math.round(taken_num_value));
    }
    else if(o_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o11_inner_text"));
        $("#cell_o11").text(Math.round(taken_num_value));
    }
    else if(o_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o12_inner_text"));
        $("#cell_o12").text(Math.round(taken_num_value));
    }
    else if(o_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_o13_inner_text"));
        $("#cell_o13").text(Math.round(taken_num_value));
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p1_inner_text"));
        $("#cell_p1").text(Math.round(taken_num_value));
    }
    else if(p_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p2_inner_text"));
        $("#cell_p2").text(Math.round(taken_num_value));
    }
    else if(p_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p3_inner_text"));
        $("#cell_p3").text(Math.round(taken_num_value));
    }
    else if(p_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p4_inner_text"));
        $("#cell_p3").text(Math.round(taken_num_value));
    }
    else if(p_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p5_inner_text"));
        $("#cell_p4").text(Math.round(taken_num_value));
    }
    else if(p_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p6_inner_text"));
        $("#cell_p5").text(Math.round(taken_num_value));
    }
    else if(p_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p7_inner_text"));
        $("#cell_p6").text(Math.round(taken_num_value));
    }
    else if(p_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p8_inner_text"));
        $("#cell_p7").text(Math.round(taken_num_value));
    }
    else if(p_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p9_inner_text"));
        $("#cell_p8").text(Math.round(taken_num_value));
    }
    else if(p_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p10_inner_text"));
        $("#cell_p10").text(Math.round(taken_num_value));
    }
    else if(p_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p11_inner_text"));
        $("#cell_p11").text(Math.round(taken_num_value));
    }
    else if(p_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p12_inner_text"));
        $("#cell_p12").text(Math.round(taken_num_value));
    }
    else if(p_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_p13_inner_text"));
        $("#cell_p13").text(Math.round(taken_num_value));
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q1_inner_text"));
        $("#cell_q1").text(Math.round(taken_num_value));
    }
    else if(q_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q2_inner_text"));
        $("#cell_q2").text(Math.round(taken_num_value));
    }
    else if(q_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q3_inner_text"));
        $("#cell_q3").text(Math.round(taken_num_value));
    }
    else if(q_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q4_inner_text"));
        $("#cell_q4").text(Math.round(taken_num_value));
    }
    else if(q_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q5_inner_text"));
        $("#cell_q5").text(Math.round(taken_num_value));
    }
    else if(q_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q6_inner_text"));
        $("#cell_q6").text(Math.round(taken_num_value));
    }
    else if(q_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q7_inner_text"));
        $("#cell_q7").text(Math.round(taken_num_value));
    }
    else if(q_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q8_inner_text"));
        $("#cell_q8").text(Math.round(taken_num_value));
    }
    else if(q_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q9_inner_text"));
        $("#cell_q9").text(Math.round(taken_num_value));
    }
    else if(q_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q10_inner_text"));
        $("#cell_q10").text(Math.round(taken_num_value));
    }
    else if(q_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q11_inner_text"));
        $("#cell_q11").text(Math.round(taken_num_value));
    }
    else if(q_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q12_inner_text"));
        $("#cell_q12").text(Math.round(taken_num_value));
    }
    else if(q_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_q13_inner_text"));
        $("#cell_q13").text(Math.round(taken_num_value));
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r1_inner_text"));
        $("#cell_r1").text(Math.round(taken_num_value));
    }
    else if(r_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r2_inner_text"));
        $("#cell_r2").text(Math.round(taken_num_value));
    }
    else if(r_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r3_inner_text"));
        $("#cell_r3").text(Math.round(taken_num_value));
    }
    else if(r_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r4_inner_text"));
        $("#cell_r4").text(Math.round(taken_num_value));
    }
    else if(r_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r5_inner_text"));
        $("#cell_r5").text(Math.round(taken_num_value));
    }
    else if(r_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r6_inner_text"));
        $("#cell_r6").text(Math.round(taken_num_value));
    }
    else if(r_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r7_inner_text"));
        $("#cell_r7").text(Math.round(taken_num_value));
    }
    else if(r_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r8_inner_text"));
        $("#cell_r8").text(Math.round(taken_num_value));
    }
    else if(r_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r9_inner_text"));
        $("#cell_r9").text(Math.round(taken_num_value));
    }
    else if(r_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r10_inner_text"));
        $("#cell_r10").text(Math.round(taken_num_value));
    }
    else if(r_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r11_inner_text"));
        $("#cell_r11").text(Math.round(taken_num_value));
    }
    else if(r_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r12_inner_text"));
        $("#cell_r12").text(Math.round(taken_num_value));
    }
    else if(r_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_r13_inner_text"));
        $("#cell_r13").text(Math.round(taken_num_value));
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s1_inner_text"));
        $("#cell_s1").text(Math.round(taken_num_value));
    }
    else if(s_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s2_inner_text"));
        $("#cell_s2").text(Math.round(taken_num_value));
    }
    else if(s_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s3_inner_text"));
        $("#cell_s3").text(Math.round(taken_num_value));
    }
    else if(s_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s4_inner_text"));
        $("#cell_s4").text(Math.round(taken_num_value));
    }
    else if(s_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s5_inner_text"));
        $("#cell_s5").text(Math.round(taken_num_value));
    }
    else if(s_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s6_inner_text"));
        $("#cell_s6").text(Math.round(taken_num_value));
    }
    else if(s_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s7_inner_text"));
        $("#cell_s7").text(Math.round(taken_num_value));
    }
    else if(s_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s8_inner_text"));
        $("#cell_s8").text(Math.round(taken_num_value));
    }
    else if(s_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s9_inner_text"));
        $("#cell_s9").text(Math.round(taken_num_value));
    }
    else if(s_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s10_inner_text"));
        $("#cell_s10").text(Math.round(taken_num_value));
    }
    else if(s_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s11_inner_text"));
        $("#cell_s11").text(Math.round(taken_num_value));
    }
    else if(s_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s12_inner_text"));
        $("#cell_s12").text(Math.round(taken_num_value));
    }
    else if(s_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_s13_inner_text"));
        $("#cell_s13").text(Math.round(taken_num_value));
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t1_inner_text"));
        $("#cell_t1").text(Math.round(taken_num_value));
    }
    else if(t_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t2_inner_text"));
        $("#cell_t2").text(Math.round(taken_num_value));
    }
    else if(t_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t3_inner_text"));
        $("#cell_t3").text(Math.round(taken_num_value));
    }
    else if(t_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t4_inner_text"));
        $("#cell_t4").text(Math.round(taken_num_value));
    }
    else if(t_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t5_inner_text"));
        $("#cell_t5").text(Math.round(taken_num_value));
    }
    else if(t_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t6_inner_text"));
        $("#cell_t6").text(Math.round(taken_num_value));
    }
    else if(t_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t7_inner_text"));
        $("#cell_t7").text(Math.round(taken_num_value));
    }
    else if(t_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t8_inner_text"));
        $("#cell_t8").text(Math.round(taken_num_value));
    }
    else if(t_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t9_inner_text"));
        $("#cell_t9").text(Math.round(taken_num_value));
    }
    else if(t_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t10_inner_text"));
        $("#cell_t10").text(Math.round(taken_num_value));
    }
    else if(t_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t11_inner_text"));
        $("#cell_t11").text(Math.round(taken_num_value));
    }
    else if(t_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t12_inner_text"));
        $("#cell_t12").text(Math.round(taken_num_value));
    }
    else if(t_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_t13_inner_text"));
        $("#cell_t13").text(Math.round(taken_num_value));
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u1_inner_text"));
        $("#cell_u1").text(Math.round(taken_num_value));
    }
    else if(u_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u2_inner_text"));
        $("#cell_u2").text(Math.round(taken_num_value));
    }
    else if(u_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u3_inner_text"));
        $("#cell_u3").text(Math.round(taken_num_value));
    }
    else if(u_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u4_inner_text"));
        $("#cell_u4").text(Math.round(taken_num_value));
    }
    else if(u_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u5_inner_text"));
        $("#cell_u5").text(Math.round(taken_num_value));
    }
    else if(u_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u6_inner_text"));
        $("#cell_u6").text(Math.round(taken_num_value));
    }
    else if(u_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u7_inner_text"));
        $("#cell_u7").text(Math.round(taken_num_value));
    }
    else if(u_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u8_inner_text"));
        $("#cell_u8").text(Math.round(taken_num_value));
    }
    else if(u_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u9_inner_text"));
        $("#cell_u9").text(Math.round(taken_num_value));
    }
    else if(u_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u10_inner_text"));
        $("#cell_u10").text(Math.round(taken_num_value));
    }
    else if(u_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u11_inner_text"));
        $("#cell_u11").text(Math.round(taken_num_value));
    }
    else if(u_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u12_inner_text"));
        $("#cell_u12").text(Math.round(taken_num_value));
    }
    else if(u_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_u13_inner_text"));
        $("#cell_u13").text(Math.round(taken_num_value));
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v1_inner_text"));
        $("#cell_v1").text(Math.round(taken_num_value));
    }
    else if(v_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v2_inner_text"));
        $("#cell_v2").text(Math.round(taken_num_value));
    }
    else if(v_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v3_inner_text"));
        $("#cell_v3").text(Math.round(taken_num_value));
    }
    else if(v_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v4_inner_text"));
        $("#cell_v4").text(Math.round(taken_num_value));
    }
    else if(v_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v5_inner_text"));
        $("#cell_v5").text(Math.round(taken_num_value));
    }
    else if(v_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v6_inner_text"));
        $("#cell_v6").text(Math.round(taken_num_value));
    }
    else if(v_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v7_inner_text"));
        $("#cell_v7").text(Math.round(taken_num_value));
    }
    else if(v_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v8_inner_text"));
        $("#cell_v8").text(Math.round(taken_num_value));
    }
    else if(v_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v9_inner_text"));
        $("#cell_v9").text(Math.round(taken_num_value));
    }
    else if(v_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v10_inner_text"));
        $("#cell_v10").text(Math.round(taken_num_value));
    }
    else if(v_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v11_inner_text"));
        $("#cell_v11").text(Math.round(taken_num_value));
    }
    else if(v_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v12_inner_text"));
        $("#cell_v12").text(Math.round(taken_num_value));
    }
    else if(v_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_v13_inner_text"));
        $("#cell_v13").text(Math.round(taken_num_value));
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w1_inner_text"));
        $("#cell_w1").text(Math.round(taken_num_value));
    }
    else if(w_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w2_inner_text"));
        $("#cell_w2").text(Math.round(taken_num_value));
    }
    else if(w_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w3_inner_text"));
        $("#cell_w3").text(Math.round(taken_num_value));
    }
    else if(w_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w4_inner_text"));
        $("#cell_w4").text(Math.round(taken_num_value));
    }
    else if(w_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w5_inner_text"));
        $("#cell_w5").text(Math.round(taken_num_value));
    }
    else if(w_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w6_inner_text"));
        $("#cell_w6").text(Math.round(taken_num_value));
    }
    else if(w_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w7_inner_text"));
        $("#cell_w7").text(Math.round(taken_num_value));
    }
    else if(w_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w8_inner_text"));
        $("#cell_w8").text(Math.round(taken_num_value));
    }
    else if(w_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w9_inner_text"));
        $("#cell_w9").text(Math.round(taken_num_value));
    }
    else if(w_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w10_inner_text"));
        $("#cell_w10").text(Math.round(taken_num_value));
    }
    else if(w_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w11_inner_text"));
        $("#cell_w11").text(Math.round(taken_num_value));
    }
    else if(w_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w12_inner_text"));
        $("#cell_w12").text(Math.round(taken_num_value));
    }
    else if(w_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_w13_inner_text"));
        $("#cell_w13").text(Math.round(taken_num_value));
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x1_inner_text"));
        $("#cell_x1").text(Math.round(taken_num_value));
    }
    else if(x_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x2_inner_text"));
        $("#cell_x2").text(Math.round(taken_num_value));
    }
    else if(x_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x3_inner_text"));
        $("#cell_x3").text(Math.round(taken_num_value));
    }
    else if(x_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x4_inner_text"));
        $("#cell_x4").text(Math.round(taken_num_value));
    }
    else if(x_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x5_inner_text"));
        $("#cell_x5").text(Math.round(taken_num_value));
    }
    else if(x_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x6_inner_text"));
        $("#cell_x6").text(Math.round(taken_num_value));
    }
    else if(x_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x7_inner_text"));
        $("#cell_x7").text(Math.round(taken_num_value));
    }
    else if(x_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x8_inner_text"));
        $("#cell_x8").text(Math.round(taken_num_value));
    }
    else if(x_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x9_inner_text"));
        $("#cell_x9").text(Math.round(taken_num_value));
    }
    else if(x_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x10_inner_text"));
        $("#cell_x10").text(Math.round(taken_num_value));
    }
    else if(x_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x11_inner_text"));
        $("#cell_x11").text(Math.round(taken_num_value));
    }
    else if(x_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x12_inner_text"));
        $("#cell_x12").text(Math.round(taken_num_value));
    }
    else if(x_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_x13_inner_text"));
        $("#cell_x13").text(Math.round(taken_num_value));
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y1_inner_text"));
        $("#cell_y1").text(Math.round(taken_num_value));
    }
    else if(y_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y2_inner_text"));
        $("#cell_y2").text(Math.round(taken_num_value));
    }
    else if(y_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y3_inner_text"));
        $("#cell_y3").text(Math.round(taken_num_value));
    }
    else if(y_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y4_inner_text"));
        $("#cell_y4").text(Math.round(taken_num_value));
    }
    else if(y_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y5_inner_text"));
        $("#cell_y5").text(Math.round(taken_num_value));
    }
    else if(y_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y6_inner_text"));
        $("#cell_y6").text(Math.round(taken_num_value));
    }
    else if(y_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y7_inner_text"));
        $("#cell_y7").text(Math.round(taken_num_value));
    }
    else if(y_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y8_inner_text"));
        $("#cell_y8").text(Math.round(taken_num_value));
    }
    else if(y_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y9_inner_text"));
        $("#cell_y9").text(Math.round(taken_num_value));
    }
    else if(y_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y10_inner_text"));
        $("#cell_y10").text(Math.round(taken_num_value));
    }
    else if(y_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y11_inner_text"));
        $("#cell_y11").text(Math.round(taken_num_value));
    }
    else if(y_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y12_inner_text"));
        $("#cell_y12").text(Math.round(taken_num_value));
    }
    else if(y_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_y13_inner_text"));
        $("#cell_y13").text(Math.round(taken_num_value));
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z1_inner_text"));
        $("#cell_z1").text(Math.round(taken_num_value));
    }
    else if(z_cells[1] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z2_inner_text"));
        $("#cell_z2").text(Math.round(taken_num_value));
    }
    else if(z_cells[2] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z3_inner_text"));
        $("#cell_z3").text(Math.round(taken_num_value));
    }
    else if(z_cells[3] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z4_inner_text"));
        $("#cell_z4").text(Math.round(taken_num_value));
    }
    else if(z_cells[4] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z5_inner_text"));
        $("#cell_z5").text(Math.round(taken_num_value));
    }
    else if(z_cells[5] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z6_inner_text"));
        $("#cell_z6").text(Math.round(taken_num_value));
    }
    else if(z_cells[6] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z7_inner_text"));
        $("#cell_z7").text(Math.round(taken_num_value));
    }
    else if(z_cells[7] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z8_inner_text"));
        $("#cell_z8").text(Math.round(taken_num_value));
    }
    else if(z_cells[8] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z9_inner_text"));
        $("#cell_z9").text(Math.round(taken_num_value));
    }
    else if(z_cells[9] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z10_inner_text"));
        $("#cell_z10").text(Math.round(taken_num_value));
    }
    else if(z_cells[10] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z11_inner_text"));
        $("#cell_z11").text(Math.round(taken_num_value));
    }
    else if(z_cells[11] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z12_inner_text"));
        $("#cell_z12").text(Math.round(taken_num_value));
    }
    else if(z_cells[12] == true)
    {
        var taken_num_value = parseFloat(localStorage.getItem("cell_z13_inner_text"));
        $("#cell_z13").text(Math.round(taken_num_value));
    }    
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#to_string_function").hover(function(){
  $(".function_description").text("Transforms the numeric value of a cell into a string value.");
  }, function(){
  $(".function_description").text("");
});

/*if the user clicks on the to-string function's button*/
function cell_to_string()
{
    //A column cells
    if(a_cells[0] == true)
    {
        $("#cell_a1").text(toString(localStorage.getItem("cell_a1_inner_text")));
    }
    else if(a_cells[1] == true)
    {
        $("#cell_a2").text(toString(localStorage.getItem("cell_a2_inner_text")));
    }
    else if(a_cells[2] == true)
    {
        $("#cell_a3").text(toString(localStorage.getItem("cell_a3_inner_text")));
    }
    else if(a_cells[3] == true)
    {
        $("#cell_a4").text(toString(localStorage.getItem("cell_a4_inner_text")));
    }
    else if(a_cells[4] == true)
    {
        $("#cell_a5").text(toString(localStorage.getItem("cell_a5_inner_text")));
    }
    else if(a_cells[5] == true)
    {
        $("#cell_a6").text(toString(localStorage.getItem("cell_a6_inner_text")));
    }
    else if(a_cells[6] == true)
    {
        $("#cell_a7").text(toString(localStorage.getItem("cell_a7_inner_text")));
    }
    else if(a_cells[7] == true)
    {
        $("#cell_a8").text(toString(localStorage.getItem("cell_a8_inner_text")));
    }
    else if(a_cells[8] == true)
    {
        $("#cell_a9").text(toString(localStorage.getItem("cell_a9_inner_text")));
    }
    else if(a_cells[9] == true)
    {
        $("#cell_a10").text(toString(localStorage.getItem("cell_a10_inner_text")));
    }
    else if(a_cells[10] == true)
    {
        $("#cell_a11").text(toString(localStorage.getItem("cell_a11_inner_text")));
    }
    else if(a_cells[11] == true)
    {
        $("#cell_a12").text(toString(localStorage.getItem("cell_a12_inner_text")));
    }
    else if(a_cells[12] == true)
    {
        $("#cell_a13").text(toString(localStorage.getItem("cell_a13_inner_text")));
    }
    //B column cells
    else if(b_cells[0] == true)
    {
        $("#cell_b1").text(toString(localStorage.getItem("cell_b1_inner_text")));
    }
    else if(b_cells[1] == true)
    {
        $("#cell_b2").text(toString(localStorage.getItem("cell_b2_inner_text")));
    }
    else if(b_cells[2] == true)
    {
        $("#cell_b3").text(toString(localStorage.getItem("cell_b3_inner_text")));
    }
    else if(b_cells[3] == true)
    {
        $("#cell_b4").text(toString(localStorage.getItem("cell_b4_inner_text")));
    }
    else if(b_cells[4] == true)
    {
        $("#cell_b5").text(toString(localStorage.getItem("cell_b5_inner_text")));
    }
    else if(b_cells[5] == true)
    {
        $("#cell_b6").text(toString(localStorage.getItem("cell_b6_inner_text")));
    }
    else if(b_cells[6] == true)
    {
        $("#cell_b7").text(toString(localStorage.getItem("cell_b7_inner_text")));
    }
    else if(b_cells[7] == true)
    {
        $("#cell_b8").text(toString(localStorage.getItem("cell_b8_inner_text")));
    }
    else if(b_cells[8] == true)
    {
        $("#cell_b9").text(toString(localStorage.getItem("cell_b9_inner_text")));
    }
    else if(b_cells[9] == true)
    {
        $("#cell_b10").text(toString(localStorage.getItem("cell_b10_inner_text")));
    }
    else if(b_cells[10] == true)
    {
        $("#cell_b11").text(toString(localStorage.getItem("cell_b11_inner_text")));
    }
    else if(b_cells[11] == true)
    {
        $("#cell_b12").text(toString(localStorage.getItem("cell_b12_inner_text")));
    }
    else if(b_cells[12] == true)
    {
        $("#cell_b13").text(toString(localStorage.getItem("cell_b13_inner_text")));
    }
    //C column cells
    else if(c_cells[0] == true)
    {
        $("#cell_c1").text(toString(localStorage.getItem("cell_c1_inner_text")));
    }
    else if(c_cells[1] == true)
    {
        $("#cell_c2").text(toString(localStorage.getItem("cell_c2_inner_text")));
    }
    else if(c_cells[2] == true)
    {
        $("#cell_c3").text(toString(localStorage.getItem("cell_c3_inner_text")));
    }
    else if(c_cells[3] == true)
    {
        $("#cell_c4").text(toString(localStorage.getItem("cell_c4_inner_text")));
    }
    else if(c_cells[4] == true)
    {
        $("#cell_c5").text(toString(localStorage.getItem("cell_c5_inner_text")));
    }
    else if(c_cells[5] == true)
    {
        $("#cell_c6").text(toString(localStorage.getItem("cell_c6_inner_text")));
    }
    else if(c_cells[6] == true)
    {
        $("#cell_c7").text(toString(localStorage.getItem("cell_c7_inner_text")));
    }
    else if(c_cells[7] == true)
    {
        $("#cell_c8").text(toString(localStorage.getItem("cell_c8_inner_text")));
    }
    else if(c_cells[8] == true)
    {
        $("#cell_c9").text(toString(localStorage.getItem("cell_c9_inner_text")));
    }
    else if(c_cells[9] == true)
    {
        $("#cell_c10").text(toString(localStorage.getItem("cell_c10_inner_text")));
    }
    else if(c_cells[10] == true)
    {
        $("#cell_c11").text(toString(localStorage.getItem("cell_c11_inner_text")));
    }
    else if(c_cells[11] == true)
    {
        $("#cell_c12").text(toString(localStorage.getItem("cell_c12_inner_text")));
    }
    else if(c_cells[12] == true)
    {
        $("#cell_c13").text(toString(localStorage.getItem("cell_c13_inner_text")));
    }
    //D column cells
    else if(d_cells[0] == true)
    {
        $("#cell_d1").text(toString(localStorage.getItem("cell_d1_inner_text")));
    }
    else if(d_cells[1] == true)
    {
        $("#cell_d2").text(toString(localStorage.getItem("cell_d2_inner_text")));
    }
    else if(d_cells[2] == true)
    {
        $("#cell_d3").text(toString(localStorage.getItem("cell_d3_inner_text")));
    }
    else if(d_cells[3] == true)
    {
        $("#cell_d4").text(toString(localStorage.getItem("cell_d4_inner_text")));
    }
    else if(d_cells[4] == true)
    {
        $("#cell_d5").text(toString(localStorage.getItem("cell_d5_inner_text")));
    }
    else if(d_cells[5] == true)
    {
        $("#cell_d6").text(toString(localStorage.getItem("cell_d6_inner_text")));
    }
    else if(d_cells[6] == true)
    {
        $("#cell_d7").text(toString(localStorage.getItem("cell_d7_inner_text")));
    }
    else if(d_cells[7] == true)
    {
        $("#cell_d8").text(toString(localStorage.getItem("cell_d8_inner_text")));
    }
    else if(d_cells[8] == true)
    {
        $("#cell_d9").text(toString(localStorage.getItem("cell_d9_inner_text")));
    }
    else if(d_cells[9] == true)
    {
        $("#cell_d10").text(toString(localStorage.getItem("cell_d10_inner_text")));
    }
    else if(d_cells[10] == true)
    {
        $("#cell_d11").text(toString(localStorage.getItem("cell_d11_inner_text")));
    }
    else if(d_cells[11] == true)
    {
        $("#cell_d12").text(toString(localStorage.getItem("cell_d12_inner_text")));
    }
    else if(d_cells[12] == true)
    {
        $("#cell_d13").text(toString(localStorage.getItem("cell_d13_inner_text")));
    }
    //E column cells
    else if(e_cells[0] == true)
    {
        $("#cell_e1").text(toString(localStorage.getItem("cell_e1_inner_text")));
    }
    else if(e_cells[1] == true)
    {
        $("#cell_e2").text(toString(localStorage.getItem("cell_e2_inner_text")));
    }
    else if(e_cells[2] == true)
    {
        $("#cell_e3").text(toString(localStorage.getItem("cell_e3_inner_text")));
    }
    else if(e_cells[3] == true)
    {
        $("#cell_e4").text(toString(localStorage.getItem("cell_e4_inner_text")));
    }
    else if(e_cells[4] == true)
    {
        $("#cell_e5").text(toString(localStorage.getItem("cell_e5_inner_text")));
    }
    else if(e_cells[5] == true)
    {
        $("#cell_e6").text(toString(localStorage.getItem("cell_e6_inner_text")));
    }
    else if(e_cells[6] == true)
    {
        $("#cell_e7").text(toString(localStorage.getItem("cell_e7_inner_text")));
    }
    else if(e_cells[7] == true)
    {
        $("#cell_e8").text(toString(localStorage.getItem("cell_e8_inner_text")));
    }
    else if(e_cells[8] == true)
    {
        $("#cell_e9").text(toString(localStorage.getItem("cell_e9_inner_text")));
    }
    else if(e_cells[9] == true)
    {
        $("#cell_e10").text(toString(localStorage.getItem("cell_e10_inner_text")));
    }
    else if(e_cells[10] == true)
    {
        $("#cell_e11").text(toString(localStorage.getItem("cell_e11_inner_text")));
    }
    else if(e_cells[11] == true)
    {
        $("#cell_e12").text(toString(localStorage.getItem("cell_e12_inner_text")));
    }
    else if(e_cells[12] == true)
    {
        $("#cell_e13").text(toString(localStorage.getItem("cell_e13_inner_text")));
    }
    //F column cells
    else if(f_cells[0] == true)
    {
        $("#cell_f1").text(toString(localStorage.getItem("cell_f1_inner_text")));
    }
    else if(f_cells[1] == true)
    {
        $("#cell_f2").text(toString(localStorage.getItem("cell_f2_inner_text")));
    }
    else if(f_cells[2] == true)
    {
        $("#cell_f3").text(toString(localStorage.getItem("cell_f3_inner_text")));
    }
    else if(f_cells[3] == true)
    {
        $("#cell_f4").text(toString(localStorage.getItem("cell_f4_inner_text")));
    }
    else if(f_cells[4] == true)
    {
        $("#cell_f5").text(toString(localStorage.getItem("cell_f5_inner_text")));
    }
    else if(f_cells[5] == true)
    {
        $("#cell_f6").text(toString(localStorage.getItem("cell_f6_inner_text")));
    }
    else if(f_cells[6] == true)
    {
        $("#cell_f7").text(toString(localStorage.getItem("cell_f7_inner_text")));
    }
    else if(f_cells[7] == true)
    {
        $("#cell_f8").text(toString(localStorage.getItem("cell_f8_inner_text")));
    }
    else if(f_cells[8] == true)
    {
        $("#cell_f9").text(toString(localStorage.getItem("cell_f9_inner_text")));
    }
    else if(f_cells[9] == true)
    {
        $("#cell_f10").text(toString(localStorage.getItem("cell_f10_inner_text")));
    }
    else if(f_cells[10] == true)
    {
        $("#cell_f11").text(toString(localStorage.getItem("cell_f11_inner_text")));
    }
    else if(f_cells[11] == true)
    {
        $("#cell_f12").text(toString(localStorage.getItem("cell_f12_inner_text")));
    }
    else if(f_cells[12] == true)
    {
        $("#cell_f13").text(toString(localStorage.getItem("cell_f13_inner_text")));
    }
    //G column cells
    else if(g_cells[0] == true)
    {
        $("#cell_g1").text(toString(localStorage.getItem("cell_g1_inner_text")));
    }
    else if(g_cells[1] == true)
    {
        $("#cell_g2").text(toString(localStorage.getItem("cell_g2_inner_text")));
    }
    else if(g_cells[2] == true)
    {
        $("#cell_g3").text(toString(localStorage.getItem("cell_g3_inner_text")));
    }
    else if(g_cells[3] == true)
    {
        $("#cell_g4").text(toString(localStorage.getItem("cell_g4_inner_text")));
    }
    else if(g_cells[4] == true)
    {
        $("#cell_g5").text(toString(localStorage.getItem("cell_g5_inner_text")));
    }
    else if(g_cells[5] == true)
    {
        $("#cell_g6").text(toString(localStorage.getItem("cell_g6_inner_text")));
    }
    else if(g_cells[6] == true)
    {
        $("#cell_g7").text(toString(localStorage.getItem("cell_g7_inner_text")));
    }
    else if(g_cells[7] == true)
    {
        $("#cell_g8").text(toString(localStorage.getItem("cell_g8_inner_text")));
    }
    else if(g_cells[8] == true)
    {
        $("#cell_g9").text(toString(localStorage.getItem("cell_g9_inner_text")));
    }
    else if(g_cells[9] == true)
    {
        $("#cell_g10").text(toString(localStorage.getItem("cell_g10_inner_text")));
    }
    else if(g_cells[10] == true)
    {
        $("#cell_g11").text(toString(localStorage.getItem("cell_g11_inner_text")));
    }
    else if(g_cells[11] == true)
    {
        $("#cell_g12").text(toString(localStorage.getItem("cell_g12_inner_text")));
    }
    else if(g_cells[12] == true)
    {
        $("#cell_g13").text(toString(localStorage.getItem("cell_g13_inner_text")));
    }
    //H column cells
    else if(h_cells[0] == true)
    {
        $("#cell_h1").text(toString(localStorage.getItem("cell_h1_inner_text")));
    }
    else if(h_cells[1] == true)
    {
        $("#cell_h2").text(toString(localStorage.getItem("cell_h2_inner_text")));
    }
    else if(h_cells[2] == true)
    {
        $("#cell_h3").text(toString(localStorage.getItem("cell_h3_inner_text")));
    }
    else if(h_cells[3] == true)
    {
        $("#cell_h4").text(toString(localStorage.getItem("cell_h4_inner_text")));
    }
    else if(h_cells[4] == true)
    {
        $("#cell_h5").text(toString(localStorage.getItem("cell_h5_inner_text")));
    }
    else if(h_cells[5] == true)
    {
        $("#cell_h6").text(toString(localStorage.getItem("cell_h6_inner_text")));
    }
    else if(h_cells[6] == true)
    {
        $("#cell_h7").text(toString(localStorage.getItem("cell_h7_inner_text")));
    }
    else if(h_cells[7] == true)
    {
        $("#cell_h8").text(toString(localStorage.getItem("cell_h8_inner_text")));
    }
    else if(h_cells[8] == true)
    {
        $("#cell_h9").text(toString(localStorage.getItem("cell_h9_inner_text")));
    }
    else if(h_cells[9] == true)
    {
        $("#cell_h10").text(toString(localStorage.getItem("cell_h10_inner_text")));
    }
    else if(h_cells[10] == true)
    {
        $("#cell_h11").text(toString(localStorage.getItem("cell_h11_inner_text")));
    }
    else if(h_cells[11] == true)
    {
        $("#cell_h12").text(toString(localStorage.getItem("cell_h12_inner_text")));
    }
    else if(h_cells[12] == true)
    {
        $("#cell_h13").text(toString(localStorage.getItem("cell_h13_inner_text")));
    }
    //I column cells
    else if(i_cells[0] == true)
    {
        $("#cell_i1").text(toString(localStorage.getItem("cell_i1_inner_text")));
    }
    else if(i_cells[1] == true)
    {
        $("#cell_i2").text(toString(localStorage.getItem("cell_i2_inner_text")));
    }
    else if(i_cells[2] == true)
    {
        $("#cell_i3").text(toString(localStorage.getItem("cell_i3_inner_text")));
    }
    else if(i_cells[3] == true)
    {
        $("#cell_i4").text(toString(localStorage.getItem("cell_i4_inner_text")));
    }
    else if(i_cells[4] == true)
    {
        $("#cell_i5").text(toString(localStorage.getItem("cell_i5_inner_text")));
    }
    else if(i_cells[5] == true)
    {
        $("#cell_i6").text(toString(localStorage.getItem("cell_i6_inner_text")));
    }
    else if(i_cells[6] == true)
    {
        $("#cell_i7").text(toString(localStorage.getItem("cell_i7_inner_text")));
    }
    else if(i_cells[7] == true)
    {
        $("#cell_i8").text(toString(localStorage.getItem("cell_i8_inner_text")));
    }
    else if(i_cells[8] == true)
    {
        $("#cell_i9").text(toString(localStorage.getItem("cell_i9_inner_text")));
    }
    else if(i_cells[9] == true)
    {
        $("#cell_i10").text(toString(localStorage.getItem("cell_i10_inner_text")));
    }
    else if(i_cells[10] == true)
    {
        $("#cell_i11").text(toString(localStorage.getItem("cell_i11_inner_text")));
    }
    else if(i_cells[11] == true)
    {
        $("#cell_i12").text(toString(localStorage.getItem("cell_i12_inner_text")));
    }
    else if(i_cells[12] == true)
    {
        $("#cell_i13").text(toString(localStorage.getItem("cell_i13_inner_text")));
    }
    //J column cells
    else if(j_cells[0] == true)
    {
        $("#cell_j1").text(toString(localStorage.getItem("cell_j1_inner_text")));
    }
    else if(j_cells[1] == true)
    {
        $("#cell_j2").text(toString(localStorage.getItem("cell_j2_inner_text")));
    }
    else if(j_cells[2] == true)
    {
        $("#cell_j3").text(toString(localStorage.getItem("cell_j3_inner_text")));
    }
    else if(j_cells[3] == true)
    {
        $("#cell_j4").text(toString(localStorage.getItem("cell_j4_inner_text")));
    }
    else if(j_cells[4] == true)
    {
        $("#cell_j5").text(toString(localStorage.getItem("cell_j5_inner_text")));
    }
    else if(j_cells[5] == true)
    {
        $("#cell_j6").text(toString(localStorage.getItem("cell_j6_inner_text")));
    }
    else if(j_cells[6] == true)
    {
        $("#cell_j7").text(toString(localStorage.getItem("cell_j7_inner_text")));
    }
    else if(j_cells[7] == true)
    {
        $("#cell_j8").text(toString(localStorage.getItem("cell_j8_inner_text")));
    }
    else if(j_cells[8] == true)
    {
        $("#cell_j9").text(toString(localStorage.getItem("cell_j9_inner_text")));
    }
    else if(j_cells[9] == true)
    {
        $("#cell_j10").text(toString(localStorage.getItem("cell_j10_inner_text")));
    }
    else if(j_cells[10] == true)
    {
        $("#cell_j11").text(toString(localStorage.getItem("cell_j11_inner_text")));
    }
    else if(j_cells[11] == true)
    {
        $("#cell_j12").text(toString(localStorage.getItem("cell_j12_inner_text")));
    }
    else if(j_cells[12] == true)
    {
        $("#cell_j13").text(toString(localStorage.getItem("cell_j13_inner_text")));
    }
    //K column cells
    else if(k_cells[0] == true)
    {
        $("#cell_k1").text(toString(localStorage.getItem("cell_k1_inner_text")));
    }
    else if(k_cells[1] == true)
    {
        $("#cell_k2").text(toString(localStorage.getItem("cell_k2_inner_text")));
    }
    else if(k_cells[2] == true)
    {
        $("#cell_k3").text(toString(localStorage.getItem("cell_k3_inner_text")));
    }
    else if(k_cells[3] == true)
    {
        $("#cell_k4").text(toString(localStorage.getItem("cell_k4_inner_text")));
    }
    else if(k_cells[4] == true)
    {
        $("#cell_k5").text(toString(localStorage.getItem("cell_k5_inner_text")));
    }
    else if(k_cells[5] == true)
    {
        $("#cell_k6").text(toString(localStorage.getItem("cell_k6_inner_text")));
    }
    else if(k_cells[6] == true)
    {
        $("#cell_k7").text(toString(localStorage.getItem("cell_k7_inner_text")));
    }
    else if(k_cells[7] == true)
    {
        $("#cell_k8").text(toString(localStorage.getItem("cell_k8_inner_text")));
    }
    else if(k_cells[8] == true)
    {
        $("#cell_k9").text(toString(localStorage.getItem("cell_k9_inner_text")));
    }
    else if(k_cells[9] == true)
    {
        $("#cell_k10").text(toString(localStorage.getItem("cell_k10_inner_text")));
    }
    else if(k_cells[10] == true)
    {
        $("#cell_k11").text(toString(localStorage.getItem("cell_k11_inner_text")));
    }
    else if(k_cells[11] == true)
    {
        $("#cell_k12").text(toString(localStorage.getItem("cell_k12_inner_text")));
    }
    else if(k_cells[12] == true)
    {
        $("#cell_k13").text(toString(localStorage.getItem("cell_k13_inner_text")));
    }
    //L column cells
    else if(l_cells[0] == true)
    {
        $("#cell_l1").text(toString(localStorage.getItem("cell_l1_inner_text")));
    }
    else if(l_cells[1] == true)
    {
        $("#cell_l2").text(toString(localStorage.getItem("cell_l2_inner_text")));
    }
    else if(l_cells[2] == true)
    {
        $("#cell_l3").text(toString(localStorage.getItem("cell_l3_inner_text")));
    }
    else if(l_cells[3] == true)
    {
        $("#cell_l4").text(toString(localStorage.getItem("cell_l4_inner_text")));
    }
    else if(l_cells[4] == true)
    {
        $("#cell_l5").text(toString(localStorage.getItem("cell_l5_inner_text")));
    }
    else if(l_cells[5] == true)
    {
        $("#cell_l6").text(toString(localStorage.getItem("cell_l6_inner_text")));
    }
    else if(l_cells[6] == true)
    {
        $("#cell_l7").text(toString(localStorage.getItem("cell_l7_inner_text")));
    }
    else if(l_cells[7] == true)
    {
        $("#cell_l8").text(toString(localStorage.getItem("cell_l8_inner_text")));
    }
    else if(l_cells[8] == true)
    {
        $("#cell_l9").text(toString(localStorage.getItem("cell_l9_inner_text")));
    }
    else if(l_cells[9] == true)
    {
        $("#cell_l10").text(toString(localStorage.getItem("cell_l10_inner_text")));
    }
    else if(l_cells[10] == true)
    {
        $("#cell_l11").text(toString(localStorage.getItem("cell_l11_inner_text")));
    }
    else if(l_cells[11] == true)
    {
        $("#cell_l12").text(toString(localStorage.getItem("cell_l12_inner_text")));
    }
    else if(l_cells[12] == true)
    {
        $("#cell_l13").text(toString(localStorage.getItem("cell_l13_inner_text")));
    }
    //M column cells
    else if(m_cells[0] == true)
    {
        $("#cell_m1").text(toString(localStorage.getItem("cell_m1_inner_text")));
    }
    else if(m_cells[1] == true)
    {
        $("#cell_m2").text(toString(localStorage.getItem("cell_m2_inner_text")));
    }
    else if(m_cells[2] == true)
    {
        $("#cell_m3").text(toString(localStorage.getItem("cell_m3_inner_text")));
    }
    else if(m_cells[3] == true)
    {
        $("#cell_m4").text(toString(localStorage.getItem("cell_m4_inner_text")));
    }
    else if(m_cells[4] == true)
    {
        $("#cell_m5").text(toString(localStorage.getItem("cell_m5_inner_text")));
    }
    else if(m_cells[5] == true)
    {
        $("#cell_m6").text(toString(localStorage.getItem("cell_m6_inner_text")));
    }
    else if(m_cells[6] == true)
    {
        $("#cell_m7").text(toString(localStorage.getItem("cell_m7_inner_text")));
    }
    else if(m_cells[7] == true)
    {
        $("#cell_m8").text(toString(localStorage.getItem("cell_m8_inner_text")));
    }
    else if(m_cells[8] == true)
    {
        $("#cell_m9").text(toString(localStorage.getItem("cell_m9_inner_text")));
    }
    else if(m_cells[9] == true)
    {
        $("#cell_m10").text(toString(localStorage.getItem("cell_m10_inner_text")));
    }
    else if(m_cells[10] == true)
    {
        $("#cell_m11").text(toString(localStorage.getItem("cell_m11_inner_text")));
    }
    else if(m_cells[11] == true)
    {
        $("#cell_m12").text(toString(localStorage.getItem("cell_m12_inner_text")));
    }
    else if(m_cells[12] == true)
    {
        $("#cell_m13").text(toString(localStorage.getItem("cell_m13_inner_text")));
    }
    //N column cells
    else if(n_cells[0] == true)
    {
        $("#cell_n1").text(toString(localStorage.getItem("cell_n1_inner_text")));
    }
    else if(n_cells[1] == true)
    {
        $("#cell_n2").text(toString(localStorage.getItem("cell_n2_inner_text")));
    }
    else if(n_cells[2] == true)
    {
        $("#cell_n3").text(toString(localStorage.getItem("cell_n3_inner_text")));
    }
    else if(n_cells[3] == true)
    {
        $("#cell_n4").text(toString(localStorage.getItem("cell_n4_inner_text")));
    }
    else if(n_cells[4] == true)
    {
        $("#cell_n5").text(toString(localStorage.getItem("cell_n5_inner_text")));
    }
    else if(n_cells[5] == true)
    {
        $("#cell_n6").text(toString(localStorage.getItem("cell_n6_inner_text")));
    }
    else if(n_cells[6] == true)
    {
        $("#cell_n7").text(toString(localStorage.getItem("cell_n7_inner_text")));
    }
    else if(n_cells[7] == true)
    {
        $("#cell_n8").text(toString(localStorage.getItem("cell_n8_inner_text")));
    }
    else if(n_cells[8] == true)
    {
        $("#cell_n9").text(toString(localStorage.getItem("cell_n9_inner_text")));
    }
    else if(n_cells[9] == true)
    {
        $("#cell_n10").text(toString(localStorage.getItem("cell_n10_inner_text")));
    }
    else if(n_cells[10] == true)
    {
        $("#cell_n11").text(toString(localStorage.getItem("cell_n11_inner_text")));
    }
    else if(n_cells[11] == true)
    {
        $("#cell_n12").text(toString(localStorage.getItem("cell_n12_inner_text")));
    }
    else if(n_cells[12] == true)
    {
        $("#cell_n13").text(toString(localStorage.getItem("cell_n13_inner_text")));
    }
    //O column cells
    else if(o_cells[0] == true)
    {
        $("#cell_o1").text(toString(localStorage.getItem("cell_o1_inner_text")));
    }
    else if(o_cells[1] == true)
    {
        $("#cell_o2").text(toString(localStorage.getItem("cell_o2_inner_text")));
    }
    else if(o_cells[2] == true)
    {
        $("#cell_o3").text(toString(localStorage.getItem("cell_o3_inner_text")));
    }
    else if(o_cells[3] == true)
    {
        $("#cell_o4").text(toString(localStorage.getItem("cell_o4_inner_text")));
    }
    else if(o_cells[4] == true)
    {
        $("#cell_o5").text(toString(localStorage.getItem("cell_o5_inner_text")));
    }
    else if(o_cells[5] == true)
    {
        $("#cell_o6").text(toString(localStorage.getItem("cell_o6_inner_text")));
    }
    else if(o_cells[6] == true)
    {
        $("#cell_o7").text(toString(localStorage.getItem("cell_o7_inner_text")));
    }
    else if(o_cells[7] == true)
    {
        $("#cell_o8").text(toString(localStorage.getItem("cell_o8_inner_text")));
    }
    else if(o_cells[8] == true)
    {
        $("#cell_o9").text(toString(localStorage.getItem("cell_o9_inner_text")));
    }
    else if(o_cells[9] == true)
    {
        $("#cell_o10").text(toString(localStorage.getItem("cell_o10_inner_text")));
    }
    else if(o_cells[10] == true)
    {
        $("#cell_o11").text(toString(localStorage.getItem("cell_o11_inner_text")));
    }
    else if(o_cells[11] == true)
    {
        $("#cell_o12").text(toString(localStorage.getItem("cell_o12_inner_text")));
    }
    else if(o_cells[12] == true)
    {
        $("#cell_o13").text(toString(localStorage.getItem("cell_o13_inner_text")));
    }    
    //P column cells
    else if(p_cells[0] == true)
    {
        $("#cell_p1").text(toString(localStorage.getItem("cell_p1_inner_text")));
    }
    else if(p_cells[1] == true)
    {
        $("#cell_p2").text(toString(localStorage.getItem("cell_p2_inner_text")));
    }
    else if(p_cells[2] == true)
    {
        $("#cell_p3").text(toString(localStorage.getItem("cell_p3_inner_text")));
    }
    else if(p_cells[3] == true)
    {
        $("#cell_p3").text(toString(localStorage.getItem("cell_p4_inner_text")));
    }
    else if(p_cells[4] == true)
    {
        $("#cell_p4").text(toString(localStorage.getItem("cell_p5_inner_text")));
    }
    else if(p_cells[5] == true)
    {
        $("#cell_p5").text(toString(localStorage.getItem("cell_p6_inner_text")));
    }
    else if(p_cells[6] == true)
    {
        $("#cell_p6").text(toString(localStorage.getItem("cell_p7_inner_text")));
    }
    else if(p_cells[7] == true)
    {
        $("#cell_p7").text(toString(localStorage.getItem("cell_p8_inner_text")));
    }
    else if(p_cells[8] == true)
    {
        $("#cell_p8").text(toString(localStorage.getItem("cell_p9_inner_text")));
    }
    else if(p_cells[9] == true)
    {
        $("#cell_p10").text(toString(localStorage.getItem("cell_p10_inner_text")));
    }
    else if(p_cells[10] == true)
    {
        $("#cell_p11").text(toString(localStorage.getItem("cell_p11_inner_text")));
    }
    else if(p_cells[11] == true)
    {
        $("#cell_p12").text(toString(localStorage.getItem("cell_p12_inner_text")));
    }
    else if(p_cells[12] == true)
    {
        $("#cell_p13").text(toString(localStorage.getItem("cell_p13_inner_text")));
    }    
    //Q column cells
    else if(q_cells[0] == true)
    {
        $("#cell_q1").text(toString(localStorage.getItem("cell_q1_inner_text")));
    }
    else if(q_cells[1] == true)
    {
        $("#cell_q2").text(toString(localStorage.getItem("cell_q2_inner_text")));
    }
    else if(q_cells[2] == true)
    {
        $("#cell_q3").text(toString(localStorage.getItem("cell_q3_inner_text")));
    }
    else if(q_cells[3] == true)
    {
        $("#cell_q4").text(toString(localStorage.getItem("cell_q4_inner_text")));
    }
    else if(q_cells[4] == true)
    {
        $("#cell_q5").text(toString(localStorage.getItem("cell_q5_inner_text")));
    }
    else if(q_cells[5] == true)
    {
        $("#cell_q6").text(toString(localStorage.getItem("cell_q6_inner_text")));
    }
    else if(q_cells[6] == true)
    {
        $("#cell_q7").text(toString(localStorage.getItem("cell_q7_inner_text")));
    }
    else if(q_cells[7] == true)
    {
        $("#cell_q8").text(toString(localStorage.getItem("cell_q8_inner_text")));
    }
    else if(q_cells[8] == true)
    {
        $("#cell_q9").text(toString(localStorage.getItem("cell_q9_inner_text")));
    }
    else if(q_cells[9] == true)
    {
        $("#cell_q10").text(toString(localStorage.getItem("cell_q10_inner_text")));
    }
    else if(q_cells[10] == true)
    {
        $("#cell_q11").text(toString(localStorage.getItem("cell_q11_inner_text")));
    }
    else if(q_cells[11] == true)
    {
        $("#cell_q12").text(toString(localStorage.getItem("cell_q12_inner_text")));
    }
    else if(q_cells[12] == true)
    {
        $("#cell_q13").text(toString(localStorage.getItem("cell_q13_inner_text")));
    }    
    //R column cells
    else if(r_cells[0] == true)
    {
        $("#cell_r1").text(toString(localStorage.getItem("cell_r1_inner_text")));
    }
    else if(r_cells[1] == true)
    {
        $("#cell_r2").text(toString(localStorage.getItem("cell_r2_inner_text")));
    }
    else if(r_cells[2] == true)
    {
        $("#cell_r3").text(toString(localStorage.getItem("cell_r3_inner_text")));
    }
    else if(r_cells[3] == true)
    {
        $("#cell_r4").text(toString(localStorage.getItem("cell_r4_inner_text")));
    }
    else if(r_cells[4] == true)
    {
        $("#cell_r5").text(toString(localStorage.getItem("cell_r5_inner_text")));
    }
    else if(r_cells[5] == true)
    {
        $("#cell_r6").text(toString(localStorage.getItem("cell_r6_inner_text")));
    }
    else if(r_cells[6] == true)
    {
        $("#cell_r7").text(toString(localStorage.getItem("cell_r7_inner_text")));
    }
    else if(r_cells[7] == true)
    {
        $("#cell_r8").text(toString(localStorage.getItem("cell_r8_inner_text")));
    }
    else if(r_cells[8] == true)
    {
        $("#cell_r9").text(toString(localStorage.getItem("cell_r9_inner_text")));
    }
    else if(r_cells[9] == true)
    {
        $("#cell_r10").text(toString(localStorage.getItem("cell_r10_inner_text")));
    }
    else if(r_cells[10] == true)
    {
        $("#cell_r11").text(toString(localStorage.getItem("cell_r11_inner_text")));
    }
    else if(r_cells[11] == true)
    {
        $("#cell_r12").text(toString(localStorage.getItem("cell_r12_inner_text")));
    }
    else if(r_cells[12] == true)
    {
        $("#cell_r13").text(toString(localStorage.getItem("cell_r13_inner_text")));
    }    
    //S column cells
    else if(s_cells[0] == true)
    {
        $("#cell_s1").text(toString(localStorage.getItem("cell_s1_inner_text")));
    }
    else if(s_cells[1] == true)
    {
        $("#cell_s2").text(toString(localStorage.getItem("cell_s2_inner_text")));
    }
    else if(s_cells[2] == true)
    {
        $("#cell_s3").text(toString(localStorage.getItem("cell_s3_inner_text")));
    }
    else if(s_cells[3] == true)
    {
        $("#cell_s4").text(toString(localStorage.getItem("cell_s4_inner_text")));
    }
    else if(s_cells[4] == true)
    {
        $("#cell_s5").text(toString(localStorage.getItem("cell_s5_inner_text")));
    }
    else if(s_cells[5] == true)
    {
        $("#cell_s6").text(toString(localStorage.getItem("cell_s6_inner_text")));
    }
    else if(s_cells[6] == true)
    {
        $("#cell_s7").text(toString(localStorage.getItem("cell_s7_inner_text")));
    }
    else if(s_cells[7] == true)
    {
        $("#cell_s8").text(toString(localStorage.getItem("cell_s8_inner_text")));
    }
    else if(s_cells[8] == true)
    {
        $("#cell_s9").text(toString(localStorage.getItem("cell_s9_inner_text")));
    }
    else if(s_cells[9] == true)
    {
        $("#cell_s10").text(toString(localStorage.getItem("cell_s10_inner_text")));
    }
    else if(s_cells[10] == true)
    {
        $("#cell_s11").text(toString(localStorage.getItem("cell_s11_inner_text")));
    }
    else if(s_cells[11] == true)
    {
        $("#cell_s12").text(toString(localStorage.getItem("cell_s12_inner_text")));
    }
    else if(s_cells[12] == true)
    {
        $("#cell_s13").text(toString(localStorage.getItem("cell_s13_inner_text")));
    }    
    //T column cells
    else if(t_cells[0] == true)
    {
        $("#cell_t1").text(toString(localStorage.getItem("cell_t1_inner_text")));
    }
    else if(t_cells[1] == true)
    {
        $("#cell_t2").text(toString(localStorage.getItem("cell_t2_inner_text")));
    }
    else if(t_cells[2] == true)
    {
        $("#cell_t3").text(toString(localStorage.getItem("cell_t3_inner_text")));
    }
    else if(t_cells[3] == true)
    {
        $("#cell_t4").text(toString(localStorage.getItem("cell_t4_inner_text")));
    }
    else if(t_cells[4] == true)
    {
        $("#cell_t5").text(toString(localStorage.getItem("cell_t5_inner_text")));
    }
    else if(t_cells[5] == true)
    {
        $("#cell_t6").text(toString(localStorage.getItem("cell_t6_inner_text")));
    }
    else if(t_cells[6] == true)
    {
        $("#cell_t7").text(toString(localStorage.getItem("cell_t7_inner_text")));
    }
    else if(t_cells[7] == true)
    {
        $("#cell_t8").text(toString(localStorage.getItem("cell_t8_inner_text")));
    }
    else if(t_cells[8] == true)
    {
        $("#cell_t9").text(toString(localStorage.getItem("cell_t9_inner_text")));
    }
    else if(t_cells[9] == true)
    {
        $("#cell_t10").text(toString(localStorage.getItem("cell_t10_inner_text")));
    }
    else if(t_cells[10] == true)
    {
        $("#cell_t11").text(toString(localStorage.getItem("cell_t11_inner_text")));
    }
    else if(t_cells[11] == true)
    {
        $("#cell_t12").text(toString(localStorage.getItem("cell_t12_inner_text")));
    }
    else if(t_cells[12] == true)
    {
        $("#cell_t13").text(toString(localStorage.getItem("cell_t13_inner_text")));
    }    
    //U column cells
    else if(u_cells[0] == true)
    {
        $("#cell_u1").text(toString(localStorage.getItem("cell_u1_inner_text")));
    }
    else if(u_cells[1] == true)
    {
        $("#cell_u2").text(toString(localStorage.getItem("cell_u2_inner_text")));
    }
    else if(u_cells[2] == true)
    {
        $("#cell_u3").text(toString(localStorage.getItem("cell_u3_inner_text")));
    }
    else if(u_cells[3] == true)
    {
        $("#cell_u4").text(toString(localStorage.getItem("cell_u4_inner_text")));
    }
    else if(u_cells[4] == true)
    {
        $("#cell_u5").text(toString(localStorage.getItem("cell_u5_inner_text")));
    }
    else if(u_cells[5] == true)
    {
        $("#cell_u6").text(toString(localStorage.getItem("cell_u6_inner_text")));
    }
    else if(u_cells[6] == true)
    {
        $("#cell_u7").text(toString(localStorage.getItem("cell_u7_inner_text")));
    }
    else if(u_cells[7] == true)
    {
        $("#cell_u8").text(toString(localStorage.getItem("cell_u8_inner_text")));
    }
    else if(u_cells[8] == true)
    {
        $("#cell_u9").text(toString(localStorage.getItem("cell_u9_inner_text")));
    }
    else if(u_cells[9] == true)
    {
        $("#cell_u10").text(toString(localStorage.getItem("cell_u10_inner_text")));
    }
    else if(u_cells[10] == true)
    {
        $("#cell_u11").text(toString(localStorage.getItem("cell_u11_inner_text")));
    }
    else if(u_cells[11] == true)
    {
        $("#cell_u12").text(toString(localStorage.getItem("cell_u12_inner_text")));
    }
    else if(u_cells[12] == true)
    {
        $("#cell_u13").text(toString(localStorage.getItem("cell_u13_inner_text")));
    }    
    //V column cells
    else if(v_cells[0] == true)
    {
        $("#cell_v1").text(toString(localStorage.getItem("cell_v1_inner_text")));
    }
    else if(v_cells[1] == true)
    {
        $("#cell_v2").text(toString(localStorage.getItem("cell_v2_inner_text")));
    }
    else if(v_cells[2] == true)
    {
        $("#cell_v3").text(toString(localStorage.getItem("cell_v3_inner_text")));
    }
    else if(v_cells[3] == true)
    {
        $("#cell_v4").text(toString(localStorage.getItem("cell_v4_inner_text")));
    }
    else if(v_cells[4] == true)
    {
        $("#cell_v5").text(toString(localStorage.getItem("cell_v5_inner_text")));
    }
    else if(v_cells[5] == true)
    {
        $("#cell_v6").text(toString(localStorage.getItem("cell_v6_inner_text")));
    }
    else if(v_cells[6] == true)
    {
        $("#cell_v7").text(toString(localStorage.getItem("cell_v7_inner_text")));
    }
    else if(v_cells[7] == true)
    {
        $("#cell_v8").text(toString(localStorage.getItem("cell_v8_inner_text")));
    }
    else if(v_cells[8] == true)
    {
        $("#cell_v9").text(toString(localStorage.getItem("cell_v9_inner_text")));
    }
    else if(v_cells[9] == true)
    {
        $("#cell_v10").text(toString(localStorage.getItem("cell_v10_inner_text")));
    }
    else if(v_cells[10] == true)
    {
        $("#cell_v11").text(toString(localStorage.getItem("cell_v11_inner_text")));
    }
    else if(v_cells[11] == true)
    {
        $("#cell_v12").text(toString(localStorage.getItem("cell_v12_inner_text")));
    }
    else if(v_cells[12] == true)
    {
        $("#cell_v13").text(toString(localStorage.getItem("cell_v13_inner_text")));
    }    
    //W column cells
    else if(w_cells[0] == true)
    {
        $("#cell_w1").text(toString(localStorage.getItem("cell_w1_inner_text")));
    }
    else if(w_cells[1] == true)
    {
        $("#cell_w2").text(toString(localStorage.getItem("cell_w2_inner_text")));
    }
    else if(w_cells[2] == true)
    {
        $("#cell_w3").text(toString(localStorage.getItem("cell_w3_inner_text")));
    }
    else if(w_cells[3] == true)
    {
        $("#cell_w4").text(toString(localStorage.getItem("cell_w4_inner_text")));
    }
    else if(w_cells[4] == true)
    {
        $("#cell_w5").text(toString(localStorage.getItem("cell_w5_inner_text")));
    }
    else if(w_cells[5] == true)
    {
        $("#cell_w6").text(toString(localStorage.getItem("cell_w6_inner_text")));
    }
    else if(w_cells[6] == true)
    {
        $("#cell_w7").text(toString(localStorage.getItem("cell_w7_inner_text")));
    }
    else if(w_cells[7] == true)
    {
        $("#cell_w8").text(toString(localStorage.getItem("cell_w8_inner_text")));
    }
    else if(w_cells[8] == true)
    {
        $("#cell_w9").text(toString(localStorage.getItem("cell_w9_inner_text")));
    }
    else if(w_cells[9] == true)
    {
        $("#cell_w10").text(toString(localStorage.getItem("cell_w10_inner_text")));
    }
    else if(w_cells[10] == true)
    {
        $("#cell_w11").text(toString(localStorage.getItem("cell_w11_inner_text")));
    }
    else if(w_cells[11] == true)
    {
        $("#cell_w12").text(toString(localStorage.getItem("cell_w12_inner_text")));
    }
    else if(w_cells[12] == true)
    {
        $("#cell_w13").text(toString(localStorage.getItem("cell_w13_inner_text")));
    }    
    //X column cells
    else if(x_cells[0] == true)
    {
        $("#cell_x1").text(toString(localStorage.getItem("cell_x1_inner_text")));
    }
    else if(x_cells[1] == true)
    {
        $("#cell_x2").text(toString(localStorage.getItem("cell_x2_inner_text")));
    }
    else if(x_cells[2] == true)
    {
        $("#cell_x3").text(toString(localStorage.getItem("cell_x3_inner_text")));
    }
    else if(x_cells[3] == true)
    {
        $("#cell_x4").text(toString(localStorage.getItem("cell_x4_inner_text")));
    }
    else if(x_cells[4] == true)
    {
        $("#cell_x5").text(toString(localStorage.getItem("cell_x5_inner_text")));
    }
    else if(x_cells[5] == true)
    {
        $("#cell_x6").text(toString(localStorage.getItem("cell_x6_inner_text")));
    }
    else if(x_cells[6] == true)
    {
        $("#cell_x7").text(toString(localStorage.getItem("cell_x7_inner_text")));
    }
    else if(x_cells[7] == true)
    {
        $("#cell_x8").text(toString(localStorage.getItem("cell_x8_inner_text")));
    }
    else if(x_cells[8] == true)
    {
        $("#cell_x9").text(toString(localStorage.getItem("cell_x9_inner_text")));
    }
    else if(x_cells[9] == true)
    {
        $("#cell_x10").text(toString(localStorage.getItem("cell_x10_inner_text")));
    }
    else if(x_cells[10] == true)
    {
        $("#cell_x11").text(toString(localStorage.getItem("cell_x11_inner_text")));
    }
    else if(x_cells[11] == true)
    {
        $("#cell_x12").text(toString(localStorage.getItem("cell_x12_inner_text")));
    }
    else if(x_cells[12] == true)
    {
        $("#cell_x13").text(toString(localStorage.getItem("cell_x13_inner_text")));
    }    
    //Y column cells
    else if(y_cells[0] == true)
    {
        $("#cell_y1").text(toString(localStorage.getItem("cell_y1_inner_text")));
    }
    else if(y_cells[1] == true)
    {
        $("#cell_y2").text(toString(localStorage.getItem("cell_y2_inner_text")));
    }
    else if(y_cells[2] == true)
    {
        $("#cell_y3").text(toString(localStorage.getItem("cell_y3_inner_text")));
    }
    else if(y_cells[3] == true)
    {
        $("#cell_y4").text(toString(localStorage.getItem("cell_y4_inner_text")));
    }
    else if(y_cells[4] == true)
    {
        $("#cell_y5").text(toString(localStorage.getItem("cell_y5_inner_text")));
    }
    else if(y_cells[5] == true)
    {
        $("#cell_y6").text(toString(localStorage.getItem("cell_y6_inner_text")));
    }
    else if(y_cells[6] == true)
    {
        $("#cell_y7").text(toString(localStorage.getItem("cell_y7_inner_text")));
    }
    else if(y_cells[7] == true)
    {
        $("#cell_y8").text(toString(localStorage.getItem("cell_y8_inner_text")));
    }
    else if(y_cells[8] == true)
    {
        $("#cell_y9").text(toString(localStorage.getItem("cell_y9_inner_text")));
    }
    else if(y_cells[9] == true)
    {
        $("#cell_y10").text(toString(localStorage.getItem("cell_y10_inner_text")));
    }
    else if(y_cells[10] == true)
    {
        $("#cell_y11").text(toString(localStorage.getItem("cell_y11_inner_text")));
    }
    else if(y_cells[11] == true)
    {
        $("#cell_y12").text(toString(localStorage.getItem("cell_y12_inner_text")));
    }
    else if(y_cells[12] == true)
    {
        $("#cell_y13").text(toString(localStorage.getItem("cell_y13_inner_text")));
    }    
    //Z column cells
    else if(z_cells[0] == true)
    {
        $("#cell_z1").text(toString(localStorage.getItem("cell_z1_inner_text")));
    }
    else if(z_cells[1] == true)
    {
        $("#cell_z2").text(toString(localStorage.getItem("cell_z2_inner_text")));
    }
    else if(z_cells[2] == true)
    {
        $("#cell_z3").text(toString(localStorage.getItem("cell_z3_inner_text")));
    }
    else if(z_cells[3] == true)
    {
        $("#cell_z4").text(toString(localStorage.getItem("cell_z4_inner_text")));
    }
    else if(z_cells[4] == true)
    {
        $("#cell_z5").text(toString(localStorage.getItem("cell_z5_inner_text")));
    }
    else if(z_cells[5] == true)
    {
        $("#cell_z6").text(toString(localStorage.getItem("cell_z6_inner_text")));
    }
    else if(z_cells[6] == true)
    {
        $("#cell_z7").text(toString(localStorage.getItem("cell_z7_inner_text")));
    }
    else if(z_cells[7] == true)
    {
        $("#cell_z8").text(toString(localStorage.getItem("cell_z8_inner_text")));
    }
    else if(z_cells[8] == true)
    {
        $("#cell_z9").text(toString(localStorage.getItem("cell_z9_inner_text")));
    }
    else if(z_cells[9] == true)
    {
        $("#cell_z10").text(toString(localStorage.getItem("cell_z10_inner_text")));
    }
    else if(z_cells[10] == true)
    {
        $("#cell_z11").text(toString(localStorage.getItem("cell_z11_inner_text")));
    }
    else if(z_cells[11] == true)
    {
        $("#cell_z12").text(toString(localStorage.getItem("cell_z12_inner_text")));
    }
    else if(z_cells[12] == true)
    {
        $("#cell_z13").text(toString(localStorage.getItem("cell_z13_inner_text")));
    }
}