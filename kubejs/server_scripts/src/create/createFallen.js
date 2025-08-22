//
//
//目录
//移除制造卷簧机、压缩机、振动台、离心机、冲压机、杠杆锤、激光加工机、切片机的原配方
//移除卷簧机制造弹簧的原配方
//添加基础构件制作卷簧机、压缩机、振动台、离心机、冲压机配方
//卷簧机一个长杆（俩铁锭）一个弹簧配方
//压缩机制作压缩耐火粘土并拥有ULV压缩配方(ULV暂未实现)
//振动台从橡胶树苗树叶提取粘性树脂配方
//动力离心机1粘性物质合成2.5生橡胶末和0.1植物球和50胶水配方
//车床冲压机半圆模板合成配方(改用W头了)
//冲压机W头青铜锭制造半管配方（还没有半管）
//杠杆锤青铜，铜，银板制造金属箔配方
//激光加工机、切片机，杠杆锤需要钢铁构件合成修改
//去除覆膜印刷&酚醛树脂印刷电路基板配方
//激光加工机序列制造覆膜印刷&酚醛树脂印刷电路基板配方
//激光加工机替代电子电路序列制造中辊压机的配方更改
//粉碎轮出木浆配方
//动力压缩机制造格雷木板的配方
//
//
//移除制造卷簧机、压缩机、振动台、离心机、冲压机、杠杆锤、激光加工机、切片机的原配方
ServerEvents.recipes(event => {
  event.replaceInput({},'vintageimprovements:iron_spring','gtceu:iron_spring')
    remove_recipes_id(event, [
    "vintageimprovements:craft/centrifuge",
    "vintageimprovements:craft/spring_coiling_machine",
    "vintageimprovements:craft/vacuum_chamber",
    "vintageimprovements:craft/vibrating_table",
    "vintageimprovements:craft/curving_press",
    "vintageimprovements:craft/laser",
    "vintageimprovements:mechanical_crafting/helve_hammer",
    //"vintageimprovements:mechanical_crafting/lathe",
    //"sliceanddice:slicer",
    ])

//移除卷簧机制造弹簧的原配方
    remove_recipes_type(event, [
        "vintageimprovements:coiling",
    ])

//添加基础构件制作卷簧机、压缩机、振动台、离心机、冲压机配方
    //卷簧机
    event.shaped('vintageimprovements:spring_coiling_machine',[
        ['minecraft:iron_ingot','',''],
        ['vintageimprovements:spring_coiling_machine_wheel','create:andesite_casing','ctpp:basic_mechanism'],
        ['minecraft:iron_ingot','','']
    ]);

    //压缩机-2
    event.shaped('vintageimprovements:vacuum_chamber',[
        ['','ctpp:basic_mechanism',''],
        ['gtceu:iron_spring','create:andesite_casing','gtceu:iron_spring'],
        ['gtceu:andesite_alloy_ingot','create:mechanical_pump','gtceu:andesite_alloy_ingot']
    ]);

    //振动台-2
    event.shaped('vintageimprovements:vibrating_table',[
        ['','ctpp:basic_mechanism',''],
        ['gtceu:iron_spring','#minecraft:wooden_slabs','gtceu:iron_spring'],
        ['gtceu:iron_spring','create:mechanical_piston','gtceu:iron_spring'],
    ]);

    //离心机-2
    event.shaped('vintageimprovements:centrifuge',[
        ['gtceu:iron_spring','ctpp:basic_mechanism','gtceu:iron_spring'],
        ['#minecraft:logs','create:shaft','#minecraft:logs'],
        ['gtceu:iron_spring','create:andesite_casing','gtceu:iron_spring'],
    ]);

    //冲压机-2
    event.shaped('vintageimprovements:curving_press',[
        ['','ctpp:basic_mechanism',''],
        ['','create:shaft',''],
        ['gtceu:iron_spring','create:andesite_casing','gtceu:iron_spring'],
    ]);

//卷簧机一个长杆（俩铁锭）一个弹簧配方
    const { vintageimprovements } = event.recipes
    /*vintageimprovements.coiling('gtceu:iron_spring', ['gtceu:long_iron_rod'])*/

//压缩机制作压缩耐火粘土并拥有ULV压缩配方
    vintageimprovements.pressurizing([
    Item.of('gtceu:compressed_fireclay', 1),
    ], [
    Item.of('gtceu:fireclay_dust', 1),
    Fluid.of('minecraft:water', 500),
    ]).heated().secondaryFluidOutput(0)

//振动台从橡胶树苗树叶提取粘性树脂配方
    vintageimprovements.vibrating('gtceu:sticky_resin', [
        'gtceu:rubber_sapling'
    ])
    vintageimprovements.vibrating('gtceu:sticky_resin', [
        'gtceu:rubber_leaves'
    ])

//动力离心机1粘性物质合成2.5生橡胶末和0.1植物球和50胶水配方
    vintageimprovements.centrifugation([
        Item.of('gtceu:raw_rubber_dust'),
        Item.of('gtceu:raw_rubber_dust').withChance(0.5),
        Fluid.of('gtceu:glue',50),
        Item.of('gtceu:raw_rubber_dust').withChance(0.3),
        Item.of('gtceu:plant_ball').withChance(0.1),
    ], [
        Item.of('gtceu:sticky_resin'),
    ]).minimalRPM(256)
    
//车床冲压机半圆模板合成配方(改用W头了)
//冲压机W头青铜锭制造半管配方
    vintageimprovements.curving('gtceu:bronze_small_fluid_pipe', [
    '2x #forge:plates/bronze']).mode(3)

    /*event.shaped('gtceu:bronze_small_fluid_pipe', [
    '   ',
    'ABC',
    '   '
    ], {
    A: '#forge:tools/wrench',
    B: '#forge:ingots/bronze',
    C: '#c:hammers',
    })*/

/*杠杆锤青铜，铜，银板制造金属箔配方
    event.recipes.vintageimprovementsHammering(Item.of('3x gtceu:bronze_foil'),'#forge:plates/bronze',3)
    event.recipes.vintageimprovementsHammering(Item.of('3x gtceu:copper_foil'),'#forge:plates/copper',3)
    event.recipes.vintageimprovementsHammering(Item.of('3x gtceu:silver_foil'),'#forge:plates/silver',3)*/
//激光加工机需要钢铁构件合成修改
    event.shaped('vintageimprovements:laser',[
        ['create:cogwheel','minecraft:redstone_block','create:cogwheel'],
        ['ctpp:steel_mechanism','create:brass_casing','gtceu:iron_spring'],
        ['minecraft:quartz','vintageimprovements:laser_item','minecraft:quartz']
    ]);
//切片机需要钢铁构件合成修改
    // event.shaped('vintageimprovements:laser',[
    //     ['','ctpp:steel_mechanism',''],
    //     ['','create:andesite_casing',''],
    //     ['','create:turntable','']
    // ]);
//杠杆锤需要钢铁构件合成修改
    event.recipes.create.mechanical_crafting('vintageimprovements:helve_hammer',[
        " A FF",
        "ABBCD",
        "AA  E",
    ],{
        A: 'minecraft:iron_block',
        B: '#minecraft:logs',
        C: 'ctpp:steel_mechanism',
        D: 'create:andesite_casing',
        E: 'create:shaft',
        F: 'gtceu:iron_spring',
    })

//去除覆膜印刷&酚醛树脂印刷电路基板配方
    remove_recipes_id(event, [
        'gtceu:shaped/basic_circuit_board',
        'gtceu:shaped/good_circuit_board'
    ])

//激光加工机替代电子电路序列制造中辊压机的配方更改
//替代为↓（从源文件复制修改的）
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'gtceu:phenolic_circuit_board'
  },
  "loops": 2,
  "results": {
      "item": "gtceu:good_electronic_circuit"
    },
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "gtceu:phenolic_circuit_board"
        },
        {
          "item": "gtceu:silver_double_wire"
        }
      ],
      "results": [
        {
          "item": "gtceu:phenolic_circuit_board"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "gtceu:phenolic_circuit_board"
        },
        {
          "item": "gtceu:copper_single_wire"
        }
      ],
      "results": [
        {
          "item": "gtceu:phenolic_circuit_board"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "gtceu:phenolic_circuit_board"
        },
        {
          "item": 'gtceu:basic_electronic_circuit'
        }
      ],
      "results": [
        {
          "item": "gtceu:phenolic_circuit_board"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "gtceu:phenolic_circuit_board"
        },
        {
          "item": 'gtceu:diode'
        }
      ],
      "results": [
        {
          "item": "gtceu:phenolic_circuit_board"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "gtceu:phenolic_circuit_board"
        },
        {
          "amount": 144,
          "fluid": 'gtceu:tin'
        }
      ],
      "results": [
        {
          "item": "gtceu:phenolic_circuit_board"
        }
      ]
    },
    // {
    //     "type": "vintageimprovements:laser_cutting",
    //     "ingredients": [
    //       {
    //         "item": "gtceu:phenolic_circuit_board"
    //       }
    //     ],
    //     "results": [
    //       {
    //         "item": "gtceu:phenolic_circuit_board"
    //       }
    //     ],
    //     "energy": 1000,
    //     "maxChargeRate": 5000
    //   }
    {
      "type": "create_new_age:energising",
      "energy_needed": 10000,
      "ingredients": [
        {
          "item": "gtceu:phenolic_circuit_board"
        }
      ],
      "results": [
        {
          "item": "gtceu:phenolic_circuit_board"
        }
      ]
    }      
  ],
  "transitionalItem": {
    "item": "gtceu:phenolic_circuit_board"
  }
})

//粉碎轮出木浆
event.recipes.create.crushing([Item.of('gtceu:wood_dust').withChance(0.8)], '#minecraft:logs')
event.recipes.create.crushing([Item.of('gtceu:wood_dust').withChance(0.4)], '#minecraft:planks')

//动力压缩机制造格雷木板的配方
event.recipes.vintageimprovements.pressurizing([
    Item.of('gtceu:wood_plate', 1),
    Fluid.of('minecraft:water', 100),
    ], [
    Item.of('gtceu:wood_dust', 1),
    ]).secondaryFluidOutput(0)
  })

//激光加工机序列制造覆膜印刷&酚醛树脂印刷电路基板配方
ServerEvents.recipes(event => {
    let transitional = 'gtceu:wood_plate'
    event.recipes.create.sequenced_assembly([
        'gtceu:resin_printed_circuit_board'
        ], 'gtceu:wood_plate', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_foil']),
    //event.recipes.vintageimprovementsLaserCutting(transitional, transitional).energyCost(10000).maxChargeRate(5000),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:glue', 25)]),
    event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem(transitional)
        .loops(4)
})

ServerEvents.recipes(event => {
    let transitional = 'gtceu:phenolic_circuit_board'
    event.recipes.create.sequenced_assembly([
        'gtceu:phenolic_printed_circuit_board'
        ], 'gtceu:phenolic_circuit_board', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:silver_foil']),
    //event.recipes.vintageimprovementsLaserCutting(transitional, transitional),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:sodium_persulfate', 50)]),
    event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem(transitional)
        .loops(4)
})

ServerEvents.recipes(event => {
    let transitional = 'gtceu:phenolic_circuit_board'
    event.recipes.create.sequenced_assembly([
        'gtceu:phenolic_printed_circuit_board'
        ], 'gtceu:phenolic_circuit_board', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:silver_foil']),
    //event.recipes.vintageimprovementsLaserCutting(transitional, transitional),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:iron_iii_chloride', 25)]),
    event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem(transitional)
        .loops(4)
})


  //批量添加离心机和压缩机配方(ULV以下)
  const $GTRecipeCapabilities=Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeCapabilities');
  ServerEvents.recipes(event =>{
      event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:centrifuge', not:{id:'gtceu:centrifuge/sticky_resin_separation'}}, recipe => { 
          if(EUt(recipe)>8){ return; }
          try { 
              var input = allInputs(recipe);
              var outputs=allOutputs(recipe);
              event.recipes.vintageimprovements.centrifugation(outputs,input)
              .processingTime(recipe.get('duration'))
              .minimalRPM(64);
          } catch (err) {
              
          }
      });
    //   event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:compressor' }, recipe => { 
    //     if(EUt(recipe)>8){ return; }
    //     try { 
    //         var input = allInputs(recipe);
    //         var outputs=allOutputs(recipe);
    //         event.recipes.vintageimprovements.pressurizing(outputs,input)
    //         .processingTime(recipe.get('duration'))
    //     } catch (err) {
            
    //     }
    // });
  })



  function allInputs(recipe){
      var inputList=[];
      recipe.get("inputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
          inputList.push(content.content);
      });
      return inputList;
  }
  function allOutputs(recipe){
      var outputList=[];
      recipe.get("outputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
          outputList.push(toOutput(content));
      } );
      return outputList;
  }
  function EUt(recipe){
      try{
          return Number(recipe.get("tickInputs").get($GTRecipeCapabilities.EU)[0].content);
      }catch(error){
          //真的有sb配方不要电
          return 0;
      }
  }
  function toOutput(content){
      return OutputItem.of(content.content.ingredient).withCount(content.content.count).withChance(content.chance>10000?1:content.chance/10000.0);
  }


 //Melting -> Diamond into 200mb Molten Gold in 90 ticks with Heated condition.
 //这个是橡胶的相关配方
    ServerEvents.recipes(event =>{
      event.recipes.create.mixing('kubejs:rubber_powder', ['gtceu:sulfur_dust', '3x gtceu:raw_rubber_dust']).heated()
      event.recipes.create.mixing('kubejs:rubber_powder', ['alexscaves:sulfur_dust', '3x gtceu:raw_rubber_dust']).heated()
	})
