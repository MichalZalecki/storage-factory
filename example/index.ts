import { storageFactory } from "../src";

const local = storageFactory(() => localStorage);

local.setItem("test", "Testing value");
alert(local.getItem("test"));
