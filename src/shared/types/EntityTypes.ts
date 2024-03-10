import { UpdateBudgetDto } from "src/modules/budget/dto/update-budget.dto";
import { BudgetEntity } from "src/modules/budget/entities/budget.entity";
import { UpdateLineMarkDto } from "src/modules/line-mark/dto/update-line-mark.dto";
import { LineMarkEntity } from "src/modules/line-mark/entities/line-mark.entity";
import { UpdateLineTypeDto } from "src/modules/line-type/dto/update-line-type.dto";
import { LineTypeEntity } from "src/modules/line-type/entities/line-type.entity";
import { UpdateLineDto } from "src/modules/line/dto/update-line.dto";
import { LineEntity } from "src/modules/line/entities/line.entity";
import { UpdateOtherMaterialDto } from "src/modules/other-material/dto/update-other-material.dto";
import { OtherMaterialEntity } from "src/modules/other-material/entities/other-material.entity";
import { UpdateSystemParamDto } from "src/modules/system-params/dto/update-system-param.dto";
import { SystemParamEntity } from "src/modules/system-params/entities/system-param.entity";

export type IEntityTypes = BudgetEntity | LineEntity | LineMarkEntity | LineTypeEntity | OtherMaterialEntity | SystemParamEntity
export type IUpdateEntities = UpdateBudgetDto | UpdateLineDto | UpdateLineMarkDto | UpdateLineTypeDto | UpdateOtherMaterialDto | UpdateSystemParamDto