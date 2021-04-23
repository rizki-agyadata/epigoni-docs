---
sidebarDepth: 3
---

# Epigoni Script

## Epigoni Environtment

```pascal
function EpigoniAppName: String;
function EpigoniAppTitle: String;
function EpigoniAppSubTitle: String;
function EpigoniAppDesc: String;
function EpigoniUserName: String;
function EpigoniRoleName: String;
function EpigoniRoleList: String;
function EpigoniFirstRoleName: String;
function EpigoniValidRole(RoleName: String): Boolean;
function EpigoniClientID: String;

function ReadConfigItemAsString(Key:string; DefaultValue:string):string; 
function ReadConfigItemAsInteger(Key:string; DefaultValue:integer):integer; 
function ReadConfigItemAsFloat(Key:string; DefaultValue:Double):Double; 
function ReadConfigItemAsBoolean(Key:string; DefaultValue:Boolean):Boolean; 
```
## Action

```pascal
procedure ExecuteAction(ActionName:string);
procedure ExecuteActionWithParameter(ActionName:string; ActionParam:string);
function CreateActionParam(ParamMaps:string; SyncMaps:string; LocateOpen:string; LocateClose:string; Options:string):string;

procedure PrintReport(ActionName:string);
procedure PreviewReport(ActionName:string);
procedure EmailReport(ActionName:string);

function ReportToHTML(ActionName:string):string;
function ReportToHTMLTX(ActionName:string; Params:string):string;
function ReportToHTMLDS(ActionName:string; Dataset:TDataset):string;

function ExecuteExternalFunction(LibraryName:string; FunctionName:string; FunctionParams:string):string;
function ExecuteExternalApplication(CommandLine:string; ShowMode:integer):integer;
function ExecuteExternalApplicationSync(CommandLine:string; ShowMode:integer):integer;

procedure SetStatusBar(Caption:string);
```
 
## Viewer

```pascal
procedure OpenFile(FileName:string); 

procedure ViewPDF(Title:string; Dataset:TDataset; FieldName:string);
procedure ViewPDFFile(Title:string; FileName:string);

procedure EditRTF(Title:string; Dataset:TDataset; FieldName:string);
procedure EditRTFFile(Title:string; FileName:string);
procedure ViewRTF(Title:string; Dataset:TDataset; FieldName:string);
procedure ViewRTFFile(Title:string; FileName:string);
procedure ShowRTF(Title:string; Dataset:TDataset; FieldName:string);
procedure ShowRTFFile(Title:string; FileName:string);

procedure EditHTMLAsRTF(Title:string; Dataset:TDataset; FieldName:string);
procedure EditHTMLFileAsRTF(Title:string; FileName:string);
procedure ViewHTMLAsRTF(Title:string; Dataset:TDataset; FieldName:string);
procedure ViewHTMLFileAsRTF(Title:string; FileName:string);
procedure ShowHTMLAsRTF(Title:string; Dataset:TDataset; FieldName:string);
procedure ShowHTMLFileAsRTF(Title:string; FileName:string);

procedure ShowImageAcquireDialog(Title:string; DataPackage:TDataPackage; DatasetName:string; FieldName:string);  
procedure ShowImageAcquireDialogEx(Title:string; DataPackageName:string; DatasetName:string; FieldName:string; ActiveDataPackage:TDataPackage);
```

## Dialog

```pascal
procedure ShowAppMessage(Message:string);
procedure ShowAppWarning(Message:string);
procedure ShowAppError(Message:string);

function AppConfirmation(StrMessage:string):boolean;
function AppYesNo(StrMessage:string):boolean;
function AppYesNoCancel(StrMessage:string):integer;

function AppInput(ATitle,APrompt:string; var AValue:string):boolean;
function AppInputPassword(ATitle, APrompt:string; var AValue:string):boolean;
function AppInputUppercase(ATitle, APrompt:string; var AValue:string):boolean; 
```

## Notification & Message

```pascal
procedure ShowAppDefaultNotification(Title, Msg: string);
procedure ShowAppNotification(NotificationName: string);
procedure ShowAppCustomNotification(NotificationName, Title, Msg: string);

procedure SendNotificationToAllApp(Title:string; Msg:string);
procedure SendNotification(Title:string; Msg:string);
procedure SendNotificationToGroup(Title:string; Msg:string; RoleName:string);
procedure SendNotificationToUser(Title:string; Msg:string; UserName:string);
procedure SendNotificationEx(Title:string; Msg:string; AppName:string);
procedure SendNotificationToGroupEx(Title:string; Msg:string; AppName, RoleName:string);
procedure SendNotificationToUserEx(Title:string; Msg:string; AppName, UserName:string);

procedure SendMessageOut(Channel:string; Msg:string; ReplyTo:string; Headers:string);
procedure SendMessageToAllApp(MsgType:string; Msg:string);
procedure SendMessage(MsgType:string; Msg:string);
procedure SendMessageToGroup(MsgType:string; Msg:string; RoleName:string);
procedure SendMessageToUser(MsgType:string; Msg:string; UserName:string);
procedure SendMessageEx(MsgType:string; Msg:string; AppName:string);
procedure SendMessageToGroupEx(MsgType:string; Msg:string; AppName, RoleName:string);
procedure SendMessageToUserEx(MsgType:string; Msg:string; AppName, UserName:string);
```

## Network

```pascal
function UDPRequestString(Host:string; Port:integer; Request:string; TimeOut:integer):string;
function TCPRequestString(Host:string; Port:integer; Request:string; TimeOut:integer):string;
function HTTPRequestString(URL:string; TimeOut:integer):string;

procedure SetMailServer(Host:string; Port:integer; User, Password:string; TimeOut:integer);
procedure SetMailMessage(ATitle, Address, Subject, Body, AFromAddress, AFromName, AFromOrg:string);

function SendEmail(Group:string; Sender:string; SendTo:string; CC:string; BCC:string; ReplyTo:string; Subject:string; Body:string):string;
function SendHTMLEmail(Group:string; Sender:string; SendTo:string; CC:string; BCC:string; ReplyTo:string; Subject:string; Body:string):string;
```
 
## File & Folder

```pascal
function SelectFolder(Title:string):string;
function SelectFileToOpen(Filter:string; InitialDir:string):string;
function SelectFileToSave(Filter:string; InitialDir:string):string;
function ChangeFileExt(const FileName: string; const Extension: string): string;
function ChangeFilePath(const FileName: string; const Path: string): string;
function GetTempDirectory:string;

procedure FolderCreate(const Path:string);;
procedure FolderCopy(const SourceDirName, DestDirName: string);;
procedure FolderMove(const SourceDirName, DestDirName: string);;
procedure FolderDelete(const Path:string);
procedure FolderDeleteRecursive(const Path:string);
function FolderExists(const Path:string):Boolean;

function FolderTemp: string;
function FolderHome: string;
function FolderDocuments: string;
function FolderSharedDocuments: string;
function FolderLibrary: string;
function FolderCache: string;
function FolderPublic: string;
function FolderPictures: string;
function FolderSharedPictures: string;
function FolderCamera: string;
function FolderSharedCamera: string;
function FolderMusic: string;
function FolderSharedMusic: string;
function FolderMovies: string;
function FolderSharedMovies: string;
function FolderAlarms: string;
function FolderSharedAlarms: string;
function FolderDownloads: string;
function FolderSharedDownloads: string;
function FolderRingtones: string;
function FolderSharedRingtones: string;

function PathSeparator: string;

procedure FileCopy(const SourceFileName, DestFileName: string; const Overwrite: Boolean);
procedure FileMove(SourceFileName, DestFileName: string);
procedure FileReplace(const SourceFileName, DestinationFileName, DestinationBackupFileName: string);
procedure FileDelete(const Path: string);
function FileExists(const Path: string): Boolean;
```
## Data

```pascal
function CreateDataset(DatasetName:string):TDataset;
function CreateDatasetTX(DatasetName:string; Params:string):TDataset;
function CreateDatasetDS(DatasetName:string; Dataset:TDataset):TDataset;
function CreateDatasetPkg(DatasetName:string; DataPackage:TDataPackage):TDataset;

function CreateMemDataset(DatasetName:string):TDataset;
function CreateMemDatasetTX(DatasetName:string; Params:string):TDataset;
function CreateMemDatasetDS(DatasetName:string; Dataset:TDataset):TDataset;
function CreateMemDatasetPkg(DatasetName:string; DataPackage:TDataPackage):TDataset;

function ExecuteCommand(CommandName:string):boolean;
function ExecuteCommandTX(CommandName:string; Params:string):boolean;
function ExecuteCommandDS(CommandName:string; Dataset:TDataset; Iterate:boolean):boolean;
function ExecuteCommandPkg(CommandName:string; DataPackage:TDataPackage):boolean;

function TextMerge(Data: string; Text : string): String;
function DelimitedTextMerge(Data: string; Text : string): String;
function DatasetTextMerge(Dataset: TDataset; Text : string): String;
function DatasetTextMergeField(Dataset: TDataset; FieldName: string): String;

function CloneDataset(DataPackage: TDataPackage; DatasetName: string): TDataset;

function TryGetSQLValueAsInteger(SQLValueName: string): Integer;
function TryGetSQLValueAsFloat(SQLValueName: string): Double;
function TryGetSQLValueAsString(SQLValueName: string): String;
function TryGetSQLValueAsDateTime(SQLValueName: string): TDateTime;

function GetSQLValueAsInteger(SQLValueName:string):Integer;
function GetSQLValueAsFloat(SQLValueName:string):Double;
function GetSQLValueAsString(SQLValueName:string):String;
function GetSQLValueAsDateTime(SQLValueName:string):TDateTime;

function GetSQLValueTXAsInteger(SQLValueName:string; Params:string):Integer;
function GetSQLValueTXAsFloat(SQLValueName:string; Params:string):Double;
function GetSQLValueTXAsString(SQLValueName:string; Params:string):String;
function GetSQLValueTXAsDateTime(SQLValueName:string; Params:string):TDateTime;

function GetSQLValueDSAsInteger(SQLValueName:string; Params:TDataset):Integer;
function GetSQLValueDSAsFloat(SQLValueName:string; Params:TDataset):Double;
function GetSQLValueDSAsString(SQLValueName:string; Params:TDataset):String;
function GetSQLValueDSAsDateTime(SQLValueName:string; Params:TDataset):TDateTime;

function GetSQLValuePkgAsInteger(SQLValueName:string; Params:TDataPackage):Integer;
function GetSQLValuePkgAsFloat(SQLValueName:string; Params:TDataPackage):Double;
function GetSQLValuePkgAsString(SQLValueName:string; Params:TDataPackage):String;
function GetSQLValuePkgAsDateTime(SQLValueName:string; Params:TDataPackage):TDateTime;

function GetAggregateValueAsInt64(DataPackage:TDataPackage; DatasetName:string; AggregateName:string):Int64;
function GetAggregateValueAsInteger(DataPackage:TDataPackage; DatasetName:string; AggregateName:string):Integer;
function GetAggregateValueAsFloat(DataPackage:TDataPackage; DatasetName:string; AggregateName:string):Double;

procedure RefreshDataset( DataView : TDataView; DatasetName : string);
procedure RefreshRecord( DataView : TDataView; DatasetName : string);

function LocatePkgDataset( DataPackage : TDataPackage; DatasetName : string; KeyDataset : TDataset) : boolean;
function LocatePkgDatasetTX( DataPackage : TDataPackage; DatasetName : string; KeyValues : string) : boolean;
procedure InsertPkgDataset( DataPackage : TDataPackage; DatasetName : string; SourceDatasetName : string; CheckFieldName : string; SourceDataPackage : TDataPackage);
procedure UpdatePkgDataset( DataPackage : TDataPackage; DatasetName : string; SourceDatasetName : string; CheckFieldName : string; SourceDataPackage : TDataPackage);
procedure DeletePkgDataset( DataPackage : TDataPackage; DatasetName : string; SourceDatasetName : string; CheckFieldName : string; SourceDataPackage : TDataPackage);
procedure InsertOrUpdatePkgDataset(DataPackage : TDataPackage; DatasetName : string; SourceDatasetName : string; CheckFieldName : string; SourceDataPackage : TDataPackage);

procedure InsertPkgDatasetFromProcedure( DataPackage : TDataPackage; DatasetName : string; CommandName : string);
procedure InsertPkgDatasetFromProcedureOP( DataPackage : TDataPackage; DatasetName : string; CommandName : string);
procedure UpdatePkgDatasetFromProcedure( DataPackage : TDataPackage; DatasetName : string; CommandName : string; DoPost : boolean);
procedure UpdatePkgDatasetFromProcedureOP( DataPackage : TDataPackage; DatasetName : string; CommandName : string; DoPost : boolean);

function KeyExists( DataPackage : TDataPackage; DatasetName : string) : boolean;

procedure SaveBlobToFile( Field : TField; FileName : string);
procedure LoadBlobFromFile( Field : TField; FileName : string);
```

## Export-Import

```pascal
function SaveStringToFile(Value:string):boolean;
function GetStringFromFile:string;

procedure SaveTextToDataset(Dataset:TDataset; Delimiter:Char; StartLine:integer; Mappings:string);
procedure SaveDatasetToText(Dataset:TDataset; Delimiter:string; Mappings:string);

procedure SaveFixedTextToDataset(Dataset:TDataset; StartLine:integer; Mappings:string);

function SaveDatasetToXML(Dataset:TDataset):boolean;
function LoadXMLToDataset(Dataset:TDataset):boolean;

procedure SaveDBFToDataset(Dataset:TDataset; Mappings:string);
```
### Blob

```pascal
function SaveBlobFieldToFile(Dataset:TDataset; FieldName:string):boolean;
function LoadBlobFieldFromFile(Dataset:TDataset; FieldName:string):boolean;
```

### Excel

```pascal
procedure SaveExcelToDataset(Dataset:TDataset; SheetNo, StartCol, StartRow:integer; Mappings:string);
procedure SaveDatasetToExcel(Dataset:TDataset; SheetNo, StartCol, StartRow:integer; Mappings:string);

procedure SaveExcelToMDDataset(Dataset:TDataset; DetailDataset:TDataset; SheetNo, StartCol, StartRow:integer; Mappings:string; DetailMappings:string);
procedure SaveMDDatasetToExcel(Dataset:TDataset; DetailDataset:TDataset; SheetNo, StartCol, StartRow:integer; ActiveRecordOnly:boolean; Mappings:string; DetailMappings:string);

procedure ZapExcelToDataset(Dataset:TDataset; Mappings:string);
procedure ZapDatasetToExcel(Dataset:TDataset; Mappings:string);

procedure ImportFromExcel(DataPackage:TDataPackage; Dataset:TDataset; ExchangeName:string);
procedure ExportToExcel(DataPackage:TDataPackage; Dataset:TDataset; ExchangeName:string);
```
## String

```pascal
function ClipboardAsText: string;
procedure CopyToClipboard(value: string);

function FormatFloat(const Format: string; Value: Extended): string;
function UpperCase(const S: string): string;
function LowerCase(const S: string): string;

function CompareStr(const S1, S2: string): Integer;
function SameStr(const S1, S2: string): Boolean; overload; inline;
function CompareText(const S1, S2: string): Integer; overload;;
function SameText(const S1, S2: string): boolean;
function Trim(const S: string): string;
function TrimLeft(const S: string): string;
function TrimRight(const S: string): string;
function QuotedStr(const S: string): string;
function IntToStr(Value: Integer): string;
function Int64ToStr(Value: Int64): string;
function UIntToStr(Value: Cardinal): string;
function UInt64ToStr(Value: UInt64): string;
function IntToHex(Value: Integer; Digits: Integer): string;
function Int64ToHex(Value: Int64; Digits: Integer): string;
function UInt64ToHex(Value: UInt64; Digits: Integer): string;
function StrToInt(const S: string): Integer;
function StrToIntDef(const S: string; Default: Integer): Integer;
function TryStrToInt(const S: string; out Value: Integer): Boolean;
function StrToInt64(const S: string): Int64;
function StrToInt64Def(const S: string; const Default: Int64): Int64;
function TryStrToInt64(const S: string; out Value: Int64): Boolean;
function StrToBool(const S: string): Boolean;
function StrToBoolDef(const S: string; const Default: Boolean): Boolean;
function TryStrToBool(const S: string; out Value: Boolean): Boolean;
function BoolToStr(B: Boolean): string;

function ResemblesText(const AText, AOther: string): Boolean;
function ContainsText(const AText, ASubText: string): Boolean;
function StartsText(const ASubText, AText: string): Boolean;
function EndsText(const ASubText, AText: string): Boolean;
function ReplaceText(const AText, AFromText, AToText: string): string;
function MatchText(const AText: string; const AValues: array of string): Boolean;
function IndexText(const AText: string; const AValues: array of string): Integer;
function ContainsStr(const AText, ASubText: string): Boolean;
function StartsStr(const ASubText, AText: string): Boolean;
function EndsStr(const ASubText, AText: string): Boolean;
function ReplaceStr(const AText, AFromText, AToText: string): string;
function MatchStr(const AText: string; const AValues: array of string): Boolean;
function IndexStr(const AText: string; const AValues: array of string): Integer;
function DupeString(const AText: string; ACount: Integer): string;
function ReverseString(const AText: string): string;
function StuffString(const AText: string; AStart, ALength: Cardinal; const ASubText: string): string;
function RandomFrom(const AValues: array of string): string;
function IfThen(AValue: Boolean; const ATrue: string; AFalse: string): string;
function LeftStr(const AText: String; const ACount: Integer): String;
function RightStr(const AText: String; const ACount: Integer): String;
function MidStr(const AText: String; const AStart, ACount: Integer): String;
function PosEx(const SubStr, S: string; Offset: Integer): Integer;
function Soundex(const AText: string; ALength: Integer): string;
function SoundexInt(const AText: string; ALength: Integer): Integer;
function DecodeSoundexInt(AValue: Integer): string;
function SoundexWord(const AText: string): Word;
function DecodeSoundexWord(AValue: Word): string;
function SoundexSimilar(const AText, AOther: string; ALength: Integer): Boolean;
function SoundexCompare(const AText, AOther: string; ALength: Integer): Integer;
function SoundexProc(const AText, AOther: string): Boolean;
```

## String Composer

```pascal
function KeyValueAddInteger(KeyValue:string; Key:string; Value:integer):string;
function KeyValueAddFloat(KeyValue:string; Key:string; Value:double):string;
function KeyValueAddString(KeyValue:string; Key:string; Value:string):string;
function KeyValueAddStringAsBase64(KeyValue:string; Key:string; Value:string):string;
function KeyValueAddBoolean(KeyValue:string; Key:string; Value:boolean):string;
function KeyValueAddDate(KeyValue:string; Key:string; Value:TDateTime):string;
function KeyValueAddTime(KeyValue:string; Key:string; Value:TDateTime):string;
function KeyValueAddTimeEx(KeyValue:string; Key:string; Value:TDateTime):string;
function KeyValueAddDateTime(KeyValue:string; Key:string; Value:TDateTime):string;
function KeyValueAddTimeStamp(KeyValue:string; Key:string; Value:TDateTime):string;

function KeyValueGetInteger(KeyValue:string; Key:string):integer;
function KeyValueGetFloat(KeyValue:string; Key:string):double;
function KeyValueGetString(KeyValue:string; Key:string):string;
function KeyValueGetStringFromBase64(KeyValue:string; Key:string):string;
function KeyValueGetBoolean(KeyValue:string; Key:string):Boolean;
function KeyValueGetDate(KeyValue:string; Key:string):TDateTime;
function KeyValueGetTime(KeyValue:string; Key:string):TDateTime;
function KeyValueGetTimeEx(KeyValue:string; Key:string):TDateTime;
function KeyValueGetDateTime(KeyValue:string; Key:string):TDateTime;
function KeyValueGetTimeStamp(KeyValue:string; Key:string):TDateTime;

function JSONKeyValueAddInteger(KeyValue:string; Key:string; Value:integer):string;
function JSONKeyValueAddFloat(KeyValue:string; Key:string; Value:double):string;
function JSONKeyValueAddString(KeyValue:string; Key:string; Value:string):string;
function JSONKeyValueAddStringAsBase64(KeyValue:string; Key:string; Value:string):string;
function JSONKeyValueAddBoolean(KeyValue:string; Key:string; Value:boolean):string;
function JSONKeyValueAddDate(KeyValue:string; Key:string; Value:TDateTime):string;
function JSONKeyValueAddTime(KeyValue:string; Key:string; Value:TDateTime):string;
function JSONKeyValueAddTimeEx(KeyValue:string; Key:string; Value:TDateTime):string;
function JSONKeyValueAddDateTime(KeyValue:string; Key:string; Value:TDateTime):string;
function JSONKeyValueAddTimeStamp(KeyValue:string; Key:string; Value:TDateTime):string;

function JSONKeyValueGetInteger(KeyValue:string; Key:string):integer;
function JSONKeyValueGetFloat(KeyValue:string; Key:string):double;
function JSONKeyValueGetString(KeyValue:string; Key:string):string;
function JSONKeyValueGetStringFromBase64(KeyValue:string; Key:string):string;
function JSONKeyValueGetBoolean(KeyValue:string; Key:string):Boolean;
function JSONKeyValueGetDate(KeyValue:string; Key:string):TDateTime;
function JSONKeyValueGetTime(KeyValue:string; Key:string):TDateTime;
function JSONKeyValueGetTimeEx(KeyValue:string; Key:string):TDateTime;
function JSONKeyValueGetDateTime(KeyValue:string; Key:string):TDateTime;
function JSONKeyValueGetTimeStamp(KeyValue:string; Key:string):TDateTime;

function XStringAddInteger(Text:string; Value: integer; Delimiter:Char): string;
function XStringAddString(Text:string; Value: string; Delimiter:Char): string;
function XStringAddStringAsBase64(Text:string; Value: string; Delimiter:Char): string;
function XStringAddDate(Text:string; Value: TDateTime; Delimiter:Char): string;
function XStringAddDateTime(Text:string; Value: TDateTime; Delimiter:Char): string;
function XStringAddTime(Text:string; Value: TDateTime; Delimiter:Char): string;
function XStringAddTimeEx(Text:string; Value: TDateTime; Delimiter:Char): string;
function XStringAddTimeStamp(Text:string; Value: TDateTime; Delimiter:Char): string;

function XStringGetNext(Text:string; Delimiters:TDelimiters; var Index: integer):string;
function XStringGetRest(Text:string; var Index:integer): string;
function XStringGetBoolean(Text:string; Delimiters:TDelimiters; var Index:integer): boolean;
function XStringGetFloat(Text:string; Delimiters:TDelimiters; var Index:integer): double;
function XStringGetInteger(Text:string; Delimiters:TDelimiters; var Index:integer):integer;
function XStringGetString(Text:string; Delimiters:TDelimiters; var Index:integer): string;
function XStringGetStringFromBase64(Text:string; Delimiters:TDelimiters; var Index:integer): string;
function XStringGetValidDateTime(Text:string; Delimiters:TDelimiters; var Index:integer): TDateTime;
function XStringGetValidTime(Text:string; Delimiters:TDelimiters; var Index:integer): TDateTime;
function XStringGetDate(Text:string; Delimiters:TDelimiters; var Index:integer): TDateTime;
function XStringGetDateTime(Text:string; Delimiters:TDelimiters; var Index:integer): TDateTime;
function XStringGetTime(Text:string; Delimiters:TDelimiters; var Index:integer): TDateTime;
function XStringGetTimeEx(Text:string; Delimiters:TDelimiters; var Index:integer): TDateTime;
function XStringGetTimeStamp(Text:string; Delimiters:TDelimiters; var Index:integer): TDateTime;
function XStringSkip(Text:string; Delimiters:TDelimiters; Count: integer; var Index:integer):boolean;

TZapStringList=class(TStringList)
public
  function AddInteger(Key:string; Value:integer):TZapStringList;
  function AddFloat(Key:string; Value:double):TZapStringList;
  function AddString(Key:string; Value:string):TZapStringList;
  function AddStringAsBase64(Key:string; Value:string):TZapStringList;
  function AddBoolean(Key:string; Value:boolean):TZapStringList;
  function AddDate(Key:string; Value:TDateTime):TZapStringList;
  function AddDateTime(Key:string; Value:TDateTime):TZapStringList;
  function AddTimeStamp(Key:string; Value:TDateTime):TZapStringList;
  function AddTime(Key:string; Value:TTime):TZapStringList;
  function AddTimeEx(Key:string; Value:TTime):TZapStringList;
  function SetInteger(Key:string; Value:integer):TZapStringList;
  function SetFloat(Key:string; Value:double):TZapStringList;
  function SetString(Key:string; Value:string):TZapStringList;
  function SetStringAsBase64(Key:string; Value:string):TZapStringList;
  function SetBoolean(Key:string; Value:boolean):TZapStringList;
  function SetDate(Key:string; Value:TDateTime):TZapStringList;
  function SetDateTime(Key:string; Value:TDateTime):TZapStringList;
  function SetTimeStamp(Key:string; Value:TDateTime):TZapStringList;
  function SetTime(Key:string; Value:TTime):TZapStringList;
  function SetTimeEx(Key:string; Value:TTime):TZapStringList;
  function GetInteger(Key:string):integer;
  function GetFloat(Key:string):double;
  function GetString(Key:string):string;
  function GetStringFromBase64(Key:string):string;
  function GetBoolean(Key:string):boolean;
  function GetValidDateTime(Key:string):TDateTime;
  function GetValidTime(Key:string):TTime;
  function GetDate(Key:string):TDateTime;
  function GetDateTime(Key:string):TDateTime;
  function GetTimeStamp(Key:string):TDateTime;
  function GetTime(Key:string):TTime;
  function GetTimeEx(Key:string):TTime;
  function TryGetInteger(Key:string; DefaultValue:integer):integer;
  function TryGetFloat(Key:string; DefaultValue:double):double;
  function TryGetString(Key:string; DefaultValue:string):string;
  function TryGetStringFromBase64(Key:string; DefaultValue:string):string;
  function TryGetBoolean(Key:string; DefaultValue:boolean):boolean;
  function TryGetValidDateTime(Key:string; DefaultValue:TDateTime):TDateTime;
  function TryGetValidTime(Key:string; DefaultValue:TTime):TTime;
  function TryGetDate(Key:string; DefaultValue:TDateTime):TDateTime;
  function TryGetDateTime(Key:string; DefaultValue:TDateTime):TDateTime;
  function TryGetTimeStamp(Key:string; DefaultValue:TDateTime):TDateTime;
  function TryGetTime(Key:string; DefaultValue:TTime):TTime;
  function TryGetTimeEx(Key:string; DefaultValue:TTime):TTime;
  property AsString:string;
end;
```

## Date & Time

```pascal
function EncodeDate(Year, Month, Day: Word): TDateTime;
function EncodeTime(Hour, Min, Sec, MSec: Word): TDateTime;
procedure DecodeDate(const DateTime: TDateTime; var Year, Month, Day: Word);
procedure DecodeTime(const DateTime: TDateTime; var Hour, Min, Sec, MSec: Word);
function DayOfWeek(const DateTime: TDateTime): Word;
function Date: TDateTime;
function Time: TDateTime;
function Now: TDateTime;

function DateToStr(D: TDateTime): String;
function StrToDate(const s: String): TDateTime;
function FormatDateTime(const fmt: String; D: TDateTime): String;

function DateOf(const AValue: TDateTime): TDateTime;
function TimeOf(const AValue: TDateTime): TDateTime; 

function IsInLeapYear(const AValue: TDateTime): Boolean;
function IsPM(const AValue: TDateTime): Boolean;

function IsValidDate(const AYear, AMonth, ADay: Word): Boolean;
function IsValidTime(const AHour, AMinute, ASecond, AMilliSecond: Word): Boolean;
function IsValidDateTime(const AYear, AMonth, ADay, AHour, AMinute, ASecond, AMilliSecond: Word): Boolean;
function IsValidDateDay(const AYear, ADayOfYear: Word): Boolean;
function IsValidDateWeek(const AYear, AWeekOfYear, ADayOfWeek: Word): Boolean;
function IsValidDateMonthWeek(const AYear, AMonth, AWeekOfMonth, ADayOfWeek: Word): Boolean;

function WeeksInYear(const AValue: TDateTime): Word;
function WeeksInAYear(const AYear: Word): Word;

function DaysInYear(const AValue: TDateTime): Word;
function DaysInAYear(const AYear: Word): Word;
function DaysInMonth(const AValue: TDateTime): Word;
function DaysInAMonth(const AYear, AMonth: Word): Word;

function Today: TDateTime;
function Yesterday: TDateTime;
function Tomorrow: TDateTime;
function IsToday(const AValue: TDateTime): Boolean;
function IsSameDay(const AValue, ABasis: TDateTime): Boolean;

function YearOf(const AValue: TDateTime): Word;
function MonthOf(const AValue: TDateTime): Word;
function WeekOf(const AValue: TDateTime): Word;
function DayOf(const AValue: TDateTime): Word;
function HourOf(const AValue: TDateTime): Word;
function MinuteOf(const AValue: TDateTime): Word;
function SecondOf(const AValue: TDateTime): Word;
function MilliSecondOf(const AValue: TDateTime): Word;

function StartOfTheYear(const AValue: TDateTime): TDateTime;
function EndOfTheYear(const AValue: TDateTime): TDateTime;
function StartOfAYear(const AYear: Word): TDateTime;
function EndOfAYear(const AYear: Word): TDateTime;

function StartOfTheMonth(const AValue: TDateTime): TDateTime;
function EndOfTheMonth(const AValue: TDateTime): TDateTime;
function StartOfAMonth(const AYear, AMonth: Word): TDateTime;
function EndOfAMonth(const AYear, AMonth: Word): TDateTime;

function StartOfTheWeek(const AValue: TDateTime): TDateTime;
function EndOfTheWeek(const AValue: TDateTime): TDateTime;
function StartOfAWeek(const AYear, AWeekOfYear: Word; const ADayOfWeek: Word): TDateTime;
function EndOfAWeek(const AYear, AWeekOfYear: Word; const ADayOfWeek: Word): TDateTime;

function StartOfTheDay(const AValue: TDateTime): TDateTime;
function EndOfTheDay(const AValue: TDateTime): TDateTime;
function StartOfADay(const AYear, AMonth, ADay: Word): TDateTime; overload;
function EndOfADay(const AYear, AMonth, ADay: Word): TDateTime; overload;
function StartOfADay(const AYear, ADayOfYear: Word): TDateTime; overload;
function EndOfADay(const AYear, ADayOfYear: Word): TDateTime; overload;

function MonthOfTheYear(const AValue: TDateTime): Word;
function WeekOfTheYear(const AValue: TDateTime): Word;
function WeekOfTheYear2(const AValue: TDateTime; var AYear: Word): Word;
function DayOfTheYear(const AValue: TDateTime): Word;
function HourOfTheYear(const AValue: TDateTime): Word;
function MinuteOfTheYear(const AValue: TDateTime): LongWord;
function SecondOfTheYear(const AValue: TDateTime): LongWord;
function MilliSecondOfTheYear(const AValue: TDateTime): Int64;

function WeekOfTheMonth(const AValue: TDateTime): Word;
function WeekOfTheMonth2(const AValue: TDateTime; var AYear, AMonth: Word): Word;
function DayOfTheMonth(const AValue: TDateTime): Word;
function HourOfTheMonth(const AValue: TDateTime): Word;
function MinuteOfTheMonth(const AValue: TDateTime): Word;
function SecondOfTheMonth(const AValue: TDateTime): LongWord;
function MilliSecondOfTheMonth(const AValue: TDateTime): LongWord;

function DayOfTheWeek(const AValue: TDateTime): Word;
function HourOfTheWeek(const AValue: TDateTime): Word;
function MinuteOfTheWeek(const AValue: TDateTime): Word;
function SecondOfTheWeek(const AValue: TDateTime): LongWord;
function MilliSecondOfTheWeek(const AValue: TDateTime): LongWord;

function HourOfTheDay(const AValue: TDateTime): Word;
function MinuteOfTheDay(const AValue: TDateTime): Word;
function SecondOfTheDay(const AValue: TDateTime): LongWord;
function MilliSecondOfTheDay(const AValue: TDateTime): LongWord;

function MinuteOfTheHour(const AValue: TDateTime): Word;
function SecondOfTheHour(const AValue: TDateTime): Word;
function MilliSecondOfTheHour(const AValue: TDateTime): LongWord;

function SecondOfTheMinute(const AValue: TDateTime): Word;
function MilliSecondOfTheMinute(const AValue: TDateTime): LongWord;

function MilliSecondOfTheSecond(const AValue: TDateTime): Word;
function WithinPastYears(const ANow, AThen: TDateTime; const AYears: Integer): Boolean;
function WithinPastMonths(const ANow, AThen: TDateTime; const AMonths: Integer): Boolean;
function WithinPastWeeks(const ANow, AThen: TDateTime; const AWeeks: Integer): Boolean;
function WithinPastDays(const ANow, AThen: TDateTime; const ADays: Integer): Boolean;
function WithinPastHours(const ANow, AThen: TDateTime; const AHours: Int64): Boolean;
function WithinPastMinutes(const ANow, AThen: TDateTime; const AMinutes: Int64): Boolean;
function WithinPastSeconds(const ANow, AThen: TDateTime; const ASeconds: Int64): Boolean;
function WithinPastMilliSeconds(const ANow, AThen: TDateTime; const AMilliSeconds: Int64): Boolean;

function YearsBetween(const ANow, AThen: TDateTime): Integer;
function MonthsBetween(const ANow, AThen: TDateTime): Integer;
function WeeksBetween(const ANow, AThen: TDateTime): Integer;
function DaysBetween(const ANow, AThen: TDateTime): Integer;
function HoursBetween(const ANow, AThen: TDateTime): Int64;
function MinutesBetween(const ANow, AThen: TDateTime): Int64;
function SecondsBetween(const ANow, AThen: TDateTime): Int64;
function MilliSecondsBetween(const ANow, AThen: TDateTime): Int64;

function YearSpan(const ANow, AThen: TDateTime): Double;
function MonthSpan(const ANow, AThen: TDateTime): Double;
function WeekSpan(const ANow, AThen: TDateTime): Double;
function DaySpan(const ANow, AThen: TDateTime): Double;
function HourSpan(const ANow, AThen: TDateTime): Double;
function MinuteSpan(const ANow, AThen: TDateTime): Double;
function SecondSpan(const ANow, AThen: TDateTime): Double;
function MilliSecondSpan(const ANow, AThen: TDateTime): Double;

function IncYear(const AValue: TDateTime; const ANumberOfYears: Integer): TDateTime;
function IncMonth(const AValue: TDateTime; NumberOfMonths: Integer): TDateTime;
function IncWeek(const AValue: TDateTime; const ANumberOfWeeks: Integer): TDateTime;
function IncDay(const AValue: TDateTime; const ANumberOfDays: Integer): TDateTime;
function IncHour(const AValue: TDateTime; const ANumberOfHours: Int64): TDateTime;
function IncMinute(const AValue: TDateTime; const ANumberOfMinutes: Int64): TDateTime;
function IncSecond(const AValue: TDateTime; const ANumberOfSeconds: Int64): TDateTime;
function IncMilliSecond(const AValue: TDateTime; const ANumberOfMilliSeconds: Int64): TDateTime;

function EncodeDateTime(const AYear, AMonth, ADay, AHour, AMinute, ASecond, AMilliSecond: Word): TDateTime;
procedure DecodeDateTime(const AValue: TDateTime; out AYear, AMonth, ADay, AHour, AMinute, ASecond, AMilliSecond: Word); 

function RecodeYear(const AValue: TDateTime; const AYear: Word): TDateTime;
function RecodeMonth(const AValue: TDateTime; const AMonth: Word): TDateTime;
function RecodeDay(const AValue: TDateTime; const ADay: Word): TDateTime;
function RecodeHour(const AValue: TDateTime; const AHour: Word): TDateTime;
function RecodeMinute(const AValue: TDateTime; const AMinute: Word): TDateTime;
function RecodeSecond(const AValue: TDateTime; const ASecond: Word): TDateTime;
function RecodeMilliSecond(const AValue: TDateTime; const AMilliSecond: Word): TDateTime;

function RecodeDate(const AValue: TDateTime; const AYear, AMonth, ADay: Word): TDateTime;
function RecodeTime(const AValue: TDateTime; const AHour, AMinute, ASecond, AMilliSecond: Word): TDateTime;
function RecodeDateTime(const AValue: TDateTime; const AYear, AMonth, ADay, AHour, AMinute, ASecond, AMilliSecond: Word): TDateTime;

function TryRecodeDateTime(const AValue: TDateTime; const AYear, AMonth, ADay, AHour, AMinute, ASecond, AMilliSecond: Word; out AResult: TDateTime): Boolean;
```

## Math

### Trigonometric functions

```pascal
function Sin(const X: Double): Double;
function SinEx(const X: Extended): Extended;
function Cos(const X: Double): Double;
function CosEx(const X: Extended): Extended;
function Tangent(const X: Double): Double;
function TangentEx(const X: Extended): Extended;
function ArcTan(const X: Double): Double;
function ArcTanEx(const X: Extended): Extended;
procedure SineCosine(const X: Double; var Sin, Cos: Double);
procedure SineCosineEx(const X: Extended; var Sin, Cos: Extended);

function ArcCos(const X : Double) : Double;
function ArcCosEx(const X : Extended) : Extended;
function ArcSin(const X : Double) : Double;  
function ArcSinEx(const X : Extended) : Extended;
function ArcTan2(const Y, X: Double): Double;
function ArcTan2Ex(const Y, X: Extended): Extended;
procedure SinCos(const Theta: Double; var Sin, Cos: Double);
procedure SinCosEx(const Theta: Extended; var Sin, Cos: Extended);
function Tan(const X: Double): Double;
function TanEx(const X: Extended): Extended;
function Cotan(const X: Double): Double;
function CotanEx(const X: Extended): Extended;
function Secant(const X: Double): Double;
function SecantEx(const X: Extended): Extended;
function Cosecant(const X: Double): Double;
function CosecantEx(const X: Extended): Extended;
function Hypot(const X, Y: Double): Double;
function HypotEx(const X, Y: Extended): Extended;
```

### Angle unit conversion routines 

```pascal
function RadToDeg(const Radians: Double): Double;
function RadToDegEx(const Radians: Extended): Extended;
function RadToGrad(const Radians: Double): Double;
function RadToGradEx(const Radians: Extended): Extended;
function RadToCycle(const Radians: Double): Double;
function RadToCycleEx(const Radians: Extended): Extended;
 
function DegToRad(const Degrees: Double): Double;
function DegToRadEx(const Degrees: Extended): Extended;
function DegToGrad(const Degrees: Double): Double;
function DegToGradEx(const Degrees: Extended): Extended;
function DegToCycle(const Degrees: Double): Double;
function DegToCycleEx(const Degrees: Extended): Extended;

function GradToRad(const Grads: Double): Double;
function GradToRadEx(const Grads: Extended): Extended;
function GradToDeg(const Grads: Double): Double;
function GradToDegEx(const Grads: Extended): Extended;
function GradToCycle(const Grads: Double): Double;
function GradToCycleEx(const Grads: Extended): Extended;
function CycleToRad(const Cycles: Double): Double;
function CycleToRadEx(const Cycles: Extended): Extended;
function CycleToDeg(const Cycles: Double): Double;
function CycleToDegEx(const Cycles: Extended): Extended;
function CycleToGrad(const Cycles: Double): Double;
function CycleToGradEx(const Cycles: Extended): Extended;
```

### Hyperbolic functions and inverses

```pascal 
function Cot(const X: Double): Double;
function CotEx(const X: Extended): Extended;
function Sec(const X: Double): Double;
function SecEx(const X: Extended): Extended;
function Csc(const X: Double): Double;
function CscEx(const X: Extended): Extended;
function Cosh(const X: Double): Double;
function CoshEx(const X: Extended): Extended;
function Sinh(const X: Double): Double;
function SinhEx(const X: Extended): Extended;
function Tanh(const X: Double): Double;
function TanhEx(const X: Extended): Extended;
function CotH(const X: Double): Double;
function CotHEx(const X: Extended): Extended;
function SecH(const X: Double): Double;
function SecHEx(const X: Extended): Extended;
function CscH(const X: Double): Double;
function CscHEx(const X: Extended): Extended;
function ArcCot(const X: Double): Double;
function ArcCotEx(const X: Extended): Extended;
function ArcSec(const X: Double): Double;
function ArcSecEx(const X: Extended): Extended;
function ArcCsc(const X: Double): Double;
function ArcCscEx(const X: Extended): Extended;
function ArcCosh(const X: Double): Double;
function ArcCoshEx(const X: Extended): Extended;
function ArcSinh(const X: Double): Double;
function ArcSinhEx(const X: Extended): Extended;
function ArcTanh(const X: Double): Double;
function ArcTanhEx(const X: Extended): Extended;
function ArcCotH(const X: Double): Double;
function ArcCotHEx(const X: Extended): Extended;
function ArcSecH(const X: Double): Double;
function ArcSecHEx(const X: Extended): Extended;
function ArcCscH(const X: Double): Double;
function ArcCscHEx(const X: Extended): Extended;
```

### Logarithmic functions 

```pascal
function Ln(const X: Double): Double;
function LnEx(const X: Extended): Extended;
function LnXPlus1(const X: Double): Double;
function LnXPlus1Ex(const X: Extended): Extended;

function LnXP1(const X: Double): Double;
function LnXP1Ex(const X: Extended): Extended;
function Log10(const X: Double): Double;
function Log10Ex(const X: Extended): Extended;
function Log2(const X: Double): Double;
function Log2Ex(const X: Extended): Extended;
function LogN(const Base, X: Double): Double;
function LogNEx(const Base, X: Extended): Extended;
```

### Exponential functions

```pascal
function Sqrt(const X: Double): Double;
function SqrtEx(const X: Extended): Extended;

function Exp(const X: Double): Double;
function ExpEx(const X: Extended): Extended;
function ExpMinus1(const X: Double): Double;
function ExpMinus1Ex(const X: Extended): Extended;

{ IntPower: Raise base to an integral power.  Fast. }

function IntPower(const Base: Double; const Exponent: Integer): Double;
function IntPowerEx(const Base: Extended; const Exponent: Integer): Extended;

{ Raise base to any power.
  For fractional exponents, or |exponents| > MaxInt, base must be > 0. }

function Power(const Base, Exponent: Double): Double;
function PowerEx(const Base, Exponent: Extended): Extended;
```

### Miscellaneous Routines

```pascal
function Int(const X: Double): Double;
function IntEx(const X: Extended): Extended;
  
function Frac(const X: Double): Double;
function FracEx(const X: Extended): Extended;

{ Separates the mantissa and exponent of X. }

procedure Frexp(const X: Extended; var Mantissa: Extended; var Exponent: Integer);

{ Returns X*2**P }

function Ldexp(const X: Double; const P: Integer): Double;
function LdexpEx(const X: Extended; const P: Integer): Extended;

{ Smallest integer >= X, |X| < MaxInt }

function Ceil(const X: Double): Integer;
function CeilEx(const X: Extended): Integer;

{ Largest integer <= X,  |X| < MaxInt }

function Floor(const X: Double): Integer;
function FloorEx(const X: Extended): Integer;

{ Round to a specific digit or power of ten }
{ ADigit has a valid range of 20 to -20 }

function RoundTo(const AValue: Extended; const ADigit: integer): Extended;

{ This variation of the RoundTo function follows the asymmetric arithmetic
  rounding algorithm (if Frac(X) < .5 then return X else return X + 1).  
{ ADigit has a valid range of 37 to -37 }

function SimpleRoundTo(const AValue: Double; const ADigit: integer): Double;
function SimpleRoundToEx(const AValue: Extended; const ADigit: integer): Extended;

{ Evaluates a uniform polynomial of one variable at value X.
  The coefficients are ordered in increasing powers of X:
  Coefficients[0] + Coefficients[1]*X + ... + Coefficients[N]*(X**N) }

function Poly(const X: Double; const Coefficients: array of Double): Double;
function PolyEx(const X: Extended; const Coefficients: array of Extended): Extended;
```

### Statistical functions  

```pascal
{ Arithmetic average of values.  (AVG):  SUM / N }

function Mean(const Data: array of Double): Double;
function MeanEx(const Data: array of Extended): Extended;

{ Sum of values.  (SUM) }

function Sum(const Data: array of Double): Double;
function SumEx(const Data: array of Extended): Extended;
function SumInt(const Data: array of Integer): Integer;
function SumOfSquares(const Data: array of Double): Double;
function SumOfSquaresEx(const Data: array of Extended): Extended;
procedure SumsAndSquares(const Data: array of Double; var Sum, SumOfSquares: Extended);
procedure SumsAndSquaresEx(const Data: array of Extended; var Sum, SumOfSquares: Extended);

{ Returns the smallest signed value in the data array (MIN) }

function MinValue(const Data: array of Double): Double;
function MinValueEx(const Data: array of Extended): Extended;
function MinIntValue(const Data: array of Integer): Integer;

function MinInt(const A, B: Integer): Integer;
function MinIntEx(const A, B: Int64): Int64;
function Min(const A, B: Double): Double;
function MinEx(const A, B: Extended): Extended;

{ Returns the largest signed value in the data array (MAX) }

function MaxValue(const Data: array of Double): Double;
function MaxValueEx(const Data: array of Extended): Extended;
function MaxIntValue(const Data: array of Integer): Integer;

function MaxInt(const A, B: Integer): Integer;
function MaxIntEx(const A, B: Int64): Int64;
function Max(const A, B: Double): Double;
function MaxEx(const A, B: Extended): Extended;

{ Standard Deviation (STD): Sqrt(Variance). aka Sample Standard Deviation }

function StdDev(const Data: array of Double): Double;
function StdDevEx(const Data: array of Extended): Extended;

{ MeanAndStdDev calculates Mean and StdDev in one call. }

procedure MeanAndStdDev(const Data: array of Double; var Mean, StdDev: Double);
procedure MeanAndStdDevEx(const Data: array of Extended; var Mean, StdDev: Extended);

{ Population Standard Deviation (STDP): Sqrt(PopnVariance).
  Used in some business and financial calculations. }

function PopnStdDev(const Data: array of Double): Double;
function PopnStdDevEx(const Data: array of Extended): Extended;

{ Variance (VARS): TotalVariance / (N-1). aka Sample Variance }

function Variance(const Data: array of Double): Double;
function VarianceEx(const Data: array of Extended): Extended;

{ Population Variance (VAR or VARP): TotalVariance/ N }

function PopnVariance(const Data: array of Double): Double;
function PopnVarianceEx(const Data: array of Extended): Extended;

{ Total Variance: SUM(i=1,N)[(X(i) - Mean)**2] }

function TotalVariance(const Data: array of Double): Double;
function TotalVarianceEx(const Data: array of Extended): Extended;

{ Norm:  The Euclidean L2-norm.  Sqrt(SumOfSquares) }

function Norm(const Data: array of Double): Double;
function NormEx(const Data: array of Extended): Extended;

{ MomentSkewKurtosis: Calculates the core factors of statistical analysis:
  the first four moments plus the coefficients of skewness and kurtosis.
  M1 is the Mean.  M2 is the Variance.
  Skew reflects symmetry of distribution: M3 / (M2**(3/2))
  Kurtosis reflects flatness of distribution: M4 / Sqr(M2) }

procedure MomentSkewKurtosis(const Data: array of Double;
    var M1, M2, M3, M4, Skew, Kurtosis: Extended);

{ RandG produces random numbers with Gaussian distribution about the mean.
  Useful for simulating data with sampling errors. }

function RandG(Mean, StdDev: Double): Double;
function RandGEx(Mean, StdDev: Extended): Extended;
```

### General Functions

```pascal
{ Extreme Testing }

{ Like an infinity, a NaN double value has an exponent of 7FF, but the NaN
  values have a fraction field that is not 0. }

function IsNan(const AValue: Double): Boolean;
function IsNanEx(const AValue: Extended): Boolean;

{ Like a NaN, an infinity double value has an exponent of 7FF, but the
  infinity values have a fraction field of 0. Infinity values can be positive
  or negative, which is specified in the high-order, sign bit. }

function IsInfinite(const AValue: Double): Boolean;
function IsInfiniteEx(const AValue: Extended): Boolean;

{ Simple sign testing }

function SignInt(const AValue: Integer): TValueSign;
function SignIntEx(const AValue: Int64): TValueSign;
function Sign(const AValue: Double): TValueSign;
function SignEx(const AValue: Extended): TValueSign;
 
{ CompareFloat & SameFloat: If epsilon is not given (or is zero) we will
  attempt to compute a reasonable one based on the precision of the floating
  point type used. }

function CompareIntValue(const A, B: Integer): TValueRelationship;
function CompareIntValueEx(const A, B: Int64): TValueRelationship;
function CompareValue(const A, B: Double; Epsilon: Double): TValueRelationship;
function CompareValueEx(const A, B: Extended; Epsilon: Extended): TValueRelationship;

function SameValue(const A, B: Double; Epsilon: Double): Boolean;
function SameValueEx(const A, B: Extended; Epsilon: Extended): Boolean;
 
{ IsZero: These will return true if the given value is zero (or very very very
  close to it). }

function IsZero(const A: Double; Epsilon: Double): Boolean;
function IsZeroEx(const A: Extended; Epsilon: Extended): Boolean;

{ Easy to use conditional functions }

function IfThenInt(AValue: Boolean; const ATrue: Integer; const AFalse: Integer): Integer;
function IfThenIntEx(AValue: Boolean; const ATrue: Int64; const AFalse: Int64): Int64;
function IfThen(AValue: Boolean; const ATrue: Double; const AFalse: Double): Double;
function IfThenEx(AValue: Boolean; const ATrue: Extended; const AFalse: Extended): Extended;

{ Various random functions }

function RandomRange(const AFrom, ATo: Integer): Integer;
function RandomIntFrom(const AValues: array of Integer): Integer;
function RandomIntFromEx(const AValues: array of Int64): Int64;
function RandomFrom(const AValues: array of Double): Double;
function RandomFromEx(const AValues: array of Extended): Extended;

{ Range testing functions }

function InIntRange(const AValue, AMin, AMax: Integer): Boolean;
function InIntRangeEx(const AValue, AMin, AMax: Int64): Boolean;
function InRange(const AValue, AMin, AMax: Double): Boolean;
function InRangeEx(const AValue, AMin, AMax: Extended): Boolean;

{ Range truncation functions }

function EnsureIntRange(const AValue, AMin, AMax: Integer): Integer;
function EnsureIntRangeEx(const AValue, AMin, AMax: Int64): Int64;
function EnsureRange(const AValue, AMin, AMax: Double): Double;
function EnsureRangeEx(const AValue, AMin, AMax: Extended): Extended;

{ 16 bit unsigned integer division and remainder in one operation }

procedure DivMod(Dividend: Cardinal; Divisor: Word; var Result, Remainder: Word);
```

## Financial Functions

```pascal
type
  TPaymentTime = (ptEndOfPeriod, ptStartOfPeriod);

{ Double Declining Balance (DDB) }
function DoubleDecliningBalance(const Cost, Salvage: Extended;
  Life, Period: Integer): Extended;

{ Future Value (FVAL) }
function FutureValue(const Rate: Extended; NPeriods: Integer; const Payment,
  PresentValue: Extended; PaymentTime: TPaymentTime): Extended;

{ Interest Payment (IPAYMT)  }
function InterestPayment(const Rate: Extended; Period, NPeriods: Integer;
  const PresentValue, FutureValue: Extended; PaymentTime: TPaymentTime): Extended;

{ Interest Rate (IRATE) }
function InterestRate(NPeriods: Integer; const Payment, PresentValue,
  FutureValue: Extended; PaymentTime: TPaymentTime): Extended;

{ Internal Rate of Return. (IRR) Needs array of cash flows. }
function InternalRateOfReturn(const Guess: Extended;
  const CashFlows: array of Double): Extended;

{ Number of Periods (NPER) }
function NumberOfPeriods(const Rate: Extended; Payment: Extended;
  const PresentValue, FutureValue: Extended; PaymentTime: TPaymentTime): Extended;

{ Net Present Value. (NPV) Needs array of cash flows. }
function NetPresentValue(const Rate: Extended; const CashFlows: array of Double;
  PaymentTime: TPaymentTime): Extended;

{ Payment (PAYMT) }
function Payment(Rate: Extended; NPeriods: Integer; const PresentValue,
  FutureValue: Extended; PaymentTime: TPaymentTime): Extended;

{ Period Payment (PPAYMT) }
function PeriodPayment(const Rate: Extended; Period, NPeriods: Integer;
  const PresentValue, FutureValue: Extended; PaymentTime: TPaymentTime): Extended;

{ Present Value (PVAL) }
function PresentValue(const Rate: Extended; NPeriods: Integer;
  const Payment, FutureValue: Extended; PaymentTime: TPaymentTime): Extended;

{ Straight Line depreciation (SLN) }
function SLNDepreciation(const Cost, Salvage: Extended; Life: Integer): Extended;

{ Sum-of-Years-Digits depreciation (SYD) }
function SYDDepreciation(const Cost, Salvage: Extended; Life, Period: Integer): Extended;
```
 
## Data Model

```pascal
TDataPackage=class
public
  procedure Refresh;
  procedure ApplyUpdates;
  procedure DatasetApplyUpdates(Dataset:TDataset; MaxError:integer);
  function GetDatasetIndex(DatasetName:string):integer;
  function DatasetByName(DatasetName:string):TDataset;
  procedure ExecutePkgBatch(ObjectName:string);
  procedure ExecutePkgCommand(ObjectName:string);
  procedure ExecutePkgMethod(ObjectName:string);
  procedure SetFieldEnabledOnBrowse(DatasetName, FieldName:string; Value:boolean);
  procedure SetFieldVisibleOnBrowse(DatasetName, FieldName:string; Value:boolean);
  procedure SetFieldEnabledOnInsert(DatasetName, FieldName:string; Value:boolean);
  procedure SetFieldVisibleOnInsert(DatasetName, FieldName:string; Value:boolean);
  procedure SetFieldEnabledOnEdit(DatasetName, FieldName:string; Value:boolean);
  procedure SetFieldVisibleOnEdit(DatasetName, FieldName:string; Value:boolean);
  procedure SetFieldCaption(DatasetName, FieldName, FieldCaption, LabelCaption:string);
  procedure SetFieldAlignment(DatasetName, FieldName:string; Value:TAlignment);
  procedure SetFieldCustomProperties(DatasetName, FieldName, Value:string);
  property DatasetCount:integer;
  property Dataset[index:integer]:TDataset;
  property DataSource[index:integer]:TDataSource;
  property DatasetAsXML[index:integer]:string;
  property DatasetTitle[index:integer]:string;
  property ParamDataset:TDataset;
  property ParamDatasetAsXML:string;
  property ParamDataSource:TDataSource;
  property ParamCount:integer;
  property Title:string;
  property Tag:integer;
  property TagString:string;  
end;
```

## Data Model Events

```pascal
TDatasetEventType = (
    deAfterOpen, deAfterClose, deAfterInsert, deAfterEdit,
    deAfterDelete, deAfterPost, deAfterCancel, deAfterRefresh, deAfterScroll,
    deBeforeOpen, deBeforeClose, deBeforeInsert, deBeforeEdit, deBeforeDelete,
    deBeforePost, deBeforeCancel, deBeforeRefresh, deBeforeScroll,
    deCalcFields, deNewRecord);

TDatasetErrorType = (dePostError, deEditError, deDeleteError);

TFieldEventType = (feChange, feValidate);

TDataAction = (daFail, daAbort, daRetry);
```

### Data Package Events

```pascal
•	OnDatasetEvent (DataPackage:TDataPackage; Dataset:TDataset; DatasetEvent:TDatasetEventType)
•	OnDatasetError (DataPackage:TDataPackage; Dataset:TDataset; ErrorType:TDatasetErrorType; Action:TDataAction);
•	OnFieldEvent (DataPackage:TDataPackage; Dataset:TDataset; Field:TField; FieldEvent:TFieldEventType);
```

### Dataset Events

```pascal
•	BeforeOpen (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforeClose (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforeInsert (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforeEdit (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforeDelete (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforePost (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforeCancel (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforeRefresh (DataPackage:TDataPackage; Dataset:TDataset)
•	BeforeScroll (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterOpen (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterClose (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterInsert (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterEdit (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterDelete (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterPost (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterCancel (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterRefresh (DataPackage:TDataPackage; Dataset:TDataset)
•	AfterScroll (DataPackage:TDataPackage; Dataset:TDataset)
•	OnNewRecord (DataPackage:TDataPackage; Dataset:TDataset)
•	OnCalcFields (DataPackage:TDataPackage; Dataset:TDataset)
•	OnPostError (DataPackage:TDataPackage; Dataset:TDataset; ErrorType:TDatasetErrorType; Action:TDataAction)
•	OnEditError (DataPackage:TDataPackage; Dataset:TDataset; ErrorType:TDatasetErrorType; Action:TDataAction)
•	OnDeleteError (DataPackage:TDataPackage; Dataset:TDataset; ErrorType:TDatasetErrorType; Action:TDataAction)
```

### Field Events

```pascal
•	OnChange (DataPackage:TDataPackage; Dataset:TDataset; Field:TField)
•	OnValidate (DataPackage:TDataPackage; Dataset:TDataset; Field:TField)
•	OnCalcField (DataPackage:TDataPackage; Dataset:TDataset; Field:TField)

TResult=class
public
  procedure Success;
  procedure Error(ErrorCode : integer; ErrorMessage : string);
  property ErrorCode: integer;
  property ErrorMessage: string;
end;
```

## Form

```pascal
TWindowFrame=class
public
  function ShowOpenParameterDialog:boolean;
  function ShowOpenParameterDialogForInsertOrUpdate(DatasetName:string):boolean;
  function ShowOpenParameterDialogForUpdate(DatasetName:string):boolean;
  function GetPropertyValue(PropertyName : string):string;
  
  procedure AddCommandButton(Caption: string; CommandType: integer; CommandText: string; CommandParam: string; 
    ScriptStart:string; ScriptEnd:string; FromLeft : boolean; ButtonWidth : integer);

  procedure AddRecord(DatasetName : string);
  procedure EditRecord(DatasetName : string);
  procedure DeleteRecord(DatasetName : string);
  procedure EntryNewRecord;
 
  procedure UpdateHeaderFooter;

  procedure ExecuteFlogicProcedure( ProcedureName : string);
  function ExecuteInternalFunction(FunctionName : string; Params : string) : string;
    
  function ButtonOK:TXFrameButton;
  function ButtonCancel:TXFrameButton;
  
  procedure CloseOK;
  procedure CloseCancel;

  property Caption:string;
  property SubCaption:string;
  property ExtCaption: string;
  property ExtSubCaption: string;
  property SubCaptionOnTop: boolean;
  property ExtSubCaptionOnTop: boolean;

  property Buttons[index: integer]: TXFrameButton;
  property Labels[index: integer]: TXFrameLabel;
    
  property ShowHeader: boolean;
  property ShowFooter: boolean;

  property EnterToNextControl:Boolean;
  property Tag:integer;
end;

TXFrameButton=class
public
  procedure Click;
  property Caption:string;
  property Left:integer;
  property Width:integer;
  property Enabled:boolean;
  property Visible:boolean;
end;

TXFrameLabel=class
public
  property Caption:string;
  property Left:integer;
  property Width:integer;
  property Enabled:boolean;
  property Visible:boolean;
  property FontName: string;
  property FontSize: integer;
  property FontBold: boolean;
  property FontColor: TColor;
end;

TXTimers=class
public
  procedure AddTimer(Interval:integer; Enabled:boolean; HandlerName:string);
  procedure SetInterval(TimerIndex:integer; Interval:integer);
  procedure SetEnabled(TimerIndex:integer; Enabled:boolean);
end;

TXListeners=class
public
  procedure AddUDPListener(Port:integer; HandlerName:string);
  procedure AddTCPListener(Port:integer; HandlerName:string);
  procedure AddHTTPListener(Port:integer; HandlerName:string);
  procedure UDPSend(ListenerIndex:integer; Host:string; Port:integer; Data:string);
end;
```

### Application Object Instances

```pascal
AppGlobal: TZapStringList;
```

### Form Object Instances

```pascal
Global: TZapStringList;
DataPackage: TDataPackage; 
Window: TWindowFrame; 
Timers: TXTimers; 
Listeners: TXListeners; 
```

### Event Object Instances

```pascal
Stack: TZapStringList;
Return: TResult;
Validate: TResult;
```

## Presentation Block 

```pascal
TXPanel=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
end;

TXGroupBox=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
end;

TXPageControl=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
  property ActivePageIndex: Integer;
  property HideTabs: Boolean;
  property ShowFrame: Boolean;
end;

TXTabSheet=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
  property TabVisible: Boolean;
end;

TXSplitter=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
end;

TXImage=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
  property Picture:TPicture;
  property Center:boolean;
  property Stretch:boolean;
end;

TXToolBar=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;

  property Buttons[index: integer]: TXFrameButton;
end;

TXButtonList=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;

  property Buttons[index: integer]: TXFrameButton;
end;

TXEntry=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
  
  procedure SetFocusToFirstEntryControl;
  procedure ControlEnabled(FieldName: string; Value: boolean);
  procedure ControlVisible(FieldName: string; Value: boolean);
  
  procedure NavAdd;
  procedure NavAddCustom(EntryName: string);
  procedure NavAddCustomWithDefaultValue(EntryName: string; DefaultValues: string);
  procedure NavAddCopy;
  procedure NavAddEmbedded;
  procedure NavAddDialog;
  procedure NavAddMasterDetail;

  procedure NavEdit;
  procedure NavEditEmbedded;
  procedure NavEditDialog;
  procedure NavEditMasterDetail;
  procedure NavEditCustom(EntryName: string);
  procedure NavEditCustomWithDefaultValue(EntryName: string; DefaultValues: string);

  procedure NavDelete;
  procedure NavSave;
  procedure NavCancel;
  procedure NavSaveAndNew;
  procedure NavSaveAndEdit;

  procedure NavFirst;
  procedure NavLast;
  procedure NavNext;
  procedure NavPrior;

  procedure NavSearch;
  procedure NavExportData;
  procedure NavPrint;
  
  procedure NavAddEnabled(Value: boolean);
  procedure NavEditEnabled(Value: boolean);
  procedure NavDeleteEnabled(Value: boolean);
  
  procedure NavAddAutoEnabled;
  procedure NavEditAutoEnabled;
  procedure NavDeleteAutoEnabled;

  procedure SetEditorTypeEmbedded;
  procedure SetEditorTypeDialog;
  procedure SetEditorTypeMasterDetail;
  procedure SetEditorTypeListDetail;

  procedure EditorControlEnabled(FieldName: string; Value: boolean);
  procedure EditorControlVisible(FieldName: string; Value: boolean);
  procedure EditorFlowControlEnabled(FieldName: string; Index: integer; Value: boolean);

  procedure SetEditorReadOnly;

  procedure SetEditorDetailReadOnly(Index: integer);
  procedure SetEditorDetailShowNavigator(Index: integer; Value: boolean);
  procedure SetEditorDetailShowAddButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowDeleteButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSearchButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndNewButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowPrintButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowExportButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowRecordCount(Index: integer; Value: boolean);
  procedure SetEditorDetailAddCopy(Index: integer; Value boolean);
  procedure SetEditorDetailLabelSearch(Index: integer; Value: string);
  procedure SetEditorDetailLabelAdd(Index: integer; Value: string);
  procedure SetEditorDetailLabelEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelDelete(Index: integer; Value: string);
  procedure SetEditorDetailLabelSave(Index: integer; Value: string);
  procedure SetEditorDetailLabelCancel(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndNew(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelPrint(Index: integer; Value: string);
  procedure SetEditorDetailLabelExport(Index: integer; Value: string);
  procedure SetEditorDetailDeleteConfirmMsg(Index: integer; Value: string);
  procedure SetEditorDetailFormatRecordCount(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForDelete(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForDelete(Index: integer; Value: string);  
end;

TXMultiTable=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;

  procedure RecordMoveUp(FieldName: string);
  procedure RecordMoveDown(FieldName:string);

  procedure NavAdd;
  procedure NavAddCustom(EntryName: string);
  procedure NavAddCustomWithDefaultValue(EntryName: string; DefaultValues: string);
  procedure NavAddCopy;
  procedure NavAddEmbedded;
  procedure NavAddDialog;
  procedure NavAddMasterDetail;

  procedure NavEdit;
  procedure NavEditEmbedded;
  procedure NavEditDialog;
  procedure NavEditMasterDetail;
  procedure NavEditCustom(EntryName: string);
  procedure NavEditCustomWithDefaultValue(EntryName: string; DefaultValues: string);

  procedure NavDelete;
  procedure NavSave;
  procedure NavCancel;
  procedure NavSaveAndNew;
  procedure NavSaveAndEdit;

  procedure NavFirst;
  procedure NavLast;
  procedure NavNext;
  procedure NavPrior;

  procedure NavSearch;
  procedure NavExportData;
  procedure NavPrint;
  
  procedure NavAddEnabled(Value: boolean);
  procedure NavEditEnabled(Value: boolean);
  procedure NavDeleteEnabled(Value: boolean);
  
  procedure NavAddAutoEnabled;
  procedure NavEditAutoEnabled;
  procedure NavDeleteAutoEnabled;

  procedure SetEditorTypeEmbedded;
  procedure SetEditorTypeDialog;
  procedure SetEditorTypeMasterDetail;
  procedure SetEditorTypeListDetail;

  procedure EditorControlEnabled(FieldName: string; Value: boolean);
  procedure EditorControlVisible(FieldName: string; Value: boolean);
  procedure EditorFlowControlEnabled(FieldName: string; Index: integer; Value: boolean);

  procedure SetEditorReadOnly;

  procedure SetEditorDetailReadOnly(Index: integer);
  procedure SetEditorDetailShowNavigator(Index: integer; Value: boolean);
  procedure SetEditorDetailShowAddButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowDeleteButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSearchButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndNewButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowPrintButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowExportButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowRecordCount(Index: integer; Value: boolean);
  procedure SetEditorDetailAddCopy(Index: integer; Value boolean);
  procedure SetEditorDetailLabelSearch(Index: integer; Value: string);
  procedure SetEditorDetailLabelAdd(Index: integer; Value: string);
  procedure SetEditorDetailLabelEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelDelete(Index: integer; Value: string);
  procedure SetEditorDetailLabelSave(Index: integer; Value: string);
  procedure SetEditorDetailLabelCancel(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndNew(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelPrint(Index: integer; Value: string);
  procedure SetEditorDetailLabelExport(Index: integer; Value: string);
  procedure SetEditorDetailDeleteConfirmMsg(Index: integer; Value: string);
  procedure SetEditorDetailFormatRecordCount(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForDelete(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForDelete(Index: integer; Value: string);
end;

TXTable=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;

  procedure RecordMoveUp(FieldName: string);
  procedure RecordMoveDown(FieldName:string);

  procedure NavAdd;
  procedure NavAddCustom(EntryName: string);
  procedure NavAddCustomWithDefaultValue(EntryName: string; DefaultValues: string);
  procedure NavAddCopy;
  procedure NavAddEmbedded;
  procedure NavAddDialog;
  procedure NavAddMasterDetail;

  procedure NavEdit;
  procedure NavEditEmbedded;
  procedure NavEditDialog;
  procedure NavEditMasterDetail;
  procedure NavEditCustom(EntryName: string);
  procedure NavEditCustomWithDefaultValue(EntryName: string; DefaultValues: string);

  procedure NavDelete;
  procedure NavSave;
  procedure NavCancel;
  procedure NavSaveAndNew;
  procedure NavSaveAndEdit;

  procedure NavFirst;
  procedure NavLast;
  procedure NavNext;
  procedure NavPrior;

  procedure NavSearch;
  procedure NavExportData;
  procedure NavPrint;
  
  procedure NavAddEnabled(Value: boolean);
  procedure NavEditEnabled(Value: boolean);
  procedure NavDeleteEnabled(Value: boolean);
  
  procedure NavAddAutoEnabled;
  procedure NavEditAutoEnabled;
  procedure NavDeleteAutoEnabled;

  procedure SetEditorTypeEmbedded;
  procedure SetEditorTypeDialog;
  procedure SetEditorTypeMasterDetail;
  procedure SetEditorTypeListDetail;

  procedure EditorControlEnabled(FieldName: string; Value: boolean);
  procedure EditorControlVisible(FieldName: string; Value: boolean);
  procedure EditorFlowControlEnabled(FieldName: string; Index: integer; Value: boolean);

  procedure SetEditorReadOnly;

  procedure SetEditorDetailReadOnly(Index: integer);
  procedure SetEditorDetailShowNavigator(Index: integer; Value: boolean);
  procedure SetEditorDetailShowAddButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowDeleteButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSearchButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndNewButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowPrintButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowExportButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowRecordCount(Index: integer; Value: boolean);
  procedure SetEditorDetailAddCopy(Index: integer; Value boolean);
  procedure SetEditorDetailLabelSearch(Index: integer; Value: string);
  procedure SetEditorDetailLabelAdd(Index: integer; Value: string);
  procedure SetEditorDetailLabelEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelDelete(Index: integer; Value: string);
  procedure SetEditorDetailLabelSave(Index: integer; Value: string);
  procedure SetEditorDetailLabelCancel(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndNew(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelPrint(Index: integer; Value: string);
  procedure SetEditorDetailLabelExport(Index: integer; Value: string);
  procedure SetEditorDetailDeleteConfirmMsg(Index: integer; Value: string);
  procedure SetEditorDetailFormatRecordCount(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForDelete(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForDelete(Index: integer; Value: string);
end;

TXCard=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;

  procedure NavAdd;
  procedure NavAddCustom(EntryName: string);
  procedure NavAddCustomWithDefaultValue(EntryName: string; DefaultValues: string);
  procedure NavAddCopy;
  procedure NavAddEmbedded;
  procedure NavAddDialog;
  procedure NavAddMasterDetail;

  procedure NavEdit;
  procedure NavEditEmbedded;
  procedure NavEditDialog;
  procedure NavEditMasterDetail;
  procedure NavEditCustom(EntryName: string);
  procedure NavEditCustomWithDefaultValue(EntryName: string; DefaultValues: string);

  procedure NavDelete;
  procedure NavSave;
  procedure NavCancel;
  procedure NavSaveAndNew;
  procedure NavSaveAndEdit;

  procedure NavFirst;
  procedure NavLast;
  procedure NavNext;
  procedure NavPrior;

  procedure NavSearch;
  procedure NavExportData;
  procedure NavPrint;
  
  procedure NavAddEnabled(Value: boolean);
  procedure NavEditEnabled(Value: boolean);
  procedure NavDeleteEnabled(Value: boolean);
  
  procedure NavAddAutoEnabled;
  procedure NavEditAutoEnabled;
  procedure NavDeleteAutoEnabled;

  procedure SetEditorTypeEmbedded;
  procedure SetEditorTypeDialog;
  procedure SetEditorTypeMasterDetail;
  procedure SetEditorTypeListDetail;

  procedure EditorControlEnabled(FieldName: string; Value: boolean);
  procedure EditorControlVisible(FieldName: string; Value: boolean);
  procedure EditorFlowControlEnabled(FieldName: string; Index: integer; Value: boolean);

  procedure SetEditorReadOnly;

  procedure SetEditorDetailReadOnly(Index: integer);
  procedure SetEditorDetailShowNavigator(Index: integer; Value: boolean);
  procedure SetEditorDetailShowAddButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowDeleteButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSearchButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndNewButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowPrintButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowExportButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowRecordCount(Index: integer; Value: boolean);
  procedure SetEditorDetailAddCopy(Index: integer; Value boolean);
  procedure SetEditorDetailLabelSearch(Index: integer; Value: string);
  procedure SetEditorDetailLabelAdd(Index: integer; Value: string);
  procedure SetEditorDetailLabelEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelDelete(Index: integer; Value: string);
  procedure SetEditorDetailLabelSave(Index: integer; Value: string);
  procedure SetEditorDetailLabelCancel(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndNew(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelPrint(Index: integer; Value: string);
  procedure SetEditorDetailLabelExport(Index: integer; Value: string);
  procedure SetEditorDetailDeleteConfirmMsg(Index: integer; Value: string);
  procedure SetEditorDetailFormatRecordCount(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForDelete(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForDelete(Index: integer; Value: string);
end;

TXChart=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
end;
  
TXTreeList=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;

  procedure NavAdd;
  procedure NavAddCustom(EntryName: string);
  procedure NavAddCustomWithDefaultValue(EntryName: string; DefaultValues: string);
  procedure NavAddCopy;
  procedure NavAddEmbedded;
  procedure NavAddDialog;
  procedure NavAddMasterDetail;

  procedure NavEdit;
  procedure NavEditEmbedded;
  procedure NavEditDialog;
  procedure NavEditMasterDetail;
  procedure NavEditCustom(EntryName: string);
  procedure NavEditCustomWithDefaultValue(EntryName: string; DefaultValues: string);

  procedure NavDelete;
  procedure NavSave;
  procedure NavCancel;
  procedure NavSaveAndNew;
  procedure NavSaveAndEdit;

  procedure NavFirst;
  procedure NavLast;
  procedure NavNext;
  procedure NavPrior;

  procedure NavSearch;
  procedure NavExportData;
  procedure NavPrint;
  
  procedure NavAddEnabled(Value: boolean);
  procedure NavEditEnabled(Value: boolean);
  procedure NavDeleteEnabled(Value: boolean);
  
  procedure NavAddAutoEnabled;
  procedure NavEditAutoEnabled;
  procedure NavDeleteAutoEnabled;

  procedure SetEditorTypeEmbedded;
  procedure SetEditorTypeDialog;
  procedure SetEditorTypeMasterDetail;
  procedure SetEditorTypeListDetail;

  procedure EditorControlEnabled(FieldName: string; Value: boolean);
  procedure EditorControlVisible(FieldName: string; Value: boolean);
  procedure EditorFlowControlEnabled(FieldName: string; Index: integer; Value: boolean);

  procedure SetEditorReadOnly;

  procedure SetEditorDetailReadOnly(Index: integer);
  procedure SetEditorDetailShowNavigator(Index: integer; Value: boolean);
  procedure SetEditorDetailShowAddButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowDeleteButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSearchButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndNewButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowSaveAndEditButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowPrintButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowExportButton(Index: integer; Value: boolean);
  procedure SetEditorDetailShowRecordCount(Index: integer; Value: boolean);
  procedure SetEditorDetailAddCopy(Index: integer; Value boolean);
  procedure SetEditorDetailLabelSearch(Index: integer; Value: string);
  procedure SetEditorDetailLabelAdd(Index: integer; Value: string);
  procedure SetEditorDetailLabelEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelDelete(Index: integer; Value: string);
  procedure SetEditorDetailLabelSave(Index: integer; Value: string);
  procedure SetEditorDetailLabelCancel(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndNew(Index: integer; Value: string);
  procedure SetEditorDetailLabelSaveAndEdit(Index: integer; Value: string);
  procedure SetEditorDetailLabelPrint(Index: integer; Value: string);
  procedure SetEditorDetailLabelExport(Index: integer; Value: string);
  procedure SetEditorDetailDeleteConfirmMsg(Index: integer; Value: string);
  procedure SetEditorDetailFormatRecordCount(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailIncludeRoleNamesForDelete(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForAdd(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForEdit(Index: integer; Value: string);
  procedure SetEditorDetailExcludeRoleNamesForDelete(Index: integer; Value: string);
end;
  
TXPivotTable=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
end;

TXBrowser=class
public
  property Caption: String;
  property Size: Integer;
  property Enabled: Boolean;
  property Visible: Boolean;
end;
```

## Delphi Objects

### Std

```pascal
TObject
TPersistent
TComponent
```

### Classes

```pascal
TStream
Tstrings
TStringList
TBits
THandleStream
TFileStream
TCustomMemoryStream
TmemoryStream
TResourceStream
TParser
TCollectionItem
TCollection
TOwnedCollection
```

### Graphisc

```pascal
TGraphicsObject;
TFont
TPen
TBrush
TCanvas
TGraphic
TBitmap
```

### Controls

```pascal
TDragObject
TControl
TWinControl
TGraphicControl
TcustomControl
```

### StdCtrls

```pascal
TCustomGroupBox
TGroupBox
TCustomLabel
TLabel
TCustomEdit
TEdit
TCustomMemo
TMemo
TCustomComboBox
TComboBox
TButtonControl
TButton
TCustomCheckBox
TCheckBox
TRadioButton
TCustomListBox
TListBox
TscrollBar
```

### Forms

```pascal
TControlScrollBar
TScrollingWinControl
TScrollBox
TForm
Tapplication
```

### DB

```pascal
TFieldDef
TFieldDefs
TIndexDef
TIndexDefs
TFields
TLookupList
TField
TStringField
TNumericField
TIntegerField
TSmallIntField
TLargeIntField
TWordField
TAutoIncField
TFloatField
TCurrencyField
TBooleanField
TDateTimeField
TDateField
TTimeField
TBinaryField
TBytesField
TVarBytesField
TNamedItem
TDefCollection
TWideStringField
TFlatList
TFieldDefList
TFieldList
TBCDField
TFMTBCDField
TBlobField
TMemoField
TGraphicField
TObjectField
TAdtField
TArrayField
TDatasetField
TReferenceField
TVariantField
TGuidField
TParam
TParams
TDataset
```
