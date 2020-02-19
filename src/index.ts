import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithConsoleReport('Liverpool');
//const summary = Summary.winsAnalysisWithHtmlReport('Man United', 'report');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
