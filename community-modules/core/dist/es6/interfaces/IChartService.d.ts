// Type definitions for @ag-grid-community/core v24.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ChartType, ChartOptions } from "./iChartOptions";
import { ChartRef } from "../entities/gridOptions";
import { CreateRangeChartParams, CreatePivotChartParams } from "../gridApi";
import { CellRangeParams } from "./iRangeController";
export interface GetChartImageDataUrlParams {
    type?: string;
}
export interface ChartModel {
    chartId: string;
    cellRange: CellRangeParams;
    chartType: ChartType;
    chartThemeName?: string;
    chartOptions: ChartOptions<any>;
    chart: any;
    getChartImageDataURL: (params: GetChartImageDataUrlParams) => string;
}
export interface IChartService {
    getChartModels(): ChartModel[];
    createRangeChart(params: CreateRangeChartParams): ChartRef | undefined;
    createChartFromCurrentRange(chartType: ChartType): ChartRef | undefined;
    createPivotChart(params: CreatePivotChartParams): ChartRef | undefined;
}
