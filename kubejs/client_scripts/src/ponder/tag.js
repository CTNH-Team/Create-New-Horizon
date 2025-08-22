Ponder.tags((event) => {
  event.createTag(
    "kubejs:ctnhponder", // 你设定的 PonderTag 的 id, 必须小写
    "create:wrench", // 你设定的 PonderTag 的图标
    "CTNH Ponder", // 你设定的 PonderTag 的名称
    "Ponders on Industrial/Magic Multiblocks in Part of CTNH.", // 你设定的 PonderTag 的介绍
    [
      "gtceu:assembly_line", 
      "ctnhcore:neutron_activator", 
      "mythicbotany:central_rune_holder", 
      "gtceu:coke_oven"
    ] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
  )
})

Ponder.tags((event) => {
  event.createTag(
    "kubejs:kinetic_input", // 你设定的 PonderTag 的 id, 必须小写
    "ctpp:hv_kinetic_input_box", // 你设定的 PonderTag 的图标
    "kinetic hatch", // 你设定的 PonderTag 的名称
    "Ponders on the kinetic hatch in CTPP.", // 你设定的 PonderTag 的介绍
    [
      "ctpp:lv_kinetic_input_box", 
      "ctpp:mv_kinetic_input_box", 
      "ctpp:hv_kinetic_input_box", 
      "ctpp:ev_kinetic_input_box", 
      "ctpp:iv_kinetic_input_box", 
      "ctpp:luv_kinetic_input_box", 
      "ctpp:zpm_kinetic_input_box",
      "ctpp:lv_kinetic_output_box", 
      "ctpp:mv_kinetic_output_box", 
      "ctpp:hv_kinetic_output_box", 
      "ctpp:ev_kinetic_output_box", 
      "ctpp:iv_kinetic_output_box", 
      "ctpp:luv_kinetic_output_box", 
      "ctpp:zpm_kinetic_output_box"
    ] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
  )
})

Ponder.tags((event) => {
  event.createTag(
    "kubejs:mechanical_multiblock", // 你设定的 PonderTag 的 id, 必须小写
    "ctnhcore:mechanical_pressor", // 你设定的 PonderTag 的图标
    "Mechanical multi block machine.", // 你设定的 PonderTag 的名称
    "Ponders on the stress multi block machine in CTNH.", // 你设定的 PonderTag 的介绍
    [
      "ctnhcore:meadow", 
      "ctpp:smashing_factory",
      "ctpp:windmill_control_center",
      "ctnhcore:big_dam", 
      "ctnhcore:mechanical_pressor", 
      "ctnhcore:mechanical_mixer", 
      "ctnhcore:mechanical_centrifuge", 
      "ctnhcore:mechanical_sifter", 
      "ctnhcore:mechanical_extractor", 
      "ctnhcore:mechanical_lathe", 
      "ctnhcore:mechanical_laser"
    ] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
  )
})