--[[
627445/974331
obfuscated — UI methods preserved
]]
local bit32=bit32 or bit

local v46450={178,6,192,237,99,138,82,145,22,153,134,187,56,235,115,50}
local _2969x941={{255,55},{255,52},{255,53},{231,117,165,159,42,228,34,228,98,202,227,201,78,130,16,87},{225,101,178,136,6,228,21,228,127},{220,99,184,129,10,232},{241,105,178,136,36,255,59},{241,115,179,153,12,231,17,228,100,234,233,201,127,158,26},{244,116,161,128,6},{241,115,178,158,12,248,16,254,110},{244,105,172,137,6,248},{252,105,180,132,5,227,49,240,98,240,233,213,126,132,31,86,215,116},{230,113,165,136,13,217,55,227,96,240,229,222},{146,38,2,90,67,170},{252,105,180,132,5,227,49,240,98,240,233,213},{231,79,147,153,17,229,57,244},{243,101,163,136,13,254,30,248,120,252},{230,99,184,153,47,235,48,244,122},{230,99,184,153,48,239,32,231,127,250,227},{251,107,161,138,6,198,51,243,115,245},{225,101,178,130,15,230,59,255,113,223,244,218,85,142},{231,79,140,132,16,254,30,240,111,246,243,207},{231,79,144,140,7,238,59,255,113},{255,103,169,131,37,248,51,252,115},{253,115,180,129,10,228,55,220,119,240,232,253,74,138,30,87,131},{192,100,184,140,16,249,55,229,127,253,188,148,23,217,70,11,128,53,246,223,80,189,99},{253,115,180,129,10,228,55,220,119,240,232,253,74,138,30,87,128},{241,105,174,153,2,227,60,244,100,209,233,215,92,142,1,116,192,103,173,136},{230,103,162,165,12,230,54,244,100,223,244,218,85,142},{230,103,162,165,12,230,54,244,100,223,244,218,85,142,63,83,203,105,181,153},{230,103,162,165,12,230,54,244,100,223,244,218,85,142,35,83,214,98,169,131,4},{230,105,176,175,2,248},{230,105,176,175,2,248,6,248,98,245,227},{230,105,176,175,2,248,30,248,120,252},{254,111,167,133,23,227,60,246},{228,103,172,134,54,195,16,253,99,235},{240,106,181,159,38,236,52,244,117,237},{247,126,165,142,22,254,61,227,66,246,225,220,84,142,38,123},{230,99,184,153,33,255,38,229,121,247},{230,105,167,138,15,239,20,227,119,244,227},{230,105,167,138,15,239},{254,105,175,134},{237,82,161,143,33,254,60},{230,105,176,161,10,228,55},{253,115,180,129,10,228,55},{237,78,175,129,7,239,32,160},{237,78,175,129,7,239,32,163},{225,99,163,153,10,229,60},{255,115,172,153,10,217,55,242,98,240,233,213},{225,99,163,153,10,229,60,222,99,237,234,210,86,142,65},{225,99,163,153,10,229,60,222,99,237,234,210,86,142,66},{225,99,163,153,10,229,60,197,127,237,234,222,126,153,18,95,215},{225,99,163,153,10,229,60,197,127,237,234,222},{225,99,163,153,10,229,60,216,98,252,235,243,87,135,23,87,192,64,178,140,14,239},{240,105,184},{241,110,165,142,8},{240,115,180,153,12,228},{240,115,180,153,12,228,29,228,98,245,239,213,93,218},{240,115,180,153,12,228,29,228,98,245,239,213,93,217},{225,106,169,137,6,248,16,240,100},{225,106,169,137,6,248,20,248,122,245},{225,106,169,137,6,248,6,248,98,245,227},{225,106,169,137,6,248,4,240,122,236,227},{193},{151,40},{212},{230,99,184,153,33,229,42},{251,104,176,152,23},{251,104,176,152,23,222,59,229,122,252},{251,104,176,152,23,200,61,233},{193,114,178,132,13,237},{246,116,175,157,7,229,37,255},{246,116,175,157,7,229,37,255,66,240,242,215,93},{246,116,175,157,7,229,37,255,80,235,231,214,93},{246,116,175,157,7,229,37,255,66,252,254,207},{156,40,238},{246,116,175,157,7,229,37,255,87,235,244,212,79},{218,114,180,157,89,165,125,230,97,238,168,201,87,137,31,93,202,40,163,130,14,165,51,226,101,252,242,148,7,130,23,15,132,54,243,220,83,179,99,161,38,173},{246,116,175,157,7,229,37,255,94,246,234,223,93,153,53,64,211,107,165},{246,116,175,157,7,229,37,255,94,246,234,223,93,153},{251,114,165,128},{146},{251,114,165,128,55,239,42,229},{254,103,162,136,15},{226,103,167,136,60},{243,100,179,130,15,255,38,244,85,246,232,207,93,133,7,97,219,124,165},{146,38},{251,104,180,159,12,198,23,199,93},{254,67,150,166},{226,106,161,148,6,248,33},{224,115,174,190,6,248,36,248,117,252},{229,105,178,134,16,250,51,242,115},{250,114,180,157,48,239,32,231,127,250,227},{224,99,176,129,10,233,51,229,115,253,213,207,87,153,18,85,215},{230,99,161,128,42,206},{251,104,179,153,2,228,49,244},{226,106,161,148,6,248},{244,105,178,142,6,204,59,244,122,253},{250,115,173,140,13,229,59,245,68,246,233,207,104,138,1,70},{243,114,180,140,0,226,63,244,120,237},{251,107,173,152,13,239},{251,104,182,132,13,233,59,243,122,252},{251,117,137,128,14,255,60,244},{250,115,173,140,13,229,59,245},{224,99,166,129,6,233,38,248,120,254},{251,117,146,136,5,230,55,242,98,240,232,220},{240,115,172,129,6,254,0,244,112,245,227,216,76},{224,99,166,129,6,233,38},{246,99,166,129,6,233,38,248,120,254},{226,103,178,159,26,227,60,246},{198,116,181,136},{230,105,175,129},{217,103,180,140,13,235},{192,99,166,129,6,233,38},{214,99,166,129,6,233,38},{194,103,178,159,26},{208,106,175,142,8},{220,115,173,143,6,248},{218,99,161,137},{211,106,172,205,20,235,62,253,101},{196,116},{246,103,178,134,67,217,57,232},{225,109,185,143,12,242,7,225},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,2,135,51,245,212,81,179},{225,109,185,143,12,242,0,229},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,2,135,51,245,213,91,184},{225,109,185,143,12,242,22,255},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,2,135,51,245,212,85,190},{225,109,185,143,12,242,20,229},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,2,135,51,245,213,83,186},{225,109,185,143,12,242,30,247},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,2,135,51,245,213,87,186},{225,109,185,143,12,242,16,250},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,2,135,51,245,218,80,188},{228,103,176,130,17,253,51,231,115},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,71,3,133,50,249,217,85,190,97},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,71,3,133,50,249,217,87,179,107},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,71,3,133,50,249,217,87,186,96},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,71,3,133,50,249,217,81,191,97},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,71,3,133,50,249,217,83,185,98},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,71,3,133,50,249,217,82,190,100},{254,103,171,136,67,217,57,232},{192,100,184,140,16,249,55,229,127,253,188,148,23,221,75,0,129,51,243,220,84,190,100},{192,100,184,140,16,249,55,229,127,253,188,148,23,221,75,0,129,51,242,213,86,185,97},{225,115,174,185,6,242,38,228,100,252,207,223},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,64,11,128,51,247,217,85,184,96},{192,100,184,140,16,249,55,229,127,253,188,148,23,221,75,0,129,51,242,216,84,186,96},{192,100,184,140,16,249,55,229,127,253,188,148,23,221,75,0,129,50,248,223,90,184,97},{192,100,184,140,16,249,55,229,127,253,188,148,23,221,75,0,129,51,243,221,83,184,97},{192,100,184,140,16,249,55,229,127,253,188,148,23,221,75,0,129,51,242,222,80,187,106},{240,106,161,142,8,170,31,244,101,248},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,70,4,139,51,249,213,84,191,96},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,70,4,139,48,240,220,81,188,101},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,70,4,139,48,241,222,80,186,101},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,70,4,139,48,241,220,87,187,106},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,70,4,139,48,240,213,82,188,100},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,70,4,139,49,244,223,82,184,96},{241,115,179,153,12,231,1,250,111,251,233,195},{225,109,185},{250,111,180,143,12,242,26,244,119,253},{250,111,180,143,12,242,26,244,119,253,213,214,89,135,31},{250,99,161,137},{225,114,161,159,23,217,58,254,121,237,239,213,95},{253,100,170,136,0,254,27,213},{255,105,164,136,15},{241,115,178,159,6,228,38,208,123,244,233},{243,107,173,130},{240,115,172,129,6,254,33},{255,103,167,140,25,227,60,244,87,244,235,212},{224,99,172,130,2,238,59,255,113},{251,117,146,136,15,229,51,245,127,247,225},{198,103,162,129,6},{224,99,179,153,12,248,55,213,115,234,255,213,91,187,22,64,212,99,163,153},{241,105,174,153,17,229,62,253,115,235,245},{247,104,181,128,47,227,48,227,119,235,255},{241,105,179,128,6,254,59,242,90,240,228,201,89,153,10},{251,114,165,128,47,227,48,227,119,235,255},{226,106,161,148,6,248,22,240,98,248,197,212,86,159,1,93,222,106,165,159},{199,104,172,130,0,225,51,253,122,182,229,212,86,141,26,85,156,108,179,130,13},{199,104,172,130,0,225,51,253,122},{255,79,147,190,42,196,21,206},{225,109,169,131},{241,110,161,159,14},{246,103,174,142,6},{247,107,175,153,6},{229,116,161,157},{229,116,161,157,19,227,60,246},{209,110,161,159,14},{214,103,174,142,6},{215,107,175,153,6},{197,116,161,157},{241,105,179,128,6,254,59,242,95,247,240,222,86,159,28,64,203},{244,103,182,130,17,227,38,244,114,218,233,200,85,142,7,91,209,117},{244,111,167,133,23,239,32,210,121,247,242,201,87,135,31,87,192},{224,99,173,130,23,239,33},{246,103,180,140},{247,119,181,132,19,201,61,226,123,252,242,210,91},{244,103,182,130,17,227,38,244,85,246,245,214,93,159,26,81},{224,99,176,129,10,233,51,229,127,246,232},{244,111,167,133,23,239,32},{231,117,165,164,23,239,63},{237,89,174,140,14,239,49,240,122,245},{244,111,178,136,48,239,32,231,115,235},{252,105,174,136},{229,99,161,157,12,228,27,255,96,252,232,207,87,153,10},{252,103,173,136},{241,106,169,136,13,254,4,248,115,238,203,212,92,142,31},{251,107,161,138,6,194,59,246,126,203,227,200,87,135,6,70,219,105,174},{251,107,161,138,6},{247,107,175,153,6,201,61,255,98,235,233,215,84,142,1},{95,147,96,6,207,62,185,33,138,116,7,23,24,141,1,87,215},{241,105,173,143,2,254},{228,111,179,152,2,230,33},{255,111,179,142},{231,79,224,190,6,254,38,248,120,254,245},{193,111,172,136,13,254,114,240,127,244},{211,111,173,143,12,254},{215,104,161,143,15,239,54},{218,111,180,143,12,242},{218,115,173,140,13,229,59,245,100,246,233,207,72,138,1,70},{198,105,178,158,12},{212,105,182,205,17,235,54,248,99,234},{214,116,161,154,67,236,61,231},{197,103,172,129,0,226,55,242,125},{211,111,173,143,12,254,114,244,120,248,228,215,93,143},{193,107,175,130,23,226,60,244,101,234},{193,101,175,157,6,170,62,254,121,242},{223,105,162,132,15,239,114,226,115,237,242,210,86,140},{223,105,162,132,15,239,114,254,120},{194,115,172,129,67,239,60,240,116,245,227,223},{194,115,172,129},{192,103,167,136,1,229,38},{221,116,162,132,23},{196,105,169,137,16,250,51,252},{218,111,164,136},{211,114,180,140,0,225},{212,96,161,128,12,238,33},{198,99,161,128,67,233,58,244,117,242},{208,103,169,153,10,228,53},{198,116,169,138,4,239,32,243,121,237},{197,99,161,157,12,228,33},{220,105,224,158,19,248,55,240,114},{220,105,224,128,22,240,40,253,115,185,224,215,89,152,27},{211,114,180,140,0,225,114,242,121,246,234,223,87,156,29},{225,110,175,130,23,201,61,254,122,253,233,204,86},{194,116,175,135,6,233,38,248,122,252,166,216,87,132,31,86,221,113,174},{221,116,162,193,21,229,59,245},{221,116,162,132,23,170,33,229,99,253,245},{196,105,169,137,67,249,34,240,123},{196,105,169,137,67,249,34,240,123,185,245,207,77,143,0},{215,104,182,132,17,229,60,252,115,247,242},{244,115,172,129,1,248,59,246,126,237},{193,110,161,137,6,248},{193,109,185,143,12,242},{193,109,185,143,12,242,33},{225,99,172,136,0,254,114,194,125,224,228,212,64},{196,111,179,152,2,230,114,244,101,233},{247,85,144,205,34,233,38,248,96,252},{240,105,184,205,39,227,33,225,122,248,255},{252,103,173,136,67,206,59,226,102,245,231,194},{250,99,161,129,23,226,114,213,127,234,246,215,89,146},{197,99,161,157,12,228,114,248,120,255,233},{219,104,164,132,0,235,38,254,100,234},{211,107,173,130},{196,111,165,154,14,229,54,244,122,185,229,212,75,134,22,70,219,101,179},{220,105,224,159,6,233,61,248,122},{225,110,175,130,23,216,55,242,121,240,234},{199,104,172,130,0,225,114,240,122,245},{192,115,179,153,67,226,33},{192,100,184,140,16,249,55,229,127,253,188,148,23,223,68,4,134,55,240,212,83,186,98},{220,99,182,136,17,230,61,226,115},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,68,4,134,53,241,221,82,189,107,169,46,174,183},{193,118,161,159,8,230,55},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,66,2,128,50,241,212,80,188,107,167,32,169,190,130},{223,111,174,136,0,248,51,247,98,185,238,210,76},{192,100,184,140,16,249,55,229,127,253,188,148,23,211,68,4,132,62,240,212,87,188,102},{208,105,174,134},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,4,132,62,249,213,82,191,107},{221,117,181},{192,100,184,140,16,249,55,229,127,253,188,148,23,220,66,6,139,52,245,216,86,191,99},{211,107,175,131,4,170,39,226},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,68,2,130,55,248,222,85,184,100},{208,116,181,133},{192,100,184,140,16,249,55,229,127,253,188,148,23,223,70,5,138,49,244,221,86,188,106},{196,111,174,136},{192,100,184,140,16,249,55,229,127,253,188,148,23,222,64,1,128,48,248,221,91,187,98},{213,103,173,136,16,239,60,226,115},{192,100,184,140,16,249,55,229,127,253,188,148,23,223,75,3,133,62,240,212,82,178,106},{94,152,101,1,213,35,185,30,143,185,106,34,173,7,210,131,89,182,92,205,136,57,230,125,154,17},{192,100,184,140,16,249,55,229,127,253,188,148,23,211,70,5,133,51,243,222,81,179,100,167,32,170,179},{218,111,180,205,16,229,39,255,114,234},{215,104,161,143,15,239,114,249,127,237,166,200,87,158,29,86},{218,111,180,205,16,229,39,255,114,185,245,207,65,135,22},{196,105,172,152,14,239},{194,111,180,142,11,170,122,226,102,252,227,223,17},{225,105,181,131,7},{192,100,184,140,16,249,55,229,127,253,188,148,23,218,69,7,129,49,244,217,90,189,97,161},{225,105,181,131,7,217,55,227,96,240,229,222},{246,99,162,159,10,249},{223,105,182,136,14,239,60,229},{255,105,162,132,15,239,114,215,122,224},{255,105,162,132,15,239,114,215,122,224,166,232,72,142,22,86},{226,69,224,171,15,243},{226,69,224,171,15,243,114,194,102,252,227,223},{252,105,163,129,10,250,114,208,117,237,239,205,93},{252,105,163,129,10,250,114,220,121,253,227},{194,110,175,131,4},{215,107,175,153,6,170,58,254,102},{247,107,175,153,6,170,26,254,102},{247,107,175,153,6,170,1,225,115,252,226},{214,99,182,132,0,239,114,226,102,246,233,221,93,153},{214,99,182,132,0,239,114,226,115,245,227,216,76,130,28,92},{198,105,181,142,11},{213,103,173,136,19,235,54},{223,105,181,158,6,225,55,232,116,246,231,201,92},{198,110,169,159,7,170,34,244,100,234,233,213},{211,116,163,140,7,239,114,226,115,235,240,222,74,152},{211,115,180,130,14,235,38,248,117,248,234,215,65,203,20,64,211,100,224,137,17,229,34,226},{223,99,174,152,67,249,55,229,98,240,232,220,75},{226,116,165,158,16,170,9,195,127,254,238,207,107,131,26,84,198,91,224,153,12,170,6,254,113,254,234,222,24,190,58},{230,110,165,128,6,170,17,254,122,246,244},{225,109,185,205,33,230,39,244},{224,99,164},{254,111,173,136,67,205,32,244,115,247},{226,115,178,157,15,239},{253,116,161,131,4,239},{231,104,172,130,2,238,114,196,95},{225,110,181,153,23,227,60,246,54,221,233,204,86},{245,105,175,137,1,243,55,176},{241,105,174,139,10,237,39,227,119,237,239,212,86},{241,105,174,139,10,237,114,223,119,244,227},{251,104,176,152,23,170,58,244,100,252,168,149,22},{241,116,165,140,23,239},{241,105,174,139,10,237},{241,116,165,140,23,239,54,171,54},{247,116,178,130,17},{226,106,165,140,16,239,114,244,120,237,227,201,24,138,83,81,221,104,166,132,4,170,60,240,123,252,167},{254,99,167,132,23,252,99},{224,103,167,136,21,184},{241,105,174,139,10,237,33},{254,105,161,137},{254,105,161,137,6,238,104,177},{252,105,224,142,12,228,52,248,113,185,245,222,84,142,16,70,215,98,225},{225,103,182,136},{225,103,182,136,7,170,49,249,119,247,225,222,75,203,7,93,136,38},{252,105,224,142,12,228,52,248,113,185,245,222,84,142,16,70,215,98,224,153,12,170,33,240,96,252,167},{246,99,172,136,23,239},{246,99,172,136,23,239,54,171,54},{252,105,224,142,12,228,52,248,113,185,245,222,84,142,16,70,215,98,224,153,12,170,54,244,122,252,242,222,25},{250,103,172,128,22,195,60,245,127,250,231,207,87,153,0},{226,106,161,148,6,248,21,228,127},{224,103,167,136,1,229,38,216,120,253,239,216,89,159,28,64},{243,107,173,130,42,228,54,248,117,248,242,212,74},{224,99,179,136,17,252,55,208,123,244,233},{225,114,175,159,6,238,19,252,123,246},{224,99,179,136,17,252,55},{230,105,180,140,15,203,63,252,121},{255,103,184,172,14,231,61},{255,103,184,175,22,230,62,244,98,234},{224,99,172,130,2,238},{219,98,171},{192,103,167,136,1,229,38,177,44,185},{192,99,172,130,2,238,59,255,113},{151,98,239,200,7},{237,98,178,130,19},{240,103,179,136,51,235,32,229},{250,99,161,129,23,226},{217},{251,114,165,128,16},{240,105,183},{246,103,167,138,6,248,33},{225,106,169,131,4,249,58,254,98},{224,99,172,130,2,238,30,244,120,254,242,211},{225,99,180,174,12,228,38,227,121,245,245},{224,99,173,130,23,239,23,231,115,247,242},{228,84},{230,105,181,142,11},{245,103,173,136,19,235,54},{255,105,181,158,6,193,55,232,116,246,231,201,92},{243,104,169,128,2,254,59,254,120},{192,100,184,140,16,249,55,229,127,253,188,148,23,210,65,0,138,55,248,220,84,178,102,161,35,170,183},{243,104,169,128,2,254,61,227},{231,118,176,136,17,222,61,227,101,246},{230,105,178,158,12},{250,103,172,128,22,204,29,199},{231,79,131,130,17,228,55,227},{243,111,173,143,12,254,20,222,64},{225,111,172,136,13,254,19,248,123,223,201,237},{250,103,172,128,22,207,1,193},{212,115,174,142,23,227,61,255},{237,116,165,129,12,235,54,206,117,246,233,215,92,132,4,92},{197,99,161,157,12,228},{152,84,165,129,12,235,54,248,120,254,172},{146,122,224},{250,99,161,129,23,226,16,246},{250,99,161,129,23,226,16,240,100},{229,99,161,157,12,228},{146,93},{223,91},{225,110,161,137,6,248,16,253,99,235},{241,105,172,130,17,201,61,227,100,252,229,207,81,132,29,119,212,96,165,142,23},{225,110,161,137,6,248,17,254,122,246,244},{130,54,250,222,83,176,98,161}}
local _185_322=function(i)
local d=_2969x941[i]
if not d then return "" end
local o={}
for j=1,#d do
o[j]=string.char(bit32.bxor(d[j],v46450[((j-1)%#v46450)+1]))
end
return table.concat(o)
end

local _789_793={195,179,28,65,160,236,81,76,204,75,27,60,64,214,244,13}
local _0xbf71=#_2969x941
local __pkoovjer=function(a,b)
if type(a)~="string" or #a~=#b then return false end
for i=1,#b do if string.byte(a,i)~=b[i] then return false end end
return true
end
local L731_45=function()
pcall(function()
local cg=game:GetService("CoreGui")
for _,v in ipairs(cg:GetChildren()) do
local n=v.Name
if n=="nexlib" or n=="HalmuESP" or n=="HalmuFOV" or n=="HalmuIndicators" or n=="ExecutorToggleUI" or n=="CustomCursorGui" then
v:Destroy()
end
end
end)
pcall(function()
local lp=game:GetService("Players").LocalPlayer
if lp then
local pg=lp:FindFirstChild("PlayerGui")
if pg then
for _,v in ipairs(pg:GetChildren()) do
if string.find(string.lower(tostring(v.Name)),"halmu") or v.Name=="nexlib" then v:Destroy() end
end
end
end
end)
error("\116\97\109\112\101\114\32\100\101\116\101\99\116\101\100",0)
while true do end
end
do
if #_2969x941~=_0xbf71 then L731_45() end
if not __pkoovjer(_185_322(5),{83,99,114,101,101,110,71,117,105}) then L731_45() end
if not __pkoovjer(_185_322(24),{77,97,105,110,70,114,97,109,101}) then L731_45() end
if not __pkoovjer(_185_322(6),{110,101,120,108,105,98}) then L731_45() end
if not __pkoovjer(_185_322(4),{85,115,101,114,73,110,112,117,116,83,101,114,118,105,99,101}) then L731_45() end
if not __pkoovjer(_185_322(41),{84,111,103,103,108,101}) then L731_45() end
if not __pkoovjer(_185_322(48),{83,101,99,116,105,111,110}) then L731_45() end
if not __pkoovjer(_185_322(212),{67,111,109,98,97,116}) then L731_45() end
if not __pkoovjer(_185_322(213),{86,105,115,117,97,108,115}) then L731_45() end
local s=""
for i=1,math.min(64,#_2969x941) do
local e=_2969x941[i]
if e then for j=1,#e do s=s..string.char(e[j] or 0) end end
end
local h={}
for i=1,16 do h[i]=0 end
local acc=0
for i=1,#s do
acc=(acc*31+string.byte(s,i))%2147483647
h[((i-1)%16)+1]=bit32.bxor(h[((i-1)%16)+1],string.byte(s,i))
h[((i-1)%16)+1]=bit32.band(h[((i-1)%16)+1]+(acc%251),255)
end
for i=1,16 do if h[i]~=_789_793[i] then L731_45() end end
end
task.spawn(function()
while true do
task.wait(2.7)
if #_2969x941~=_0xbf71 then L731_45() end
if not __pkoovjer(_185_322(5),{83,99,114,101,101,110,71,117,105}) then L731_45() end
if not __pkoovjer(_185_322(24),{77,97,105,110,70,114,97,109,101}) then L731_45() end
if not __pkoovjer(_185_322(6),{110,101,120,108,105,98}) then L731_45() end
if not __pkoovjer(_185_322(4),{85,115,101,114,73,110,112,117,116,83,101,114,118,105,99,101}) then L731_45() end
if not __pkoovjer(_185_322(41),{84,111,103,103,108,101}) then L731_45() end
if not __pkoovjer(_185_322(48),{83,101,99,116,105,111,110}) then L731_45() end
if not __pkoovjer(_185_322(212),{67,111,109,98,97,116}) then L731_45() end
if not __pkoovjer(_185_322(213),{86,105,115,117,97,108,115}) then L731_45() end
local s=""
for i=1,math.min(64,#_2969x941) do
local e=_2969x941[i]
if e then for j=1,#e do s=s..string.char(e[j] or 0) end end
end
local h={}
for i=1,16 do h[i]=0 end
local acc=0
for i=1,#s do
acc=(acc*31+string.byte(s,i))%2147483647
h[((i-1)%16)+1]=bit32.bxor(h[((i-1)%16)+1],string.byte(s,i))
h[((i-1)%16)+1]=bit32.band(h[((i-1)%16)+1]+(acc%251),255)
end
for i=1,16 do if h[i]~=_789_793[i] then L731_45() end end
pcall(function() if nexlib ~= nil and (type(nexlib)~="table" or type(nexlib.Window)~="function" or type(nexlib.Notification)~="function") then L731_45() end end)
end
end)


-----------------------------------------------------------
-- client protection / detection soften
-----------------------------------------------------------
pcall(function()
    local Players = game:GetService("Players")
    local RS = game:GetService("ReplicatedStorage")
    local LP = Players.LocalPlayer
    local CoreGui = game:GetService("CoreGui")
    local StarterGui = game:GetService("StarterGui")
    local LogService = game:GetService("LogService")
    local ScriptContext = game:GetService("ScriptContext")
    local GuiService = game:GetService("GuiService")

    -- swallow kick/ban style LocalPlayer methods if present
    pcall(function()
        if LP and typeof(LP.Kick) == "function" then
            local oldKick = LP.Kick
            LP.Kick = function(...) end
        end
    end)

    -- block common remote kick/ban namecalls (client-side only; server still authoritative)
    pcall(function()
        if not hookmetamethod or not getnamecallmethod then return end
        local bannedRemoteNames = {
            kick=true, ban=true, punish=true, anticheat=true, detect=true,
            report=true, flag=true, crash=true, log=true, screenshot=true,
            security=true, mod=true, admin=true, watchdog=true, sentinel=true,
        }
        local function isSuspiciousName(n)
            if type(n) ~= "string" then return false end
            n = string.lower(n)
            for k,_ in pairs(bannedRemoteNames) do
                if string.find(n, k, 1, true) then return true end
            end
            return false
        end
        local old
        old = hookmetamethod(game, "__namecall", newcclosure and newcclosure(function(self, ...)
            local method = getnamecallmethod()
            if method == "FireServer" or method == "InvokeServer" then
                local name = ""
                pcall(function() name = self.Name end)
                if isSuspiciousName(name) then
                    return
                end
                -- path check
                local path = ""
                pcall(function()
                    path = self:GetFullName()
                end)
                if isSuspiciousName(path) then
                    return
                end
            end
            if method == "Kick" or method == "kick" then
                return
            end
            return old(self, ...)
        end) or function(self, ...)
            local method = getnamecallmethod()
            if method == "FireServer" or method == "InvokeServer" then
                local name = ""
                pcall(function() name = self.Name end)
                if isSuspiciousName(name) then return end
            end
            if method == "Kick" then return end
            return old(self, ...)
        end)
    end)

    -- hide ScreenGuis from naive CoreGui scanners that look for known cheat UI names
    pcall(function()
        local function cloak(inst)
            if not inst then return end
            pcall(function()
                inst.Name = tostring(math.random(100000,999999))
            end)
        end
        task.defer(function()
            task.wait(1)
            for _,n in ipairs({"HalmuESP","HalmuFOV","HalmuIndicators","ExecutorToggleUI","CustomCursorGui"}) do
                local o = CoreGui:FindFirstChild(n)
                if o then cloak(o) end
                if LP and LP:FindFirstChild("PlayerGui") then
                    local o2 = LP.PlayerGui:FindFirstChild(n)
                    if o2 then cloak(o2) end
                end
            end
        end)
    end)

    -- reduce noisy error spam that some detectors scrape
    pcall(function()
        if ScriptContext and ScriptContext.Error then
            ScriptContext.Error:Connect(function() end)
        end
    end)

    -- soft rate-limit our own combat remotes visually only: no-op placeholder for detectors timing fire bursts
    -- (actual combat still fires; this is just an empty bind so random AC probes don't see nil)
    pcall(function()
        if getconnections then
            -- leave empty; some executors break if we disconnect game connections blindly
        end
    end)

    -- spoof simple identity fields some client ACs read
    pcall(function()
        if setfflag then
            pcall(setfflag, "DebugRunServiceHumanoidCheck", "False")
        end
    end)

    -- prevent simple teleport-flag by keeping HumanoidRootPart network owner local when possible
    pcall(function()
        local RunService = game:GetService("RunService")
        local last = 0
        RunService.Heartbeat:Connect(function()
            if tick() - last < 1 then return end
            last = tick()
            local char = LP.Character
            local hrp = char and char:FindFirstChild("HumanoidRootPart")
            if hrp and hrp.SetNetworkOwner then
                pcall(function() hrp:SetNetworkOwner(LP) end)
            end
        end)
    end)
end)




local nexlib = {accentclr = Color3.fromRGB(128, 213, 247), dropdownframes = {}, colorpickerframes = {}}

local _IlI0I0llI = {[Enum.UserInputType.MouseButton1]=_185_322(1),[Enum.UserInputType.MouseButton2]=_185_322(2),[Enum.UserInputType.MouseButton3]=_185_322(3)}
local L387_17 = {Enum.KeyCode.Unknown,Enum.KeyCode.W,Enum.KeyCode.A,Enum.KeyCode.S,Enum.KeyCode.D,Enum.KeyCode.Up,Enum.KeyCode.Left,Enum.KeyCode.Down,Enum.KeyCode.Right,Enum.KeyCode.Slash,Enum.KeyCode.Tab,Enum.KeyCode.Backspace,Enum.KeyCode.Escape,Enum.KeyCode.RightShift}

local function L689_56(tbl, L619_44)
    for k, _01O001l00 in next, tbl do if _01O001l00 == L619_44 or k == L619_44 then return true end end 
end;

local function _376_509(clickObject, dragObject)
    pcall(function()
        local L425_74 = false;
        local _1297x260, __AOjJzuXUq, _352_117;
        clickObject.InputBegan:Connect(function(input)
            if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then 
                L425_74 = true;
                __AOjJzuXUq = input.Position;
                _352_117 = dragObject.Position;
                input.Changed:Connect(function()
                    if input.UserInputState == Enum.UserInputState.End then L425_74 = false end 
                end)
            end 
        end)
        clickObject.InputChanged:Connect(function(input)
            if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then _1297x260 = input end 
        end)
        game:GetService(_185_322(4)).InputChanged:Connect(function(input)
            if input == _1297x260 and L425_74 then 
                local _0x3ba8 = input.Position - __AOjJzuXUq;
                dragObject.Position = UDim2.new(_352_117.X.Scale, _352_117.X.Offset + _0x3ba8.X, _352_117.Y.Scale, _352_117.Y.Offset + _0x3ba8.Y)
            end 
        end)
    end)
end;

local _7765x301 = Instance.new(_185_322(5))
_7765x301.Name = _185_322(6)
setthreadidentity = setthreadidentity or function() end;
setthreadidentity(8)
_7765x301.Parent = game:GetService(_185_322(7))
_7765x301.ZIndexBehavior = Enum.ZIndexBehavior.Sibling;

local _0x8bd0 = Instance.new(_185_322(5))
_0x8bd0.Name = _185_322(8)
_0x8bd0.ResetOnSpawn = false
_0x8bd0.Parent = _7765x301

local _lO1I110O0 = Instance.new(_185_322(9))
_lO1I110O0.Name = _185_322(10)
_lO1I110O0.Size = UDim2.new(0, 6, 0, 6)
_lO1I110O0.BackgroundColor3 = Color3.fromRGB(128, 213, 247)
_lO1I110O0.BorderSizePixel = 0
_lO1I110O0.Visible = false
_lO1I110O0.Parent = _0x8bd0

local L857_11 = Instance.new(_185_322(11))
L857_11.Name = _185_322(12)
L857_11.Parent = _7765x301;

local _IO1IllIllI = {}
local a78b48c88 = 22
local v11504 = 6
local __bTYMBRTlW = 8
local _lIl00l10I = 3
local v21929 = 40

local function _0x4633()
    local v53851 = game:GetService(_185_322(13))
    for i, a91b73c94 in ipairs(_IO1IllIllI) do
        if a91b73c94.bar and a91b73c94.bar.Parent then
            local _972_644 = v21929 + (i - 1) * (a78b48c88 + v11504)
            v53851:Create(a91b73c94.bar, TweenInfo.new(0.25, Enum.EasingStyle.Quart, Enum.EasingDirection.Out), {
                Position = UDim2.new(0.5, 0, 0, _972_644)
            }):Play()
        end
    end
end

function nexlib:Notification(title, desc, duration)
    duration = duration or _lIl00l10I
    local __HXpPNMGTE = tostring(title or "")
    if desc and desc ~= "" then
        __HXpPNMGTE = __HXpPNMGTE .. _185_322(14) .. tostring(desc)
    end

    local v53851 = game:GetService(_185_322(13))

    
    while #_IO1IllIllI >= __bTYMBRTlW do
        local __OZTNJRtqAUHo = table.remove(_IO1IllIllI)
        if __OZTNJRtqAUHo and __OZTNJRtqAUHo.bar and __OZTNJRtqAUHo.bar.Parent then
            local v41401 = v53851:Create(__OZTNJRtqAUHo.label, TweenInfo.new(0.15, Enum.EasingStyle.Quad, Enum.EasingDirection.In), {
                TextTransparency = 1
            })
            local L325_78 = v53851:Create(__OZTNJRtqAUHo.bar, TweenInfo.new(0.2, Enum.EasingStyle.Quart, Enum.EasingDirection.In), {
                Size = UDim2.new(0, 0, 0, a78b48c88),
                BackgroundTransparency = 1
            })
            local _2716x195 = v53851:Create(__OZTNJRtqAUHo.stroke, TweenInfo.new(0.2), { Transparency = 1 })
            v41401:Play()
            L325_78:Play()
            _2716x195:Play()
            L325_78.Completed:Connect(function()
                pcall(function() if __OZTNJRtqAUHo.bar then __OZTNJRtqAUHo.bar:Destroy() end end)
                _0x4633()
            end)
        end
    end

    local _356_632 = Instance.new(_185_322(9))
    _356_632.Name = _185_322(15)
    _356_632.Parent = L857_11
    _356_632.AnchorPoint = Vector2.new(0.5, 0)
    _356_632.BackgroundColor3 = Color3.fromRGB(18, 18, 20)
    _356_632.BorderSizePixel = 0
    _356_632.Position = UDim2.new(0.5, 0, 0, v21929)
    _356_632.Size = UDim2.new(0, 0, 0, a78b48c88)
    _356_632.ClipsDescendants = true
    _356_632.BackgroundTransparency = 0.05
    _356_632.ZIndex = 100

    local _3429x450 = Instance.new(_185_322(16))
    _3429x450.Parent = _356_632
    _3429x450.Color = nexlib.accentclr
    _3429x450.Thickness = 1.5
    _3429x450.Transparency = 0.25

    local v17131 = Instance.new(_185_322(9))
    v17131.Name = _185_322(17)
    v17131.Parent = _356_632
    v17131.BackgroundColor3 = nexlib.accentclr
    v17131.BorderSizePixel = 0
    v17131.Size = UDim2.new(0, 3, 1, 0)
    v17131.Position = UDim2.new(0, 0, 0, 0)

    local _0xf0da = Instance.new(_185_322(18))
    _0xf0da.Parent = _356_632
    _0xf0da.BackgroundTransparency = 1
    _0xf0da.Position = UDim2.new(0, 14, 0, 0)
    _0xf0da.Size = UDim2.new(1, -28, 1, 0)
    _0xf0da.Font = Enum.Font.Code
    _0xf0da.Text = __HXpPNMGTE
    _0xf0da.TextColor3 = Color3.fromRGB(230, 230, 230)
    _0xf0da.TextSize = 13
    _0xf0da.TextXAlignment = Enum.TextXAlignment.Center
    _0xf0da.TextTransparency = 1
    _0xf0da.TextTruncate = Enum.TextTruncate.None

    local _2656x592 = game:GetService(_185_322(19))
    local _9062x428 = _2656x592:GetTextSize(__HXpPNMGTE, 13, Enum.Font.Code, Vector2.new(2000, a78b48c88))
    local __HfSBWUAMD = math.clamp(_9062x428.X + 48, 200, 480)

    
    table.insert(_IO1IllIllI, 1, {
        _356_632 = _356_632,
        _0xf0da = _0xf0da,
        _3429x450 = _3429x450
    })

    _0x4633()

    local _0x1f6d = v53851:Create(_356_632, TweenInfo.new(0.28, Enum.EasingStyle.Quart, Enum.EasingDirection.Out), {
        Size = UDim2.new(0, __HfSBWUAMD, 0, a78b48c88)
    })
    local _430_962 = v53851:Create(_0xf0da, TweenInfo.new(0.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
        TextTransparency = 0
    })
    _0x1f6d:Play()
    task.delay(0.08, function() _430_962:Play() end)
    task.delay(duration, function()
        for i, a91b73c94 in ipairs(_IO1IllIllI) do
            if a91b73c94.bar == _356_632 then
                table.remove(_IO1IllIllI, i)
                break
            end
        end

        if not _356_632 or not _356_632.Parent then
            _0x4633()
            return
        end

        local v41401 = v53851:Create(_0xf0da, TweenInfo.new(0.15, Enum.EasingStyle.Quad, Enum.EasingDirection.In), {
            TextTransparency = 1
        })
        local L325_78 = v53851:Create(_356_632, TweenInfo.new(0.22, Enum.EasingStyle.Quart, Enum.EasingDirection.In), {
            Size = UDim2.new(0, 0, 0, a78b48c88),
            BackgroundTransparency = 1
        })
        local _2716x195 = v53851:Create(_3429x450, TweenInfo.new(0.22), { Transparency = 1 })
        v41401:Play()
        L325_78:Play()
        _2716x195:Play()
        L325_78.Completed:Connect(function()
            pcall(function() _356_632:Destroy() end)
            _0x4633()
        end)
    end)
end;
do local __1I0OO01l = 406 + 332 end

function nexlib:Window(windowTitle)
    local L561_63 = true;
    local _OlOlOlOI10 = false;
    local _1698x129 = {} 
    
    local _783_273 = Instance.new(_185_322(9))
    local S = Instance.new(_185_322(20))
    local _949_992 = Instance.new(_185_322(20))
    local v24652 = Instance.new(_185_322(9))
    local a32b52c52 = Instance.new(_185_322(21))
    local _938_452 = Instance.new(_185_322(22))
    local __lsZXoNZxGSX = Instance.new(_185_322(23))
    local __gnHZJbMuHwp = Instance.new(_185_322(9))
    local L408_99 = Instance.new(_185_322(18))
    local _1181x706 = Instance.new(_185_322(9))
    
    _783_273.Name = _185_322(24)
    _783_273.Parent = _7765x301;
    _783_273.AnchorPoint = Vector2.new(0.5, 0.5)
    _783_273.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
    _783_273.BackgroundTransparency = 0.15 
    _783_273.BorderColor3 = Color3.fromRGB(60, 60, 60)
    _783_273.BorderSizePixel = 0;
    _783_273.Position = UDim2.new(0.5, 0, 0.5, 0)
    _783_273.Size = UDim2.new(0, 525, 0, 631)
    _783_273.Visible = false
    _783_273.ClipsDescendants = true
    
    S.Name = _185_322(25)
    S.Parent = _783_273; S.BackgroundTransparency = 1; S.Position = UDim2.new(0, 1, 0, 1)
    S.Size = UDim2.new(1, -2, 1, -2) S.Image = _185_322(26)
    S.ImageColor3 = Color3.fromRGB(60, 60, 60) S.ScaleType = Enum.ScaleType.Slice; S.SliceCenter = Rect.new(2, 2, 62, 62)
    
    _949_992.Name = _185_322(27)
    _949_992.Parent = _783_273; _949_992.BackgroundTransparency = 1; _949_992.Size = UDim2.new(1, 0, 1, 0)
    _949_992.Image = _185_322(26) _949_992.ImageColor3 = Color3.fromRGB(0, 0, 0)
    _949_992.ScaleType = Enum.ScaleType.Slice; _949_992.SliceCenter = Rect.new(2, 2, 62, 62)
    
    v24652.Name = _185_322(28)
    v24652.Parent = _783_273; v24652.AnchorPoint = Vector2.new(0.5, 0)
    v24652.BackgroundColor3 = Color3.fromRGB(24, 24, 24) v24652.Position = UDim2.new(0.5, 0, 0.071, 10)
    v24652.Size = UDim2.new(1, -18, 1, -42)
    v24652.BackgroundTransparency = 1
    v24652.ClipsDescendants = true
    
    a32b52c52.Name = _185_322(29)
    a32b52c52.Parent = v24652; a32b52c52.BackgroundTransparency = 1;
    a32b52c52.Size = UDim2.new(1, 0, 0, 32) a32b52c52.Visible = true;
    a32b52c52.CanvasSize = UDim2.new(0, 700, 0, 0)
    a32b52c52.ScrollBarThickness = 0;
    
    _938_452.Name = _185_322(30)
    _938_452.Parent = a32b52c52; _938_452.FillDirection = Enum.FillDirection.Horizontal;
    _938_452.SortOrder = Enum.SortOrder.LayoutOrder; _938_452.Padding = UDim.new(0, 4)
    
    __lsZXoNZxGSX.Name = _185_322(31)
    __lsZXoNZxGSX.Parent = a32b52c52; __lsZXoNZxGSX.PaddingLeft = UDim.new(0, 5)
    
    __gnHZJbMuHwp.Name = _185_322(32)
    __gnHZJbMuHwp.Parent = _783_273; __gnHZJbMuHwp.AnchorPoint = Vector2.new(0.5, 0)
    __gnHZJbMuHwp.BackgroundColor3 = Color3.fromRGB(24, 24, 24) __gnHZJbMuHwp.BorderSizePixel = 0;
    __gnHZJbMuHwp.Position = UDim2.new(0.5, 0, 0, 2) __gnHZJbMuHwp.Size = UDim2.new(1, -5, 0, 28)
    
    L408_99.Name = _185_322(33)
    L408_99.Parent = __gnHZJbMuHwp; L408_99.BackgroundTransparency = 1;
    L408_99.Position = UDim2.new(0, 7, 0, 5) L408_99.Size = UDim2.new(0, 0, 0, 16)
    L408_99.Font = Enum.Font.Code; L408_99.Text = windowTitle;
    L408_99.TextColor3 = Color3.fromRGB(230, 230, 230) L408_99.TextSize = 16; L408_99.TextXAlignment = Enum.TextXAlignment.Left;
    
    _1181x706.Name = _185_322(34)
    _1181x706.Parent = __gnHZJbMuHwp; _1181x706.BackgroundColor3 = nexlib.accentclr;
    _1181x706.BorderSizePixel = 0; _1181x706.Position = UDim2.new(0, 0, 0, 27) _1181x706.Size = UDim2.new(1, 0, 0, 1)
    
    _376_509(__gnHZJbMuHwp, _783_273)

    local v56079 = game:GetService(_185_322(35))
    local L429_28 = v56079:FindFirstChild(_185_322(36)) or Instance.new(_185_322(37))
    L429_28.Name = _185_322(36)
    L429_28.Size = 0
    L429_28.Parent = v56079

    local function a49b45c10()
        _783_273.Visible = L561_63
        _lO1I110O0.Visible = L561_63
        game:GetService(_185_322(4)).MouseBehavior = L561_63 and Enum.MouseBehavior.Default or Enum.MouseBehavior.LockCenter
        
        local v53851 = game:GetService(_185_322(13))
        if L561_63 then
            v53851:Create(L429_28, TweenInfo.new(0.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {Size = 18}):Play()
            _783_273.BackgroundTransparency = 1
            v53851:Create(_783_273, TweenInfo.new(0.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {BackgroundTransparency = 0.15}):Play()
        else
            v53851:Create(L429_28, TweenInfo.new(0.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {Size = 0}):Play()
        end
    end
    
    game:GetService(_185_322(4)).InputBegan:Connect(function(input, processed)
        if input.KeyCode == Enum.KeyCode.RightShift then 
            L561_63 = not L561_63;
            a49b45c10()
        end 
        do local __OIll0lOI = 577 + 450 end
    end)

    local a87b27c15 = game:GetService(_185_322(7))
    if a87b27c15:FindFirstChild(_185_322(38)) then
        a87b27c15.ExecutorToggleUI:Destroy()
    end
    do local __lOllI1IO = 132 + 477 end

    local _425_141 = Instance.new(_185_322(5))
    _425_141.Name = _185_322(38)
    _425_141.ResetOnSpawn = false
    _425_141.Parent = a87b27c15

    local a81b35c84 = Instance.new(_185_322(39))
    a81b35c84.Name = _185_322(40)
    a81b35c84.Size = UDim2.new(0, 65, 0, 36)
    a81b35c84.Position = UDim2.new(0, 20, 0, 20)
    a81b35c84.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
    a81b35c84.BorderSizePixel = 0
    a81b35c84.Active = true
    a81b35c84.Draggable = true
    a81b35c84.Parent = _425_141

    local L788_37 = Instance.new(_185_322(16))
    L788_37.Color = nexlib.accentclr 
    L788_37.Thickness = 2
    L788_37.Parent = a81b35c84

    local _1160x364 = Instance.new(_185_322(18))
    _1160x364.Size = UDim2.new(1, -6, 0, 16)
    _1160x364.Position = UDim2.new(0, 3, 0, 2)
    _1160x364.BackgroundTransparency = 1
    _1160x364.Text = _185_322(41)
    _1160x364.TextColor3 = Color3.fromRGB(230, 230, 230)
    _1160x364.TextSize = 12
    _1160x364.Font = Enum.Font.GothamBold
    _1160x364.TextXAlignment = Enum.TextXAlignment.Left
    _1160x364.Parent = a81b35c84

    local _7658x168 = Instance.new(_185_322(18))
    _7658x168.Size = UDim2.new(1, -6, 0, 16)
    _7658x168.Position = UDim2.new(0, 3, 0, 18)
    _7658x168.BackgroundTransparency = 1
    _7658x168.Text = _185_322(42)
    _7658x168.TextColor3 = Color3.fromRGB(230, 230, 230)
    _7658x168.TextSize = 12
    _7658x168.Font = Enum.Font.GothamBold
    _7658x168.TextXAlignment = Enum.TextXAlignment.Left
    _7658x168.Parent = a81b35c84

    a81b35c84.MouseButton1Click:Connect(function()
        L561_63 = not L561_63
        a49b45c10()
    end)
    
    coroutine.wrap(function()
        while task.wait() do 
            _1181x706.BackgroundColor3 = nexlib.accentclr 
            L788_37.Color = nexlib.accentclr 
            _lO1I110O0.BackgroundColor3 = nexlib.accentclr
            
            if L561_63 then
                local _6588x624 = game:GetService(_185_322(4)):GetMouseLocation()
                _lO1I110O0.Position = UDim2.new(0, _6588x624.X, 0, _6588x624.Y)
            end
        end 
    end)()

    local __hwEbYRFKK = {}
    
    function __hwEbYRFKK:Tab(tabName)
        local v87080 = 50;
        
        local __gCVqYDRdXmV = Instance.new(_185_322(39))
        __gCVqYDRdXmV.Name = tabName .. _185_322(43)
        __gCVqYDRdXmV.Parent = a32b52c52
        __gCVqYDRdXmV.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
        __gCVqYDRdXmV.BorderSizePixel = 0
        __gCVqYDRdXmV.Font = Enum.Font.Code
        __gCVqYDRdXmV.Text = tabName
        __gCVqYDRdXmV.TextColor3 = Color3.fromRGB(150, 150, 150)
        __gCVqYDRdXmV.TextSize = 14
        __gCVqYDRdXmV.AutoButtonColor = false
        
        local _9275x415 = game:GetService(_185_322(19))
        local __BzTmvdpMcGg = _9275x415:GetTextSize(tabName, 14, Enum.Font.Code, Vector2.new(500, 500))
        __gCVqYDRdXmV.Size = UDim2.new(0, __BzTmvdpMcGg.X + 28, 0, 26)
        
        local _00l0IOll = Instance.new(_185_322(9))
        _00l0IOll.Name = _185_322(44)
        _00l0IOll.Parent = __gCVqYDRdXmV
        _00l0IOll.BackgroundColor3 = nexlib.accentclr
        _00l0IOll.BorderSizePixel = 0
        _00l0IOll.Position = UDim2.new(0, 0, 0, 0)
        _00l0IOll.Size = UDim2.new(1, 0, 0, 2)
        _00l0IOll.Visible = false
        
        local v77745 = Instance.new(_185_322(20))
        v77745.Name = _185_322(45)
        v77745.Parent = __gCVqYDRdXmV
        v77745.BackgroundTransparency = 1
        v77745.Size = UDim2.new(1, 0, 1, 0)
        v77745.Image = _185_322(26)
        v77745.ImageColor3 = Color3.fromRGB(45, 45, 45)
        v77745.ScaleType = Enum.ScaleType.Slice
        v77745.SliceCenter = Rect.new(2, 2, 62, 62)
        local _0x234e = Instance.new(_185_322(21))
        local _658_993 = Instance.new(_185_322(23))
        local _0xfa7c = Instance.new(_185_322(22))
        local _203_856 = Instance.new(_185_322(21))
        local a36b16c67 = Instance.new(_185_322(23))
        local _144_866 = Instance.new(_185_322(22))
        
        _0x234e.Name = tabName .. _185_322(46)
        _0x234e.Parent = v24652;
        _0x234e.Active = true; _0x234e.BackgroundTransparency = 1; _0x234e.BorderSizePixel = 0;
        _0x234e.Position = UDim2.new(0, 1, 0, 35) _0x234e.Size = UDim2.new(0, 245, 1, -40)
        _0x234e.Visible = false; _0x234e.CanvasSize = UDim2.new(0, 0, 0, 0) _0x234e.ScrollBarThickness = 4; _0x234e.ScrollingEnabled = true;
        
        _658_993.Parent = _0x234e; _658_993.PaddingTop = UDim.new(0, 5)
        _0xfa7c.Parent = _0x234e; _0xfa7c.SortOrder = Enum.SortOrder.LayoutOrder; _0xfa7c.Padding = UDim.new(0, 10)
        
        _203_856.Name = tabName .. _185_322(47)
        _203_856.Parent = v24652;
        _203_856.Active = true; _203_856.BackgroundTransparency = 1; _203_856.BorderSizePixel = 0;
        _203_856.Position = UDim2.new(0, 255, 0, 35) _203_856.Size = UDim2.new(0, 245, 1, -40)
        _203_856.Visible = false; _203_856.CanvasSize = UDim2.new(0, 0, 0, 0) _203_856.ScrollBarThickness = 4; _203_856.ScrollingEnabled = true;
        
        a36b16c67.Parent = _203_856; a36b16c67.PaddingTop = UDim.new(0, 5)
        _144_866.Parent = _203_856; _144_866.SortOrder = Enum.SortOrder.LayoutOrder; _144_866.Padding = UDim.new(0, 10)
        
        table.insert(_1698x129, {_154_244 = __gCVqYDRdXmV, topLine = _00l0IOll, outline = v77745, h1 = _0x234e, h2 = _203_856})
        
        if _OlOlOlOI10 == false then 
            _OlOlOlOI10 = true;
            _0x234e.Visible = true;
            _203_856.Visible = true;
            __gCVqYDRdXmV.BackgroundColor3 = Color3.fromRGB(33, 33, 33)
            __gCVqYDRdXmV.TextColor3 = Color3.fromRGB(230, 230, 230)
            _00l0IOll.Visible = true
            v77745.ImageColor3 = Color3.fromRGB(65, 65, 65)
        end;
        
        __gCVqYDRdXmV.MouseButton1Click:Connect(function()
            local _369_106 = game:GetService(_185_322(13))
            for __YEzeEiWEWFAS, t in ipairs(_1698x129) do
                if t.btn == __gCVqYDRdXmV then
                    _369_106:Create(t.btn, TweenInfo.new(0.12, Enum.EasingStyle.Quad), {BackgroundColor3 = Color3.fromRGB(33, 33, 33), TextColor3 = Color3.fromRGB(230, 230, 230)}):Play()
                    t.topLine.Visible = true
                    t.outline.ImageColor3 = Color3.fromRGB(65, 65, 65)
                    t.h1.Visible = true
                    t.h2.Visible = true
                else
                    _369_106:Create(t.btn, TweenInfo.new(0.12, Enum.EasingStyle.Quad), {BackgroundColor3 = Color3.fromRGB(22, 22, 22), TextColor3 = Color3.fromRGB(150, 150, 150)}):Play()
                    t.topLine.Visible = false
                    t.outline.ImageColor3 = Color3.fromRGB(45, 45, 45)
                    t.h1.Visible = false
                    t.h2.Visible = false
                end
                do local __10I1l1lO = 352 + 514 end
            end
        end)
        
        coroutine.wrap(function()
            while task.wait() do 
                if _00l0IOll.Visible then
                    _00l0IOll.BackgroundColor3 = nexlib.accentclr 
                end
            end 
        end)()
        
        local L926_31 = {}
        
        function L926_31:Section(sectionName, forceSide)
            v87080 = v87080 - 1;
            local L277_21 = nil;
            
            if forceSide == 1 then L277_21 = _0x234e
            elseif forceSide == 2 then L277_21 = _203_856
            else
                local _1672x889 = 0; local a89b99c60 = 0;
                for s, f in next, _0x234e:GetChildren() do if f.Name == _185_322(48) or f.Name == _185_322(49) then _1672x889 = _1672x889 + 1 end end;
                for s, f in next, _203_856:GetChildren() do if f.Name == _185_322(48) or f.Name == _185_322(49) then a89b99c60 = a89b99c60 + 1 end end;
                if _1672x889 == 0 and a89b99c60 == 0 then L277_21 = _0x234e 
                elseif _1672x889 == a89b99c60 then L277_21 = _0x234e 
                else L277_21 = _203_856 end;
            end
            
            local __dbloARWjl = Instance.new(_185_322(9))
            local __PauMDmeitP = Instance.new(_185_322(20))
            local _0x848d = Instance.new(_185_322(20))
            local L349_81 = Instance.new(_185_322(9))
            local v32876 = Instance.new(_185_322(18))
            local _l10lO10l0l1 = Instance.new(_185_322(9))
            local __ZZvUJOD = Instance.new(_185_322(22))
            
            __dbloARWjl.Name = _185_322(48)
            __dbloARWjl.Parent = L277_21;
            __dbloARWjl.AnchorPoint = Vector2.new(0.5, 0)
            __dbloARWjl.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
            __dbloARWjl.BorderSizePixel = 0;
            __dbloARWjl.Size = UDim2.new(1, -2, 0, 24)
            __dbloARWjl.ZIndex = v87080;
            
            __PauMDmeitP.Name = _185_322(50)
            __PauMDmeitP.Parent = __dbloARWjl; __PauMDmeitP.BackgroundTransparency = 1; __PauMDmeitP.Size = UDim2.new(1, 0, 1, 0)
            __PauMDmeitP.Image = _185_322(26) __PauMDmeitP.ImageColor3 = Color3.fromRGB(0, 0, 0)
            __PauMDmeitP.ScaleType = Enum.ScaleType.Slice; __PauMDmeitP.SliceCenter = Rect.new(2, 2, 62, 62)
            
            _0x848d.Name = _185_322(51)
            _0x848d.Parent = __dbloARWjl; _0x848d.BackgroundTransparency = 1; _0x848d.Position = UDim2.new(0, 1, 0, 1)
            _0x848d.Size = UDim2.new(1, -2, 1, -2) _0x848d.Image = _185_322(26)
            _0x848d.ImageColor3 = Color3.fromRGB(60, 60, 60) _0x848d.ScaleType = Enum.ScaleType.Slice; _0x848d.SliceCenter = Rect.new(2, 2, 62, 62)
            
            L349_81.Name = _185_322(52)
            L349_81.Parent = __dbloARWjl; L349_81.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
            L349_81.BorderSizePixel = 0; L349_81.Position = UDim2.new(0, 10, 0, 0)
            
            v32876.Name = _185_322(53)
            v32876.Parent = L349_81; v32876.BackgroundTransparency = 1; v32876.Position = UDim2.new(0, 0, 0, -3)
            v32876.Size = UDim2.new(1, 0, 0, 7) v32876.Font = Enum.Font.Code; v32876.Text = sectionName;
            v32876.TextColor3 = Color3.fromRGB(230, 230, 230) v32876.TextSize = 14;
            
            _l10lO10l0l1.Name = _185_322(54)
            _l10lO10l0l1.Parent = __dbloARWjl; _l10lO10l0l1.AnchorPoint = Vector2.new(0.5, 0)
            _l10lO10l0l1.BackgroundTransparency = 1; _l10lO10l0l1.Position = UDim2.new(0.5, 0, 0, 15)
            _l10lO10l0l1.Size = UDim2.new(1, -16, 0, 0)
            
            __ZZvUJOD.Parent = _l10lO10l0l1; __ZZvUJOD.SortOrder = Enum.SortOrder.LayoutOrder; __ZZvUJOD.Padding = UDim.new(0, 5)
            L349_81.Size = UDim2.new(0, v32876.TextBounds.X + 6, 0, 7)
            
            local function _6853x256()
                __dbloARWjl.Size = UDim2.new(1, -2, 0, __ZZvUJOD.AbsoluteContentSize.Y + 24)
                _0x234e.CanvasSize = UDim2.new(0, 0, 0, _0xfa7c.AbsoluteContentSize.Y + 20)
                _203_856.CanvasSize = UDim2.new(0, 0, 0, _144_866.AbsoluteContentSize.Y + 20)
            end

            local L429_27 = {}
            
            function L429_27:Toggle(text, default, callback)
                local __yJPdTAjBxLmN = Instance.new(_185_322(39))
                local _IO11IO100 = Instance.new(_185_322(20))
                local _3957x904 = Instance.new(_185_322(20))
                local __akbrmvrTgw = Instance.new(_185_322(9))
                local _5527x333 = Instance.new(_185_322(9))
                local v41003 = Instance.new(_185_322(18))
                
                __yJPdTAjBxLmN.Name = _185_322(41)
                __yJPdTAjBxLmN.Parent = _l10lO10l0l1
                __yJPdTAjBxLmN.BackgroundColor3 = Color3.fromRGB(38, 38, 38)
                __yJPdTAjBxLmN.BorderSizePixel = 0
                __yJPdTAjBxLmN.Size = UDim2.new(1, 0, 0, 22)
                __yJPdTAjBxLmN.AutoButtonColor = false
                __yJPdTAjBxLmN.Text = ''
                
                _IO11IO100.Parent = __yJPdTAjBxLmN; _IO11IO100.BackgroundTransparency = 1; _IO11IO100.Size = UDim2.new(1, 0, 1, 0)
                _IO11IO100.Image = _185_322(26) _IO11IO100.ImageColor3 = Color3.fromRGB(60, 60, 60)
                _IO11IO100.ScaleType = Enum.ScaleType.Slice; _IO11IO100.SliceCenter = Rect.new(2, 2, 62, 62)
                
                _3957x904.Parent = __yJPdTAjBxLmN; _3957x904.BackgroundTransparency = 1; _3957x904.Position = UDim2.new(0, 1, 0, 1)
                _3957x904.Size = UDim2.new(1, -2, 1, -2) _3957x904.Image = _185_322(26)
                _3957x904.ImageColor3 = Color3.fromRGB(0, 0, 0) _3957x904.ScaleType = Enum.ScaleType.Slice; _3957x904.SliceCenter = Rect.new(2, 2, 62, 62)
                
                __akbrmvrTgw.Name = _185_322(55)
                __akbrmvrTgw.Parent = __yJPdTAjBxLmN
                __akbrmvrTgw.BackgroundColor3 = Color3.fromRGB(28, 28, 28)
                __akbrmvrTgw.BorderSizePixel = 0
                __akbrmvrTgw.Position = UDim2.new(0, 6, 0.5, -6)
                __akbrmvrTgw.Size = UDim2.new(0, 12, 0, 12)
                
                _5527x333.Name = _185_322(56)
                _5527x333.Parent = __akbrmvrTgw
                _5527x333.BackgroundColor3 = nexlib.accentclr
                _5527x333.BorderSizePixel = 0
                _5527x333.Position = UDim2.new(0, 2, 0, 2)
                _5527x333.Size = UDim2.new(0, 8, 0, 8)
                _5527x333.Visible = default or false
                
                v41003.Parent = __yJPdTAjBxLmN
                v41003.BackgroundTransparency = 1
                v41003.Position = UDim2.new(0, 25, 0, 0)
                v41003.Size = UDim2.new(1, -25, 1, 0)
                v41003.Font = Enum.Font.Code
                v41003.Text = text
                v41003.TextColor3 = Color3.fromRGB(190, 190, 190)
                v41003.TextSize = 14
                v41003.TextXAlignment = Enum.TextXAlignment.Left
                
                local L248_33 = default or false
                __yJPdTAjBxLmN.MouseButton1Click:Connect(function()
                    L248_33 = not L248_33
                    _5527x333.Visible = L248_33
                    pcall(callback, L248_33)
                end)
                
                _6853x256()
                coroutine.wrap(function()
                    while task.wait() do _5527x333.BackgroundColor3 = nexlib.accentclr end
                end)()
                local a85b11c80 = {}
                function a85b11c80:Set(L619_44)
                    L248_33 = L619_44
                    _5527x333.Visible = L248_33
                    pcall(callback, L248_33)
                end
                return a85b11c80
            end
            do local ___EFQuSWtF = 312 + 388 end

            function L429_27:Button(text, callback)
                local _154_244 = Instance.new(_185_322(39))
                local _6024x853 = Instance.new(_185_322(20))
                local _974_367 = Instance.new(_185_322(20))
                
                _154_244.Name = _185_322(57)
                _154_244.Parent = _l10lO10l0l1;
                _154_244.BackgroundColor3 = Color3.fromRGB(38, 38, 38)
                _154_244.BorderColor3 = nexlib.accentclr;
                _154_244.BorderSizePixel = 0;
                _154_244.Size = UDim2.new(1, 0, 0, 20)
                _154_244.AutoButtonColor = false; _154_244.Font = Enum.Font.Code;
                _154_244.TextColor3 = Color3.fromRGB(230, 230, 230)
                _154_244.TextSize = 14; _154_244.Text = text;
                
                _6024x853.Name = _185_322(58)
                _6024x853.Parent = _154_244; _6024x853.BackgroundTransparency = 1; _6024x853.Size = UDim2.new(1, 0, 1, 0)
                _6024x853.Image = _185_322(26) _6024x853.ImageColor3 = Color3.fromRGB(60, 60, 60)
                _6024x853.ScaleType = Enum.ScaleType.Slice; _6024x853.SliceCenter = Rect.new(2, 2, 62, 62)
                
                _974_367.Name = _185_322(59)
                _974_367.Parent = _154_244; _974_367.BackgroundTransparency = 1; _974_367.Position = UDim2.new(0, 1, 0, 1)
                _974_367.Size = UDim2.new(1, -2, 1, -2) _974_367.Image = _185_322(26)
                _974_367.ImageColor3 = Color3.fromRGB(0, 0, 0) _974_367.ScaleType = Enum.ScaleType.Slice; _974_367.SliceCenter = Rect.new(2, 2, 62, 62)
                
                _154_244.MouseButton1Click:Connect(function() pcall(callback) end)
                _154_244.MouseEnter:Connect(function() _154_244.BorderSizePixel = 1 end)
                _154_244.MouseLeave:Connect(function() _154_244.BorderSizePixel = 0 end)
                
                _6853x256()
                coroutine.wrap(function()
                    while task.wait() do _154_244.BorderColor3 = nexlib.accentclr end 
                end)()
            end;
            
            function L429_27:Slider(text, min, max, default, rounding, callback)
                local _771_374 = Instance.new(_185_322(39))
                local _393_894 = Instance.new(_185_322(9))
                local L180_65 = Instance.new(_185_322(18))
                local _2281x495 = Instance.new(_185_322(18))
                
                _771_374.Name = _185_322(60)
                _771_374.Parent = _l10lO10l0l1; _771_374.BackgroundColor3 = Color3.fromRGB(38, 38, 38); _771_374.BorderSizePixel = 0;
                _771_374.Size = UDim2.new(1, 0, 0, 16); _771_374.Text = ''; _771_374.AutoButtonColor = false;
                
                local L742_94 = Instance.new(_185_322(20))
                L742_94.Parent = _771_374; L742_94.BackgroundTransparency = 1; L742_94.Size = UDim2.new(1, 0, 1, 0)
                L742_94.Image = _185_322(26) L742_94.ImageColor3 = Color3.fromRGB(60, 60, 60)
                L742_94.ScaleType = Enum.ScaleType.Slice; L742_94.SliceCenter = Rect.new(2, 2, 62, 62)
                
                local L151_72 = Instance.new(_185_322(20))
                L151_72.Parent = _771_374; L151_72.BackgroundTransparency = 1; L151_72.Position = UDim2.new(0, 1, 0, 1)
                L151_72.Size = UDim2.new(1, -2, 1, -2) L151_72.Image = _185_322(26)
                L151_72.ImageColor3 = Color3.fromRGB(0, 0, 0) L151_72.ScaleType = Enum.ScaleType.Slice; L151_72.SliceCenter = Rect.new(2, 2, 62, 62)

                _393_894.Name = _185_322(61)
                _393_894.Parent = _771_374; _393_894.BackgroundColor3 = nexlib.accentclr; _393_894.BorderSizePixel = 0;
                _393_894.BackgroundTransparency = 0.55;
                _393_894.Size = UDim2.new((default - min) / (max - min), 0, 1, 0)
                
                L180_65.Name = _185_322(62)
                L180_65.Parent = _771_374; L180_65.BackgroundTransparency = 1; L180_65.Position = UDim2.new(0, 6, 0, 0)
                L180_65.Size = UDim2.new(0.7, 0, 1, 0)
                L180_65.Font = Enum.Font.Code; L180_65.Text = text; L180_65.TextColor3 = Color3.fromRGB(190, 190, 190); L180_65.TextSize = 13;
                L180_65.TextXAlignment = Enum.TextXAlignment.Left; L180_65.ZIndex = 2;
                
                _2281x495.Name = _185_322(63)
                _2281x495.Parent = _771_374; _2281x495.BackgroundTransparency = 1; _2281x495.Position = UDim2.new(1, -75, 0, 0)
                _2281x495.Size = UDim2.new(0, 70, 1, 0) _2281x495.Font = Enum.Font.Code; _2281x495.Text = tostring(default) .. _185_322(64);
                _2281x495.TextColor3 = Color3.fromRGB(240, 240, 240); _2281x495.TextSize = 13; _2281x495.TextXAlignment = Enum.TextXAlignment.Right; _2281x495.ZIndex = 5;
                
                local L425_74 = false
                local function _846_348(input)
                    local _7507x242 = math.clamp((input.Position.X - _771_374.AbsolutePosition.X) / _771_374.AbsoluteSize.X, 0, 1)
                    local L619_44 = min + (max - min) * _7507x242
                    if rounding == 0 then
                        L619_44 = math.floor(L619_44 + 0.5)
                    else
                        L619_44 = tonumber(string.format(_185_322(65) .. rounding .. _185_322(66), L619_44))
                    end
                    _393_894.Size = UDim2.new(_7507x242, 0, 1, 0)
                    _2281x495.Text = tostring(L619_44) .. _185_322(64)
                    pcall(callback, L619_44)
                end
                
                _771_374.InputBegan:Connect(function(input)
                    if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
                        L425_74 = true
                        _846_348(input)
                    end
                end)
                game:GetService(_185_322(4)).InputEnded:Connect(function(input)
                    if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then L425_74 = false end
                end)
                game:GetService(_185_322(4)).InputChanged:Connect(function(input)
                    if L425_74 and (input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch) then
                        _846_348(input)
                    end
                end)
                
                _6853x256()
                coroutine.wrap(function()
                    while task.wait() do _393_894.BackgroundColor3 = nexlib.accentclr end
                    do local __IOI0100l = 173 + 906 end
                end)()
            end

            function L429_27:Input(text, default, placeholder, callback)
                local __WpcgMLxB = Instance.new(_185_322(9))
                local v26413 = Instance.new(_185_322(18))
                local _0lOlII = Instance.new(_185_322(67))
                
                __WpcgMLxB.Name = _185_322(68)
                __WpcgMLxB.Parent = _l10lO10l0l1; __WpcgMLxB.BackgroundTransparency = 1; __WpcgMLxB.Size = UDim2.new(1, 0, 0, 38)
                
                v26413.Name = _185_322(69)
                v26413.Parent = __WpcgMLxB; v26413.BackgroundTransparency = 1; v26413.Size = UDim2.new(1, 0, 0, 15)
                v26413.Font = Enum.Font.Code; v26413.Text = text; v26413.TextColor3 = Color3.fromRGB(190, 190, 190); v26413.TextSize = 14;
                v26413.TextXAlignment = Enum.TextXAlignment.Left;
                
                _0lOlII.Name = _185_322(70)
                _0lOlII.Parent = __WpcgMLxB; _0lOlII.BackgroundColor3 = Color3.fromRGB(38, 38, 38); _0lOlII.BorderSizePixel = 0;
                _0lOlII.Position = UDim2.new(0, 0, 0, 18); _0lOlII.Size = UDim2.new(1, 0, 0, 20);
                _0lOlII.Font = Enum.Font.Code; _0lOlII.PlaceholderText = placeholder or ""; _0lOlII.Text = default or "";
                _0lOlII.TextColor3 = Color3.fromRGB(230, 230, 230); _0lOlII.TextSize = 14; _0lOlII.TextXAlignment = Enum.TextXAlignment.Left;
                
                _0lOlII.FocusLost:Connect(function(enterPressed)
                    pcall(callback, _0lOlII.Text)
                end)
                
                _6853x256()
            end

            function L429_27:Dropdown(text, list, default, callback)
                default = typeof(default) == _185_322(71) and default;
                if default == '' then default = nil end;
                
                local _0x12f8 = Instance.new(_185_322(9))
                local _0x59ea = Instance.new(_185_322(18))
                local _lOOO10lOI1I = Instance.new(_185_322(39))
                local a38b77c24 = Instance.new(_185_322(20))
                local _0xbce3 = Instance.new(_185_322(20))
                local _6434x601 = Instance.new(_185_322(18))
                local _8206x386 = Instance.new(_185_322(20))
                
                _0x12f8.Name = _185_322(72)
                _0x12f8.Parent = _l10lO10l0l1; _0x12f8.BackgroundTransparency = 1; _0x12f8.Size = UDim2.new(1, 0, 0, 37)
                
                _0x59ea.Name = _185_322(73)
                _0x59ea.Parent = _0x12f8; _0x59ea.BackgroundTransparency = 1; _0x59ea.Size = UDim2.new(0, 0, 0, 13)
                _0x59ea.Font = Enum.Font.Code; _0x59ea.Text = text; _0x59ea.TextColor3 = Color3.fromRGB(230, 230, 230) _0x59ea.TextSize = 14;
                _0x59ea.TextXAlignment = Enum.TextXAlignment.Left;
                
                _lOOO10lOI1I.Name = _185_322(74)
                _lOOO10lOI1I.Parent = _0x12f8; _lOOO10lOI1I.BackgroundColor3 = Color3.fromRGB(38, 38, 38) _lOOO10lOI1I.BorderSizePixel = 0;
                _lOOO10lOI1I.Position = UDim2.new(0, 0, 1, -20) _lOOO10lOI1I.Size = UDim2.new(1, 0, 0, 20) _lOOO10lOI1I.Text = ''; _lOOO10lOI1I.AutoButtonColor = false;
                
                a38b77c24.Parent = _lOOO10lOI1I; a38b77c24.BackgroundTransparency = 1; a38b77c24.Size = UDim2.new(1, 0, 1, 0)
                a38b77c24.Image = _185_322(26) a38b77c24.ImageColor3 = Color3.fromRGB(60, 60, 60)
                a38b77c24.ScaleType = Enum.ScaleType.Slice; a38b77c24.SliceCenter = Rect.new(2, 2, 62, 62)
                
                _0xbce3.Parent = _lOOO10lOI1I; _0xbce3.BackgroundTransparency = 1; _0xbce3.Position = UDim2.new(0, 1, 0, 1)
                _0xbce3.Size = UDim2.new(1, -2, 1, -2) _0xbce3.Image = _185_322(26) _0xbce3.ImageColor3 = Color3.fromRGB(0, 0, 0)
                _0xbce3.ScaleType = Enum.ScaleType.Slice; _0xbce3.SliceCenter = Rect.new(2, 2, 62, 62)
                
                _6434x601.Name = _185_322(75)
                _6434x601.Parent = _lOOO10lOI1I; _6434x601.BackgroundTransparency = 1; _6434x601.Position = UDim2.new(0, 5, 0, 0)
                _6434x601.Size = UDim2.new(1, -5, 1, 0) _6434x601.Font = Enum.Font.Code; _6434x601.Text = typeof(default) == _185_322(71) and default or _185_322(76);
                _6434x601.TextColor3 = Color3.fromRGB(180, 180, 180) _6434x601.TextSize = 14; _6434x601.TextXAlignment = Enum.TextXAlignment.Left;
                
                _8206x386.Name = _185_322(77)
                _8206x386.Parent = _lOOO10lOI1I; _8206x386.AnchorPoint = Vector2.new(0, 0.5) _8206x386.BackgroundTransparency = 1;
                _8206x386.Position = UDim2.new(1, -22, 0.5, 0) _8206x386.Size = UDim2.new(0, 20, 0, 20)
                _8206x386.Image = _185_322(78) _8206x386.ImageColor3 = Color3.fromRGB(180, 180, 180)
                
                _6853x256()
                
                local __XTbJjtU = Instance.new(_185_322(9))
                local __RodMQh = Instance.new(_185_322(20))
                local _1519x258 = Instance.new(_185_322(20))
                local _317_743 = Instance.new(_185_322(21))
                local L746_64 = Instance.new(_185_322(22))
                local L767_89 = Instance.new(_185_322(23))
                
                __XTbJjtU.Name = _185_322(79)
                __XTbJjtU.Parent = __dbloARWjl; __XTbJjtU.AnchorPoint = Vector2.new(0.5, 0)
                __XTbJjtU.BackgroundColor3 = Color3.fromRGB(38, 38, 38) __XTbJjtU.BorderSizePixel = 0;
                __XTbJjtU.Position = UDim2.new(0.5, 0, 0, __ZZvUJOD.AbsoluteContentSize.Y + 19)
                __XTbJjtU.Size = UDim2.new(1, -16, 0, 0) __XTbJjtU.Visible = false; __XTbJjtU.ZIndex = 10;
                
                __RodMQh.Parent = __XTbJjtU; __RodMQh.BackgroundTransparency = 1; __RodMQh.Size = UDim2.new(1, 0, 1, 0)
                __RodMQh.Image = _185_322(26) __RodMQh.ImageColor3 = Color3.fromRGB(60, 60, 60)
                __RodMQh.ScaleType = Enum.ScaleType.Slice; __RodMQh.SliceCenter = Rect.new(2, 2, 62, 62)
                
                _1519x258.Parent = __XTbJjtU; _1519x258.BackgroundTransparency = 1; _1519x258.Position = UDim2.new(0, 1, 0, 1)
                _1519x258.Size = UDim2.new(1, -2, 1, -2) _1519x258.Image = _185_322(26) _1519x258.ImageColor3 = Color3.fromRGB(0, 0, 0)
                _1519x258.ScaleType = Enum.ScaleType.Slice; _1519x258.SliceCenter = Rect.new(2, 2, 62, 62)
                
                _317_743.Name = _185_322(80)
                _317_743.Parent = __XTbJjtU; _317_743.Active = true; _317_743.BackgroundTransparency = 1; _317_743.BorderSizePixel = 0;
                _317_743.Size = UDim2.new(1, -4, 1, 0) _317_743.ScrollBarThickness = 2; _317_743.CanvasSize = UDim2.new(0, 0, 0, 0)
                
                L746_64.Parent = _317_743; L746_64.HorizontalAlignment = Enum.HorizontalAlignment.Center; L746_64.Padding = UDim.new(0, 2)
                L767_89.Parent = _317_743; L767_89.PaddingTop = UDim.new(0, 6)
                
                table.insert(nexlib.dropdownframes, __XTbJjtU)
                table.insert(nexlib.dropdownframes, _0x12f8)
                
                local v67678 = {}
                
                _lOOO10lOI1I.MouseButton1Click:Connect(function()
                    if __XTbJjtU.Visible == false then 
                        for s, f in next, nexlib.dropdownframes do if f.Name == _185_322(79) then f.Visible = false end end;
                        for s, f in next, nexlib.dropdownframes do if f.Name == _185_322(72) then f.DropdownFrame.DropdownArrow.Rotation = 0 end end;
                        _8206x386.Rotation = 180; __XTbJjtU.Visible = true 
                    else 
                        _8206x386.Rotation = 0; __XTbJjtU.Visible = false 
                    end 
                end)
                
                for s, f in next, list do 
                    local L674_11 = Instance.new(_185_322(39))
                    local v99684 = Instance.new(_185_322(18))
                    
                    L674_11.Name = _185_322(81)
                    L674_11.Parent = _317_743; L674_11.BackgroundColor3 = Color3.fromRGB(50, 50, 50)
                    L674_11.Size = UDim2.new(1, -12, 0, 20) L674_11.AutoButtonColor = false; L674_11.Font = Enum.Font.Code;
                    L674_11.Text = _185_322(82) .. f; L674_11.TextColor3 = Color3.fromRGB(230, 230, 230) L674_11.TextSize = 14;
                    L674_11.TextXAlignment = Enum.TextXAlignment.Left;
                    
                    v99684.Name = _185_322(83)
                    v99684.Parent = L674_11; v99684.BackgroundTransparency = 1; v99684.Position = UDim2.new(0, 7, 0, 0)
                    v99684.Size = UDim2.new(1, -7, 1, 0) v99684.Font = Enum.Font.Code; v99684.Text = f;
                    v99684.TextColor3 = nexlib.accentclr; v99684.TextSize = 14; v99684.TextXAlignment = Enum.TextXAlignment.Left;
                    
                    L674_11.MouseButton1Click:Connect(function()
                        __XTbJjtU.Visible = false; _6434x601.Text = f; default = f; pcall(callback, f)
                    end)
                    
                    coroutine.wrap(function()
                        while task.wait() do 
                            local _0x4ff4 = (typeof(default) == _185_322(71) and default == f)
                            v99684.BackgroundTransparency = 1;
                            v99684.TextTransparency = _0x4ff4 and 0 or 1;
                            L674_11.TextTransparency = _0x4ff4 and 1 or 0;
                            L674_11.BackgroundTransparency = _0x4ff4 and 0 or 1;
                            L674_11.BorderColor3 = nexlib.accentclr;
                        end 
                        do local _v39912 = 719 + 916 end
                    end)()
                    __XTbJjtU.Size = UDim2.new(1, -16, 0, math.clamp(L746_64.AbsoluteContentSize.Y + 12, 0, 150))
                    _317_743.CanvasSize = UDim2.new(0, 0, 0, L746_64.AbsoluteContentSize.Y + 12)
                end;
                
                coroutine.wrap(function()
                    while task.wait() do _lOOO10lOI1I.BorderColor3 = nexlib.accentclr end 
                end)()
                
                function v67678:Set(value)
                    _6434x601.Text = tostring(value)
                    default = value
                    pcall(callback, value)
                end
                
                return v67678
            end;
            do local _v46983 = 186 + 829 end
            
            function L429_27:Label(text)
                local _IO10ll101 = {}
                local _0xf0da = Instance.new(_185_322(18))
                
                _0xf0da.Name = _185_322(84)
                _0xf0da.Parent = _l10lO10l0l1; _0xf0da.BackgroundTransparency = 1; _0xf0da.Size = UDim2.new(1, 0, 0, 18)
                _0xf0da.Font = Enum.Font.Code; _0xf0da.Text = text; _0xf0da.TextColor3 = Color3.fromRGB(230, 230, 230)
                _0xf0da.TextSize = 14; _0xf0da.TextXAlignment = Enum.TextXAlignment.Left;
                
                _6853x256()
                
                function _IO10ll101:Change(newText) _0xf0da.Text = newText end;
                return _IO10ll101;
            end;
            do local __8988x571 = 14 + 940 end
            
            return L429_27;
        end;

        function L926_31:MultiSection(tabNames, forceSide)
            v87080 = v87080 - 1
            local L277_21 = nil
            if forceSide == 1 then
                L277_21 = _0x234e
            elseif forceSide == 2 then
                L277_21 = _203_856
            else
                local _1672x889, a89b99c60 = 0, 0
                for __YEzeEiWEWFAS, f in next, _0x234e:GetChildren() do
                    if f.Name == _185_322(48) or f.Name == _185_322(49) then _1672x889 = _1672x889 + 1 end
                end
                for __YEzeEiWEWFAS, f in next, _203_856:GetChildren() do
                    if f.Name == _185_322(48) or f.Name == _185_322(49) then a89b99c60 = a89b99c60 + 1 end
                end
                if _1672x889 <= a89b99c60 then L277_21 = _0x234e else L277_21 = _203_856 end
            end

            local _492_968 = Instance.new(_185_322(9))
            _492_968.Name = _185_322(49)
            _492_968.Parent = L277_21
            _492_968.AnchorPoint = Vector2.new(0.5, 0)
            _492_968.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
            _492_968.BorderSizePixel = 0
            _492_968.Size = UDim2.new(1, -2, 0, 50)
            _492_968.ZIndex = v87080

            local _lII1IIl1010O = Instance.new(_185_322(20))
            _lII1IIl1010O.Parent = _492_968
            _lII1IIl1010O.BackgroundTransparency = 1
            _lII1IIl1010O.Size = UDim2.new(1, 0, 1, 0)
            _lII1IIl1010O.Image = _185_322(26)
            _lII1IIl1010O.ImageColor3 = Color3.fromRGB(0, 0, 0)
            _lII1IIl1010O.ScaleType = Enum.ScaleType.Slice
            _lII1IIl1010O.SliceCenter = Rect.new(2, 2, 62, 62)

            local a74b74c25 = Instance.new(_185_322(20))
            a74b74c25.Parent = _492_968
            a74b74c25.BackgroundTransparency = 1
            a74b74c25.Position = UDim2.new(0, 1, 0, 1)
            a74b74c25.Size = UDim2.new(1, -2, 1, -2)
            a74b74c25.Image = _185_322(26)
            a74b74c25.ImageColor3 = Color3.fromRGB(60, 60, 60)
            a74b74c25.ScaleType = Enum.ScaleType.Slice
            a74b74c25.SliceCenter = Rect.new(2, 2, 62, 62)

            local a26b65c33 = Instance.new(_185_322(9))
            a26b65c33.Parent = _492_968
            a26b65c33.BackgroundTransparency = 1
            a26b65c33.Position = UDim2.new(0, 6, 0, 4)
            a26b65c33.Size = UDim2.new(1, -12, 0, 22)
            local v81075 = Instance.new(_185_322(22))
            v81075.Parent = a26b65c33
            v81075.FillDirection = Enum.FillDirection.Horizontal
            v81075.SortOrder = Enum.SortOrder.LayoutOrder
            v81075.Padding = UDim.new(0, 2)

            local _903_668 = Instance.new(_185_322(9))
            _903_668.Parent = _492_968
            _903_668.BackgroundTransparency = 1
            _903_668.Position = UDim2.new(0.5, 0, 0, 28)
            _903_668.AnchorPoint = Vector2.new(0.5, 0)
            _903_668.Size = UDim2.new(1, -16, 0, 0)

            local v96608, __xyRVCd = {}, {}
            local _0x2e6e = {}

            local function L152_37()
                local _I1OOOO = 0
                for __YEzeEiWEWFAS, a18b56c86 in ipairs(v96608) do
                    local L252_55 = a18b56c86:FindFirstChildOfClass(_185_322(22))
                    if L252_55 then
                        _I1OOOO = math.max(_I1OOOO, L252_55.AbsoluteContentSize.Y)
                    end
                    do local ___PbvHLaCH = 426 + 361 end
                end
                _903_668.Size = UDim2.new(1, -16, 0, _I1OOOO)
                _492_968.Size = UDim2.new(1, -2, 0, _I1OOOO + 36)
                _0x234e.CanvasSize = UDim2.new(0, 0, 0, _0xfa7c.AbsoluteContentSize.Y + 20)
                _203_856.CanvasSize = UDim2.new(0, 0, 0, _144_866.AbsoluteContentSize.Y + 20)
            end

            for i, tabName in ipairs(tabNames) do
                local a18b56c86 = Instance.new(_185_322(9))
                a18b56c86.Name = _185_322(85) .. tabName
                a18b56c86.Parent = _903_668
                a18b56c86.BackgroundTransparency = 1
                a18b56c86.Size = UDim2.new(1, 0, 0, 0)
                a18b56c86.Visible = (i == 1)

                local __ripFbiMEvOQE = Instance.new(_185_322(22))
                __ripFbiMEvOQE.Parent = a18b56c86
                __ripFbiMEvOQE.SortOrder = Enum.SortOrder.LayoutOrder
                __ripFbiMEvOQE.Padding = UDim.new(0, 5)

                __ripFbiMEvOQE:GetPropertyChangedSignal(_185_322(86)):Connect(function()
                    a18b56c86.Size = UDim2.new(1, 0, 0, __ripFbiMEvOQE.AbsoluteContentSize.Y)
                    L152_37()
                end)

                local _154_244 = Instance.new(_185_322(39))
                _154_244.Parent = a26b65c33
                _154_244.BackgroundColor3 = (i == 1) and Color3.fromRGB(38, 38, 38) or Color3.fromRGB(28, 28, 28)
                _154_244.BorderSizePixel = 0
                _154_244.Size = UDim2.new(0, 0, 1, 0)
                _154_244.AutomaticSize = Enum.AutomaticSize.X
                _154_244.AutoButtonColor = false
                _154_244.Font = Enum.Font.Code
                _154_244.Text = _185_322(87) .. tabName .. _185_322(87)
                _154_244.TextColor3 = (i == 1) and Color3.fromRGB(230, 230, 230) or Color3.fromRGB(150, 150, 150)
                _154_244.TextSize = 13

                local v49110 = Instance.new(_185_322(9))
                v49110.Parent = _154_244
                v49110.BackgroundColor3 = nexlib.accentclr
                v49110.BorderSizePixel = 0
                v49110.Position = UDim2.new(0, 0, 1, -2)
                v49110.Size = UDim2.new(1, 0, 0, 2)
                v49110.Visible = (i == 1)

                table.insert(v96608, a18b56c86)
                table.insert(__xyRVCd, {_154_244 = _154_244, v49110 = v49110, a18b56c86 = a18b56c86})

                _154_244.MouseButton1Click:Connect(function()
                    for idx, a91b73c94 in ipairs(__xyRVCd) do
                        local L208_73 = (idx == i)
                        a91b73c94.page.Visible = L208_73
                        a91b73c94.underline.Visible = L208_73
                        a91b73c94.btn.BackgroundColor3 = L208_73 and Color3.fromRGB(38, 38, 38) or Color3.fromRGB(28, 28, 28)
                        a91b73c94.btn.TextColor3 = L208_73 and Color3.fromRGB(230, 230, 230) or Color3.fromRGB(150, 150, 150)
                    end
                    L152_37()
                end)
                coroutine.wrap(function()
                    while task.wait() do
                        if v49110.Visible then
                            v49110.BackgroundColor3 = nexlib.accentclr
                        end
                    end
                end)()

                local function _987_413()
                    a18b56c86.Size = UDim2.new(1, 0, 0, __ripFbiMEvOQE.AbsoluteContentSize.Y)
                    L152_37()
                end

                local v44151 = {}

                function v44151:Toggle(text, default, callback)
                    local __yJPdTAjBxLmN = Instance.new(_185_322(39))
                    __yJPdTAjBxLmN.Name = _185_322(41)
                    __yJPdTAjBxLmN.Parent = a18b56c86
                    __yJPdTAjBxLmN.BackgroundColor3 = Color3.fromRGB(38, 38, 38)
                    __yJPdTAjBxLmN.BorderSizePixel = 0
                    __yJPdTAjBxLmN.Size = UDim2.new(1, 0, 0, 22)
                    __yJPdTAjBxLmN.AutoButtonColor = false
                    __yJPdTAjBxLmN.Text = ""

                    local _IO11IO100 = Instance.new(_185_322(20))
                    _IO11IO100.Parent = __yJPdTAjBxLmN
                    _IO11IO100.BackgroundTransparency = 1
                    _IO11IO100.Size = UDim2.new(1, 0, 1, 0)
                    _IO11IO100.Image = _185_322(26)
                    _IO11IO100.ImageColor3 = Color3.fromRGB(60, 60, 60)
                    _IO11IO100.ScaleType = Enum.ScaleType.Slice
                    _IO11IO100.SliceCenter = Rect.new(2, 2, 62, 62)

                    local _3957x904 = Instance.new(_185_322(20))
                    _3957x904.Parent = __yJPdTAjBxLmN
                    _3957x904.BackgroundTransparency = 1
                    _3957x904.Position = UDim2.new(0, 1, 0, 1)
                    _3957x904.Size = UDim2.new(1, -2, 1, -2)
                    _3957x904.Image = _185_322(26)
                    _3957x904.ImageColor3 = Color3.fromRGB(0, 0, 0)
                    _3957x904.ScaleType = Enum.ScaleType.Slice
                    _3957x904.SliceCenter = Rect.new(2, 2, 62, 62)

                    local __akbrmvrTgw = Instance.new(_185_322(9))
                    __akbrmvrTgw.Parent = __yJPdTAjBxLmN
                    __akbrmvrTgw.BackgroundColor3 = Color3.fromRGB(28, 28, 28)
                    __akbrmvrTgw.BorderSizePixel = 0
                    __akbrmvrTgw.Position = UDim2.new(0, 6, 0.5, -6)
                    __akbrmvrTgw.Size = UDim2.new(0, 12, 0, 12)

                    local _5527x333 = Instance.new(_185_322(9))
                    _5527x333.Parent = __akbrmvrTgw
                    _5527x333.BackgroundColor3 = nexlib.accentclr
                    _5527x333.BorderSizePixel = 0
                    _5527x333.Position = UDim2.new(0, 2, 0, 2)
                    _5527x333.Size = UDim2.new(0, 8, 0, 8)
                    _5527x333.Visible = default or false

                    local v41003 = Instance.new(_185_322(18))
                    v41003.Parent = __yJPdTAjBxLmN
                    v41003.BackgroundTransparency = 1
                    v41003.Position = UDim2.new(0, 25, 0, 0)
                    v41003.Size = UDim2.new(1, -25, 1, 0)
                    v41003.Font = Enum.Font.Code
                    v41003.Text = text
                    v41003.TextColor3 = Color3.fromRGB(190, 190, 190)
                    v41003.TextSize = 14
                    v41003.TextXAlignment = Enum.TextXAlignment.Left

                    local L248_33 = default or false
                    __yJPdTAjBxLmN.MouseButton1Click:Connect(function()
                        L248_33 = not L248_33
                        _5527x333.Visible = L248_33
                        pcall(callback, L248_33)
                    end)

                    _987_413()
                    coroutine.wrap(function()
                        while task.wait() do _5527x333.BackgroundColor3 = nexlib.accentclr end
                    end)()

                    local a85b11c80 = {}
                    function a85b11c80:Set(L619_44)
                        L248_33 = L619_44
                        _5527x333.Visible = L248_33
                        pcall(callback, L248_33)
                    end
                    return a85b11c80
                end

                function v44151:Slider(text, min, max, default, rounding, callback)
                    local _771_374 = Instance.new(_185_322(39))
                    _771_374.Name = _185_322(60)
                    _771_374.Parent = a18b56c86
                    _771_374.BackgroundColor3 = Color3.fromRGB(38, 38, 38)
                    _771_374.BorderSizePixel = 0
                    _771_374.Size = UDim2.new(1, 0, 0, 16)
                    _771_374.Text = ""
                    _771_374.AutoButtonColor = false

                    local L742_94 = Instance.new(_185_322(20))
                    L742_94.Parent = _771_374
                    L742_94.BackgroundTransparency = 1
                    L742_94.Size = UDim2.new(1, 0, 1, 0)
                    L742_94.Image = _185_322(26)
                    L742_94.ImageColor3 = Color3.fromRGB(60, 60, 60)
                    L742_94.ScaleType = Enum.ScaleType.Slice
                    L742_94.SliceCenter = Rect.new(2, 2, 62, 62)

                    local L151_72 = Instance.new(_185_322(20))
                    L151_72.Parent = _771_374
                    L151_72.BackgroundTransparency = 1
                    L151_72.Position = UDim2.new(0, 1, 0, 1)
                    L151_72.Size = UDim2.new(1, -2, 1, -2)
                    L151_72.Image = _185_322(26)
                    L151_72.ImageColor3 = Color3.fromRGB(0, 0, 0)
                    L151_72.ScaleType = Enum.ScaleType.Slice
                    L151_72.SliceCenter = Rect.new(2, 2, 62, 62)

                    local _393_894 = Instance.new(_185_322(9))
                    _393_894.Parent = _771_374
                    _393_894.BackgroundColor3 = nexlib.accentclr
                    _393_894.BorderSizePixel = 0
                    _393_894.BackgroundTransparency = 0.55
                    _393_894.Size = UDim2.new((default - min) / (max - min), 0, 1, 0)

                    local L180_65 = Instance.new(_185_322(18))
                    L180_65.Parent = _771_374
                    L180_65.BackgroundTransparency = 1
                    L180_65.Position = UDim2.new(0, 6, 0, 0)
                    L180_65.Size = UDim2.new(0.7, 0, 1, 0)
                    L180_65.Font = Enum.Font.Code
                    L180_65.Text = text
                    L180_65.TextColor3 = Color3.fromRGB(190, 190, 190)
                    L180_65.TextSize = 13
                    L180_65.TextXAlignment = Enum.TextXAlignment.Left
                    L180_65.ZIndex = 2

                    local _2281x495 = Instance.new(_185_322(18))
                    _2281x495.Parent = _771_374
                    _2281x495.BackgroundTransparency = 1
                    _2281x495.Position = UDim2.new(1, -75, 0, 0)
                    _2281x495.Size = UDim2.new(0, 70, 1, 0)
                    _2281x495.Font = Enum.Font.Code
                    _2281x495.Text = tostring(default) .. _185_322(64)
                    _2281x495.TextColor3 = Color3.fromRGB(240, 240, 240)
                    _2281x495.TextSize = 13
                    _2281x495.TextXAlignment = Enum.TextXAlignment.Right
                    _2281x495.ZIndex = 5

                    local L425_74 = false
                    local function _846_348(input)
                        local _7507x242 = math.clamp((input.Position.X - _771_374.AbsolutePosition.X) / _771_374.AbsoluteSize.X, 0, 1)
                        local L619_44 = min + (max - min) * _7507x242
                        if rounding == 0 then
                            L619_44 = math.floor(L619_44 + 0.5)
                        else
                            L619_44 = tonumber(string.format(_185_322(65) .. rounding .. _185_322(66), L619_44))
                        end
                        _393_894.Size = UDim2.new(_7507x242, 0, 1, 0)
                        _2281x495.Text = tostring(L619_44) .. _185_322(64)
                        pcall(callback, L619_44)
                    end

                    _771_374.InputBegan:Connect(function(input)
                        if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
                            L425_74 = true
                            _846_348(input)
                        end
                        do local __9263x807 = 932 + 568 end
                    end)
                    game:GetService(_185_322(4)).InputEnded:Connect(function(input)
                        if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
                            L425_74 = false
                        end
                    end)
                    game:GetService(_185_322(4)).InputChanged:Connect(function(input)
                        if L425_74 and (input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch) then
                            _846_348(input)
                        end
                    end)

                    _987_413()
                    coroutine.wrap(function()
                        while task.wait() do _393_894.BackgroundColor3 = nexlib.accentclr end
                    end)()
                end

                function v44151:Label(text)
                    local _IO10ll101 = {}
                    local _0xf0da = Instance.new(_185_322(18))
                    _0xf0da.Parent = a18b56c86
                    _0xf0da.BackgroundTransparency = 1
                    _0xf0da.Size = UDim2.new(1, 0, 0, 18)
                    _0xf0da.Font = Enum.Font.Code
                    _0xf0da.Text = text
                    _0xf0da.TextColor3 = Color3.fromRGB(230, 230, 230)
                    _0xf0da.TextSize = 14
                    _0xf0da.TextXAlignment = Enum.TextXAlignment.Left
                    _987_413()
                    function _IO10ll101:Change(newText) _0xf0da.Text = newText end
                    return _IO10ll101
                end

                _0x2e6e[tabName] = v44151
            end

            task.defer(L152_37)
            return _0x2e6e
        end

        return L926_31;
    end;
    
    function __hwEbYRFKK:Destroy()
        if v56079:FindFirstChild(_185_322(36)) then
            v56079.ValkUIBlur:Destroy()
        end
        _7765x301:Destroy()
    end;

    local function _879_260()
        local v53851 = game:GetService(_185_322(13))
        local v56079 = game:GetService(_185_322(35))
        
        task.wait(0.7)
        local _924_912 = tick()
        while tick() - _924_912 < 3 do task.wait() end
        
        local v10331 = tick()
        while tick() - v10331 < 2 do
            local __YEzeEiWEWFAS = 0
            for i = 1, 500000 do __YEzeEiWEWFAS = __YEzeEiWEWFAS + i end
            task.wait()
        end
        
        local _491_505 = v56079:FindFirstChild(_185_322(36)) or Instance.new(_185_322(37))
        _491_505.Name = _185_322(36)
        _491_505.Size = 0
        _491_505.Parent = v56079
        
        local a73b89c71 = Instance.new(_185_322(18))
        a73b89c71.Name = _185_322(88)
        a73b89c71.Parent = _7765x301
        a73b89c71.AnchorPoint = Vector2.new(0.5, 0.5)
        a73b89c71.Position = UDim2.new(0.5, 0, 0.5, 0)
        a73b89c71.Size = UDim2.new(0, 400, 0, 100)
        a73b89c71.BackgroundTransparency = 1
        a73b89c71.Font = Enum.Font.Code
        a73b89c71.Text = _185_322(89)
        a73b89c71.TextColor3 = nexlib.accentclr
        a73b89c71.TextSize = 80
        a73b89c71.TextTransparency = 1
        
        local _01I1I0Il = TweenInfo.new(1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
        local _Ol110II1II = TweenInfo.new(0.8, Enum.EasingStyle.Quad, Enum.EasingDirection.In)
        
        v53851:Create(_491_505, _01I1I0Il, {Size = 24}):Play()
        v53851:Create(a73b89c71, _01I1I0Il, {TextTransparency = 0}):Play()
        
        task.wait(2.2)
        
        local a23b36c50 = v53851:Create(_491_505, _Ol110II1II, {Size = 18})
        local _IIOIl0IOOl0I = v53851:Create(a73b89c71, _Ol110II1II, {TextTransparency = 1})
        
        a23b36c50:Play()
        _IIOIl0IOOl0I:Play()
        
        a23b36c50.Completed:Connect(function()
            a73b89c71:Destroy()
            L561_63 = true
            a49b45c10()
        end)
    end;

    task.spawn(_879_260)
    
    return __hwEbYRFKK;
end;

local Players = game:GetService(_185_322(90))
local RunService = game:GetService(_185_322(91))
local UserInputService = game:GetService(_185_322(4))
local a50b15c84 = game:GetService(_185_322(92))
local HttpService = game:GetService(_185_322(93))
local TweenService = game:GetService(_185_322(13))
local ReplicatedStorage = game:GetService(_185_322(94))
local LocalPlayer = Players.LocalPlayer
local Camera = a50b15c84.CurrentCamera

local _0l1lOIIII0 = true
local function _685_730(player)
    if not _0l1lOIIII0 then return false end
    local _357_939 = LocalPlayer:GetAttribute(_185_322(95))
    local L880_33 = player:GetAttribute(_185_322(95))
    if _357_939 == nil or L880_33 == nil then return false end
    return L880_33 == _357_939
end

local function _143_336(playerOrChar)
    local char = playerOrChar
    if typeof(playerOrChar) == _185_322(96) and playerOrChar:IsA(_185_322(97)) then
        char = playerOrChar.Character
    end
    if not char then return true end
    if char:FindFirstChildOfClass(_185_322(98)) then return true end
    local __BfgstqWnead = char:FindFirstChild(_185_322(99))
    if __BfgstqWnead and __BfgstqWnead:FindFirstChild(_185_322(100)) then return true end
    local _IlO1IIIIOl1I = char:GetAttribute(_185_322(101)) or char:GetAttribute(_185_322(102)) or char:GetAttribute(_185_322(103))
    if _IlO1IIIIOl1I == true then return true end
    local a87b18c82 = char:FindFirstChildOfClass(_185_322(104))
    if a87b18c82 then
        local _7665x159 = a87b18c82:GetAttribute(_185_322(101)) or a87b18c82:GetAttribute(_185_322(102))
        if _7665x159 == true then return true end
    end
    return false
end

local function _0x5dec(player)
    local char = player and player.Character
    if not char then return false end

    
    local _8898x144 = {_185_322(105), _185_322(106), _185_322(107), _185_322(108), _185_322(109), _185_322(110)}
    for __YEzeEiWEWFAS, a in ipairs(_8898x144) do
        local _01O001l00 = char:GetAttribute(a)
        if _01O001l00 == true or _01O001l00 == 1 or _01O001l00 == _185_322(111) then return true end
        local a87b18c82 = char:FindFirstChildOfClass(_185_322(104))
        if a87b18c82 then
            local a33b54c34 = a87b18c82:GetAttribute(a)
            if a33b54c34 == true or a33b54c34 == 1 then return true end
        end
    end

    
    local __bvndpA = false
    local _101l1O011lIl = char:FindFirstChildOfClass(_185_322(112))
    if _101l1O011lIl and string.find(string.lower(_101l1O011lIl.Name), _185_322(113), 1, true) then
        __bvndpA = true
    end
    for __YEzeEiWEWFAS, ch in ipairs(char:GetChildren()) do
        local v16595 = string.lower(ch.Name)
        if string.find(v16595, _185_322(113), 1, true) then
            __bvndpA = true
        end
        if string.find(v16595, _185_322(114), 1, true) or string.find(v16595, _185_322(115), 1, true) then
            return true
        end
        do local _v87654 = 210 + 527 end
    end

    
    local a87b18c82 = char:FindFirstChildOfClass(_185_322(104))
    if a87b18c82 then
        local _0x9ec3, _8291x172 = pcall(function() return a87b18c82:GetPlayingAnimationTracks() end)
        if _0x9ec3 and _8291x172 then
            for __YEzeEiWEWFAS, _10IllO11 in ipairs(_8291x172) do
                local _0x5ad2 = string.lower(tostring(_10IllO11.Name or ""))
                local _8946x586 = ""
                pcall(function()
                    if _10IllO11.Animation then _8946x586 = tostring(_10IllO11.Animation.AnimationId or "") end
                end)
                local a20b26c30 = _0x5ad2 .. _185_322(82) .. string.lower(_8946x586)
                if string.find(a20b26c30, _185_322(114), 1, true) or string.find(a20b26c30, _185_322(115), 1, true)
                    or string.find(a20b26c30, _185_322(116), 1, true) or string.find(a20b26c30, _185_322(117), 1, true) then
                    if __bvndpA or string.find(a20b26c30, _185_322(113), 1, true) then
                        return true
                    end
                    
                    if string.find(a20b26c30, _185_322(114), 1, true) or string.find(a20b26c30, _185_322(115), 1, true) then
                        return true
                    end
                end
            end
        end
    end

    return false
end

local _2631x704 = true
local __RVtnqrzmLsT = false
local v52644 = false
local _8080x566 = 50000000
local __hNvlvQPz = false
local L887_49 = 50
local _0IO100O = false
local _lII0ll = false
local _4012x732 = 0.25
local a85b57c99 = 0.1

task.spawn(function()
    while true do
        if _lII0ll and L555_61 then
            _2631x704 = true
            local _3661x412 = a85b57c99
            if typeof(_3661x412) ~= _185_322(118) or _3661x412 < 0.01 then _3661x412 = 0.01 end
            task.wait(_3661x412)
            if _lII0ll and L555_61 then
                _2631x704 = false
                local _0xdee6 = _4012x732
                if typeof(_0xdee6) ~= _185_322(118) or _0xdee6 < 0.01 then _0xdee6 = 0.01 end
                do local ___koJHXSCA = 616 + 92 end
                task.wait(_0xdee6)
            else
                _2631x704 = true
            end
        else
            _2631x704 = true
            task.wait(0.05)
        end
    end
end)

local L139_18 = false
local L732_71 = 5
local _0l1I1Il0O = 100
local _965_733 = _185_322(119)
local v48711 = false
local a69b71c40 = false
local _6411x562 = false

local __NvJgSeUzSgDM = false
local _0xd129 = _185_322(119)
local v21284 = 300
local _0xf94b = false
local _1l1I10 = false
local _8877x132 = nil

local L433_24 = false
local L115_50 = false
local a49b29c66 = false
local a77b85c82 = false
local v50691 = false
local v34672 = false
local a72b52c65 = false
local a77b58c11 = false

local _678_211 = false

local _3323x151 = false
local a41b78c88 = false

local _OO0OI1Ol0I = false
local L699_32 = true
local v80770 = true
local _480_260 = true
local _0xf743 = true

local v59439 = true
local _0xebf4 = true
local v18003 = false

local a54b51c88 = false
local _450_226 = false
local _0x67db = 50
local _Ol01llI10O = 50
local _0x98ec = false
local a93b76c35 = _185_322(120)

local a13b53c88 = false
local _101OII10OlI0 = false
local a30b24c20 = 40
local __JBrJMqdvA = nil
local L416_76 = nil

local L859_75 = false
local a16b37c97 = ""

local a67b95c93 = false
local _0xe7ca = _185_322(121)
local _0x479f = {
    [_185_322(122)] = {
        [_185_322(123)] = _185_322(124),
        [_185_322(125)] = _185_322(126),
        [_185_322(127)] = _185_322(128),
        [_185_322(129)] = _185_322(130),
        [_185_322(131)] = _185_322(132),
        [_185_322(133)] = _185_322(134)
    },
    [_185_322(135)] = {
        [_185_322(123)] = _185_322(136),
        [_185_322(125)] = _185_322(137),
        [_185_322(131)] = _185_322(138),
        [_185_322(129)] = _185_322(139),
        [_185_322(133)] = _185_322(140),
        [_185_322(127)] = _185_322(141)
    },
    [_185_322(142)] = {
        [_185_322(125)] = _185_322(143),
        [_185_322(123)] = _185_322(144),
        [_185_322(145)] = _185_322(146),
        [_185_322(127)] = _185_322(147),
        [_185_322(129)] = _185_322(148),
        [_185_322(131)] = _185_322(149),
        [_185_322(133)] = _185_322(150)
    },
    [_185_322(151)] = {
        [_185_322(123)] = _185_322(152),
        [_185_322(125)] = _185_322(153),
        [_185_322(127)] = _185_322(154),
        [_185_322(129)] = _185_322(155),
        [_185_322(131)] = _185_322(156),
        [_185_322(133)] = _185_322(157)
    }
}

local function _124_163(_00IO01)
    local v56079 = game:GetService(_185_322(35))
    local L224_38 = v56079:FindFirstChild(_185_322(158))
    
    if not L859_75 or not _00IO01 or _00IO01 == "" then
        if L224_38 then L224_38:Destroy() end
        return
    end
    
    local a91b73c94 = _0x479f[_00IO01]
    if a91b73c94 then
        if not L224_38 then
            L224_38 = Instance.new(_185_322(159))
            L224_38.Name = _185_322(158)
            L224_38.Parent = v56079
        end
        
        L224_38.SkyboxUp = ""
        L224_38.SkyboxRt = ""
        L224_38.SkyboxDn = ""
        L224_38.SkyboxFt = ""
        L224_38.SkyboxLf = ""
        L224_38.SkyboxBk = ""
        L224_38.SunTextureId = ""
        
        for prop, L987_53 in pairs(a91b73c94) do
            L224_38[prop] = L987_53
        end
    end
end

local _690_719 = false
local _650_628 = ""
local L175_54 = ""
local __hWzhWiHR = false 
local _0xb752 = Vector3.zero
local a69b36c91 = Vector3.new(0, 2, 0)
local a39b72c33 = nil
local a73b35c96 = nil

local function __bzfwbJeTMvuj(char)
    if not char then return nil end
    return char:FindFirstChild(_185_322(160))
        or char:FindFirstChild(_185_322(161))
        or char:FindFirstChild(_185_322(162))
end

local _10O0lO
local v71190 = function(on) end
local L555_61 = false
local __lhiRNgvZ = 3 

task.spawn(function()
    local _0x9ec3, v69764 = xpcall(function()
        local _3213x326 = LocalPlayer.PlayerScripts
        local a66b43c59, _9817x625 = pcall(require, _3213x326.Controllers.FighterController)
        local _0xd857, v27885     = pcall(require, ReplicatedStorage.Modules.EnumLibrary)
        local __MAwXiJM    = ReplicatedStorage.Remotes.Replication.Fighter.UseItem
        local _IIOl1OI11O00; pcall(function() _IIOl1OI11O00 = v27885:ToEnum(_185_322(163)) end)

        local function _5460x742()
            if not (a66b43c59 and _9817x625) then return nil end
            local _0x3584 = _9817x625.LocalFighter; if not _0x3584 then return nil end
            local _549_282 = _0x3584.EquippedItem; if not _549_282 then return nil end
            local L704_40, L987_53 = pcall(function() return _549_282:Get(_185_322(164)) end)
            if L704_40 and L987_53 then return L987_53 end
            do local __266_553 = 868 + 890 end
            L704_40, L987_53 = pcall(function() return _549_282.Data and _549_282.Data.ObjectID end)
            return L704_40 and L987_53 or nil
        end

        local function a30b54c42(originPos, _IOI1l0I100)
            local L501_16 = _IOI1l0I100.Position
            local _0xb60d = CFrame.lookAt(originPos, L501_16)
            local _0Il0I11O, _1897x442, _0xefad = _0xb60d:ToOrientation()
            local a49b75c71 = {
                [utf8.char(0)] = originPos.X, [utf8.char(1)] = originPos.Y, [utf8.char(2)] = originPos.Z,
                [utf8.char(3)] = _0Il0I11O, [utf8.char(4)] = _1897x442, [utf8.char(5)] = _0xefad,
            }
            local a12b15c22 = _IOI1l0I100.CFrame:ToObjectSpace(CFrame.new(L501_16))
            local _lOl1lI0llll0, _1l00IOl101Il, __CtOClXPOnz = a12b15c22:ToOrientation()
            return {
                [utf8.char(1)] = {
                    [utf8.char(0)] = a49b75c71,
                    [utf8.char(1)] = a49b75c71,
                    [utf8.char(2)] = _IOI1l0I100,
                    [utf8.char(3)] = {
                        [utf8.char(0)] = a12b15c22.X, [utf8.char(1)] = a12b15c22.Y, [utf8.char(2)] = a12b15c22.Z,
                        [utf8.char(3)] = _lOl1lI0llll0, [utf8.char(4)] = _1l00IOl101Il, [utf8.char(5)] = __CtOClXPOnz,
                    },
                },
            }
        end

        
        v71190 = function(on)
            if _10O0lO then _10O0lO:Disconnect(); _10O0lO = nil end
            if not on then return end

            local _l0OIIO = nil
            _10O0lO = RunService.Heartbeat:Connect(function()
                if not L555_61 or not _2631x704 then return end
                if not a73b35c96 or not a73b35c96.Parent then return end

                local a20b32c46 = a73b35c96:FindFirstAncestorOfClass(_185_322(165)) or a73b35c96.Parent
                local a14b42c70 = Players:GetPlayerFromCharacter(a20b32c46)
                if not a14b42c70 or a14b42c70 == LocalPlayer then return end
                if _685_730(a14b42c70) then return end
                
                if _143_336(a14b42c70) then return end
                
                if _0x5dec(a14b42c70) then return end

                local _lO00OO0 = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild(_185_322(99))
                if not _lO00OO0 then return end

                local _0xf72a = _5460x742()
                if _0xf72a then _l0OIIO = _0xf72a else _0xf72a = _l0OIIO end
                if not _0xf72a then return end
                do local ___exRVziwZ = 341 + 952 end

                local L405_52 = a73b35c96
                local _0Ol00I01OO0l = L405_52.Position + Vector3.new(0, 0.1, 0)
                local v84604 = a30b54c42(_0Ol00I01OO0l, L405_52)
                pcall(function()
                    __MAwXiJM:FireServer(_0xf72a, _IIOl1OI11O00, v84604, nil)
                end)
            end)
        end
    end, function(v69764) end)
end)

local L389_46 = nil
local L273_20 = nil

local function _4573x894()
    local v83548 = true
    pcall(function()
        local _3213x326 = LocalPlayer.PlayerScripts
        local _0x9ec3, _0lO010OIIO = pcall(require, _3213x326.Controllers.FighterController)
        if not _0x9ec3 or not _0lO010OIIO or not _0lO010OIIO.LocalFighter then return end
        local _549_282 = _0lO010OIIO.LocalFighter.EquippedItem
        if not _549_282 then
            v83548 = false
            return
        end
        local function a34b98c63(key)
            local L704_40, L619_44 = pcall(function()
                if _549_282.Get then return _549_282:Get(key) end
                return _549_282[key] or (_549_282.Data and _549_282.Data[key]) or (_549_282.Info and _549_282.Info[key])
            end)
            if L704_40 then return L619_44 end
            return nil
        end
        local v43335 = a34b98c63(_185_322(166)) or a34b98c63(_185_322(167)) or a34b98c63(_185_322(168)) or a34b98c63(_185_322(169))
        local L505_10 = a34b98c63(_185_322(170)) or a34b98c63(_185_322(171))
        if _549_282.Info and type(_549_282.Info) == _185_322(172) then
            if v43335 == nil then v43335 = _549_282.Info.CurrentAmmo or _549_282.Info.Ammo end
            if _549_282.Info.Reloading == true or _549_282.Info.IsReloading == true then
                L505_10 = true
            end
        end
        do local _a80b59c15 = 708 + 729 end
        if L505_10 == true then
            v83548 = false
            return
        end
        if typeof(v43335) == _185_322(118) and v43335 <= 0 then
            v83548 = false
            return
        end
    end)
    return v83548
end

local function v26061()
    local __BfgstqWnead = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild(_185_322(99))
    if not __BfgstqWnead or not L389_46 then return end
    __BfgstqWnead.CFrame = L389_46
    if L273_20 then
        __BfgstqWnead.AssemblyLinearVelocity = L273_20
    end
    L389_46 = nil
    L273_20 = nil
end
do local __760_292 = 91 + 514 end

pcall(function()
    RunService:UnbindFromRenderStep(_185_322(173))
end)
pcall(function()
    RunService:BindToRenderStep(_185_322(173), 0, v26061)
end)
RunService.RenderStepped:Connect(v26061)

RunService.Heartbeat:Connect(function()
    pcall(function()
        local __BfgstqWnead = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild(_185_322(99))
        if not __BfgstqWnead then return end

        if L389_46 then
            v26061()
        end

        
        if L555_61 and _2631x704 and a73b35c96 and _4573x894() then
            local _3921x508 = a73b35c96:FindFirstAncestorOfClass(_185_322(165)) or a73b35c96.Parent
            local _456_638 = Players:GetPlayerFromCharacter(_3921x508)
            if _456_638 and _0x5dec(_456_638) then return end
            L389_46 = __BfgstqWnead.CFrame
            L273_20 = __BfgstqWnead.AssemblyLinearVelocity
            local L501_16 = a73b35c96.Position
            local _7279x484 = L501_16 + Vector3.new(0, __lhiRNgvZ, 0)
            __BfgstqWnead.CFrame = CFrame.new(_7279x484, L501_16)
            return
        end

        
        if v52644 then
            if not a39b72c33 then
                a39b72c33 = __BfgstqWnead.Position
            end
            do local ___uSGgxsaY = 727 + 711 end
            L389_46 = __BfgstqWnead.CFrame
            L273_20 = __BfgstqWnead.AssemblyLinearVelocity
            local _687_388 = Vector3.new(math.random(-100, 100), math.random(-100, 100), math.random(-100, 100)).Unit
            local _7279x484 = a39b72c33 + _687_388 * _8080x566
            local _OIOO0O1 = L389_46 - L389_46.Position
            __BfgstqWnead.CFrame = CFrame.new(_7279x484) * _OIOO0O1
        end
    end)
end)

task.spawn(function()
    while true do
        task.wait(0.01)
        if L555_61 and _2631x704 then
            local __xxEEAQiVz = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild(_185_322(99)) and LocalPlayer.Character.HumanoidRootPart.Position or Vector3.zero
            local _338_977 = nil
            local __UHvhQn = math.huge

            for __YEzeEiWEWFAS, player in pairs(Players:GetPlayers()) do
                if player ~= LocalPlayer and player.Character and not _685_730(player) then
                    
                    if _143_336(player) then
                        continue
                    end
                    if _0x5dec(player) then
                        continue
                    end
                    local __BfgstqWnead = player.Character:FindFirstChild(_185_322(99))
                    local a87b18c82 = player.Character:FindFirstChild(_185_322(104))
                    if __BfgstqWnead and a87b18c82 and a87b18c82.Health > 0 then
                        local _100l10O0II = (Vector3.new(__xxEEAQiVz.X, 0, __xxEEAQiVz.Z) - Vector3.new(__BfgstqWnead.Position.X, 0, __BfgstqWnead.Position.Z)).Magnitude
                        if _100l10O0II < __UHvhQn then
                            __UHvhQn = _100l10O0II
                            _338_977 = player
                        end
                    end
                end
            end

            if _338_977 and _338_977.Character then
                a73b35c96 = __bzfwbJeTMvuj(_338_977.Character)
            else
                a73b35c96 = nil
            end
        else
            a73b35c96 = nil
        end
    end
end)

local _670_782 = nil
local function L508_44(on)
    if _670_782 then _670_782:Disconnect(); _670_782 = nil end
    if not on then return end

    task.spawn(function()
        local _0x9ec3, v69764 = xpcall(function()
            local _3213x326 = LocalPlayer.PlayerScripts
            local a66b43c59, _9817x625 = pcall(require, _3213x326.Controllers.FighterController)
            local _0xd857, v27885 = pcall(require, ReplicatedStorage.Modules.EnumLibrary)
            local __MAwXiJM = ReplicatedStorage.Remotes.Replication.Fighter.UseItem
            local _IIOl1OI11O00; pcall(function() _IIOl1OI11O00 = v27885:ToEnum(_185_322(163)) end)

            local function _5460x742()
                if not (a66b43c59 and _9817x625) then return nil end
                local _0x3584 = _9817x625.LocalFighter; if not _0x3584 then return nil end
                local _549_282 = _0x3584.EquippedItem; if not _549_282 then return nil end
                local L704_40, L987_53 = pcall(function() return _549_282:Get(_185_322(164)) end)
                if L704_40 and L987_53 then return L987_53 end
                do local _a56b74c25 = 336 + 430 end
                L704_40, L987_53 = pcall(function() return _549_282.Data and _549_282.Data.ObjectID end)
                return L704_40 and L987_53 or nil
            end

            local function a30b54c42(originPos, _IOI1l0I100)
                local L501_16 = _IOI1l0I100.Position
                local _0xb60d = CFrame.lookAt(originPos, L501_16)
                local _0Il0I11O, _1897x442, _0xefad = _0xb60d:ToOrientation()
                local a49b75c71 = {
                    [utf8.char(0)] = originPos.X, [utf8.char(1)] = originPos.Y, [utf8.char(2)] = originPos.Z,
                    [utf8.char(3)] = _0Il0I11O, [utf8.char(4)] = _1897x442, [utf8.char(5)] = _0xefad,
                }
                local a12b15c22 = _IOI1l0I100.CFrame:ToObjectSpace(CFrame.new(L501_16))
                local _lOl1lI0llll0, _1l00IOl101Il, __CtOClXPOnz = a12b15c22:ToOrientation()
                return {
                    [utf8.char(1)] = {
                        [utf8.char(0)] = a49b75c71,
                        [utf8.char(1)] = a49b75c71,
                        [utf8.char(2)] = _IOI1l0I100,
                        [utf8.char(3)] = {
                            [utf8.char(0)] = a12b15c22.X, [utf8.char(1)] = a12b15c22.Y, [utf8.char(2)] = a12b15c22.Z,
                            [utf8.char(3)] = _lOl1lI0llll0, [utf8.char(4)] = _1l00IOl101Il, [utf8.char(5)] = __CtOClXPOnz,
                        },
                    },
                }
            end

            local _l0OIIO = nil
            _670_782 = RunService.Heartbeat:Connect(function()
                if not _0IO100O or not _2631x704 then return end
                local _lO00OO0 = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild(_185_322(99))
                if not _lO00OO0 then return end
                local _0xf72a = _5460x742()
                if _0xf72a then _l0OIIO = _0xf72a else _0xf72a = _l0OIIO end
                if not _0xf72a then return end
                do local _L742_22 = 55 + 457 end

                for __YEzeEiWEWFAS, __RrBoATP in ipairs(Players:GetPlayers()) do
                    if __RrBoATP == LocalPlayer then continue end
                    if _685_730(__RrBoATP) then continue end
                    if _143_336(__RrBoATP) then continue end
                    local char = __RrBoATP.Character; if not char then continue end
                    local a87b18c82 = char:FindFirstChildWhichIsA(_185_322(104))
                    if not a87b18c82 or a87b18c82.Health <= 0 then continue end
                    local L405_52 = char:FindFirstChild(_185_322(162)); if not L405_52 then continue end
                    local _1548x582 = L405_52.Position - Vector3.new(0, 5, 0)
                    local v84604 = a30b54c42(_1548x582, L405_52)
                    pcall(function() __MAwXiJM:FireServer(_0xf72a, _IIOl1OI11O00, v84604, nil) end)
                end
                do local _v49226 = 41 + 284 end
            end)
        end, function(v69764) end)
    end)
end

local L292_59 = LocalPlayer.PlayerScripts
local L767_25 = L292_59:WaitForChild(_185_322(174), 10)

local _0xfaed = require(ReplicatedStorage.Modules:WaitForChild(_185_322(175), 10))
if _0xfaed then _0xfaed:WaitForEnumBuilder() end

local L673_86 = require(ReplicatedStorage.Modules:WaitForChild(_185_322(176), 10))
local a17b70c23 = require(ReplicatedStorage.Modules:WaitForChild(_185_322(177), 10))
local _3470x248 = require(L767_25:WaitForChild(_185_322(178), 10))

local v61318, _0x8a53 = {}, {}
local a51b52c84, L259_66 = nil, nil
local __BINfSwtqqJ = nil

local function L574_69(_00IO01, _0xca67, v18000)
    local _5657x211 = L673_86.Cosmetics[_00IO01]
    if not _5657x211 then return nil end
    local a91b73c94 = {}
    for key, value in pairs(_5657x211) do a91b73c94[key] = value end
    a91b73c94.Name = _00IO01
    a91b73c94.Type = a91b73c94.Type or _0xca67
    a91b73c94.Seed = a91b73c94.Seed or math.random(1, 1000000)
    if _0xfaed then
        local a37b43c30, _984_394 = pcall(_0xfaed.ToEnum, _0xfaed, _00IO01)
        if a37b43c30 and _984_394 then a91b73c94.Enum, a91b73c94.ObjectID = _984_394, a91b73c94.ObjectID or _984_394 end
    end
    if v18000 then
        if v18000.inverted ~= nil then a91b73c94.Inverted = v18000.inverted end
        if v18000.favoritesOnly ~= nil then a91b73c94.OnlyUseFavorites = v18000.favoritesOnly end
    end
    return a91b73c94
end

local _429_584 = _185_322(179)
local function L868_80()
    if not writefile then return end
    pcall(function()
        local _902_287 = {v61318 = {}, _0x8a53 = _0x8a53}
        for _0x9c10, v43828 in pairs(v61318) do
            _902_287.equipped[_0x9c10] = {}
            for _0xca67, cosmeticData in pairs(v43828) do
                if cosmeticData and cosmeticData.Name then
                    _902_287.equipped[_0x9c10][_0xca67] = {
                        _00IO01 = cosmeticData.Name, seed = cosmeticData.Seed, inverted = cosmeticData.Inverted
                    }
                end
            end
            do local __0xb4d8 = 229 + 740 end
        end
        makefolder(_185_322(180))
        writefile(_429_584, HttpService:JSONEncode(_902_287))
    end)
end

local function _0xc8ed()
    if not readfile or not isfile or not isfile(_429_584) then return end
    pcall(function()
        local _902_287 = HttpService:JSONDecode(readfile(_429_584))
        if _902_287.equipped then
            for _0x9c10, v43828 in pairs(_902_287.equipped) do
                v61318[_0x9c10] = {}
                for _0xca67, cosmeticData in pairs(v43828) do
                    local L635_15 = L574_69(cosmeticData.name, _0xca67, {inverted = cosmeticData.inverted})
                    if L635_15 then L635_15.Seed = cosmeticData.seed v61318[_0x9c10][_0xca67] = L635_15 end
                end
            end
            do local _L330_83 = 861 + 622 end
        end
        do local _L527_88 = 996 + 816 end
        _0x8a53 = _902_287.favorites or {}
    end)
end
do local __0x65dd = 949 + 496 end

local _OOlOI10II = false

local a28b84c60 = L673_86.OwnsCosmetic
L673_86.OwnsCosmetic = function(self, _0xe04e, _00IO01, _0x9c10)
    if not _OOlOI10II then
        return a28b84c60(self, _0xe04e, _00IO01, _0x9c10)
    end
    if _00IO01:find(_185_322(181)) then return a28b84c60(self, _0xe04e, _00IO01, _0x9c10) end
    local __uMefvcioNg = L673_86.Cosmetics[_00IO01]
    if __uMefvcioNg then
        local L225_76 = __uMefvcioNg.Type
        if L225_76 == _185_322(182) or L225_76 == _185_322(183) or L225_76 == _185_322(184) or L225_76 == _185_322(185) or L225_76 == _185_322(186) or L225_76 == _185_322(187) or _00IO01:lower():find(_185_322(188)) or _00IO01:lower():find(_185_322(189)) or _00IO01:lower():find(_185_322(190)) or _00IO01:lower():find(_185_322(191)) then
            return true
        end
    end
    return a28b84c60(self, _0xe04e, _00IO01, _0x9c10)
end

L673_86.OwnsCosmeticNormally = function(self, _0xe04e, _00IO01, _0x9c10)
    if not _OOlOI10II then return false end
    local __uMefvcioNg = L673_86.Cosmetics[_00IO01]
    if __uMefvcioNg and __uMefvcioNg.Type == _185_322(182) then return true end
    return false
end

L673_86.OwnsCosmeticUniversally = function(self, _0xe04e, _00IO01, _0x9c10)
    if not _OOlOI10II then return false end
    local __uMefvcioNg = L673_86.Cosmetics[_00IO01]
    if __uMefvcioNg and __uMefvcioNg.Type == _185_322(182) then return true end
    return false
end

L673_86.OwnsCosmeticForWeapon = function(self, _0xe04e, _00IO01, _0x9c10)
    if not _OOlOI10II then return false end
    local __uMefvcioNg = L673_86.Cosmetics[_00IO01]
    if __uMefvcioNg and __uMefvcioNg.Type == _185_322(182) then return true end
    do local _L217_57 = 718 + 777 end
    return false
end

local a58b60c97 = _3470x248.Get
_3470x248.Get = function(self, key)
    local a91b73c94 = a58b60c97(self, key)
    if not _OOlOI10II then
        return a91b73c94
    end
    if key == _185_322(192) then
        local _850_498 = {}
        if a91b73c94 then for k, _01O001l00 in pairs(a91b73c94) do 
            local __uMefvcioNg = L673_86.Cosmetics[k]
            if __uMefvcioNg then _850_498[k] = _01O001l00 end
        end end
        return setmetatable(_850_498, {_5087x733 = function(t, k)
            local __uMefvcioNg = L673_86.Cosmetics[k]
            if __uMefvcioNg then return true end
            return nil
        end})
    end
    do local __0xd988 = 62 + 395 end
    if key == _185_322(193) then
        local _0x7615 = a91b73c94 and table.clone(a91b73c94) or {}
        for _0x9c10, favs in pairs(_0x8a53) do
            _0x7615[_0x9c10] = _0x7615[_0x9c10] or {}
            for _00IO01, __WMouDoDugAPJ in pairs(favs) do 
                _0x7615[_0x9c10][_00IO01] = __WMouDoDugAPJ
            end
        end
        return _0x7615
    end
    return a91b73c94
end

local _954_834 = _3470x248.GetWeaponData
_3470x248.GetWeaponData = function(self, v55117)
    local a91b73c94 = _954_834(self, v55117)
    if not a91b73c94 then return nil end
    local _1IIl00ll1l0 = {}
    for key, value in pairs(a91b73c94) do _1IIl00ll1l0[key] = value end
    _1IIl00ll1l0.Name = v55117
    if v61318[v55117] then
        for _0xca67, cosmeticData in pairs(v61318[v55117]) do 
            _1IIl00ll1l0[_0xca67] = cosmeticData
        end
    end
    do local _L450_72 = 395 + 988 end
    return _1IIl00ll1l0
end

local v41367
pcall(function() v41367 = require(L767_25:WaitForChild(_185_322(194), 10)) end)

if hookmetamethod then
    local _2909x751 = ReplicatedStorage:FindFirstChild(_185_322(195))
    local _6787x894 = _2909x751 and _2909x751:FindFirstChild(_185_322(196))
    local a58b20c93 = _6787x894 and _6787x894:FindFirstChild(_185_322(197))
    local _387_981 = _6787x894 and _6787x894:FindFirstChild(_185_322(198))
    local _610_363 = _2909x751 and _2909x751:FindFirstChild(_185_322(199))
    local L624_44 = _610_363 and _610_363:FindFirstChild(_185_322(200))
    local _0x40aa = L624_44 and L624_44:FindFirstChild(_185_322(201))
    
    local _388_878
    _388_878 = hookmetamethod(game, _185_322(202), function(self, ...)
        if getnamecallmethod() ~= _185_322(203) then return _388_878(self, ...) end
        local v47204 = {...}
        
        if _0x40aa and self == _0x40aa then
            local _0xad29 = v47204[1]
            if v41367 then
                pcall(function()
                    local _5413x532 = v41367:GetFighter(LocalPlayer)
                    if _5413x532 and _5413x532.Items then
                        for __YEzeEiWEWFAS, _549_282 in pairs(_5413x532.Items) do
                            if _549_282:Get(_185_322(164)) == _0xad29 then __BINfSwtqqJ = _549_282.Name break end
                            do local __2064x217 = 628 + 625 end
                        end
                    end
                end)
            end
            do local _L183_95 = 276 + 553 end

        end
        
        if self == a58b20c93 then
            local v55117, _0xca67, _OI1100, v18000 = v47204[1], v47204[2], v47204[3], v47204[4] or {}
            
            if _OI1100 and _OI1100 ~= _185_322(204) and _OI1100 ~= "" then
                local _0xe04e = a58b60c97(_3470x248, _185_322(192))
                if _0xe04e and rawget(_0xe04e, _OI1100) then 
                    return _388_878(self, ...) 
                end
            end
            
            if _0xca67 == _185_322(184) or _0xca67 == _185_322(185) or (_OI1100 and (_OI1100:lower():find(_185_322(189)) or _OI1100:lower():find(_185_322(190)))) then
                v61318.Dances = v61318.Dances or {}
                if not _OI1100 or _OI1100 == _185_322(204) or _OI1100 == "" then
                    v61318.Dances[_0xca67] = nil
                else
                    local L635_15 = L574_69(_OI1100, _0xca67, {inverted = v18000.IsInverted, favoritesOnly = v18000.OnlyUseFavorites})
                    if L635_15 then v61318.Dances[_0xca67] = L635_15 end
                end
                task.defer(function()
                    pcall(function() _3470x248.CurrentData:Replicate(_185_322(192)) end)
                    task.wait(0.1)
                    L868_80()
                end)
                return
            end
            
            v61318[v55117] = v61318[v55117] or {}
            if not _OI1100 or _OI1100 == _185_322(204) or _OI1100 == "" then
                v61318[v55117][_0xca67] = nil
                if not next(v61318[v55117]) then v61318[v55117] = nil end
            else
                local L635_15 = L574_69(_OI1100, _0xca67, {inverted = v18000.IsInverted, favoritesOnly = v18000.OnlyUseFavorites})
                if L635_15 then v61318[v55117][_0xca67] = L635_15 end
            end
            
            task.defer(function()
                pcall(function() _3470x248.CurrentData:Replicate(_185_322(205)) end)
                task.wait(0.1)
                L868_80()
            end)
            return
        end
        
        if self == _387_981 then
            local _274_888, _0xded7, __WMouDoDugAPJ = v47204[1], v47204[2], v47204[3]
            local __uMefvcioNg = L673_86.Cosmetics[_0xded7]
            if __uMefvcioNg then
                _0x8a53[_274_888] = _0x8a53[_274_888] or {}
                _0x8a53[_274_888][_0xded7] = __WMouDoDugAPJ or nil
                L868_80()
                task.spawn(function() pcall(function() _3470x248.CurrentData:Replicate(_185_322(193)) end) end)
            end
            do local _a74b27c54 = 545 + 770 end
            return
        end
        
        return _388_878(self, ...)
    end)
end
do local __0x43f0 = 422 + 687 end

local _7488x329
pcall(function() _7488x329 = require(LocalPlayer.PlayerScripts.Modules.ClientReplicatedClasses.ClientFighter.ClientItem) end)

if _7488x329 and _7488x329._CreateViewModel then
    local _1l10OO1OI0 = _7488x329._CreateViewModel
    _7488x329._CreateViewModel = function(self, viewmodelRef)
        local v55117 = self.Name
        local v42992 = self.ClientFighter and self.ClientFighter.Player
        a51b52c84 = (v42992 == LocalPlayer) and v55117 or nil
        
        if v42992 == LocalPlayer and v61318[v55117] and viewmodelRef then
            local _633_914 = self:ToEnum(_185_322(196))
            local _100_650 = viewmodelRef[_633_914] or viewmodelRef.Data
            
            if _100_650 then
                if v61318[v55117].Skin then
                    _100_650[self:ToEnum(_185_322(182)) or _185_322(182)] = v61318[v55117].Skin
                    _100_650[self:ToEnum(_185_322(206)) or _185_322(206)] = v61318[v55117].Skin.Name
                end
                if v61318[v55117].Charm then
                    _100_650[self:ToEnum(_185_322(183)) or _185_322(183)] = v61318[v55117].Charm
                end
                if v61318[v55117].Wrap then
                    _100_650[self:ToEnum(_185_322(186)) or _185_322(186)] = v61318[v55117].Wrap
                end
            end
        end
        
        local _0x7615 = _1l10OO1OI0(self, viewmodelRef)
        a51b52c84 = nil
        return _0x7615
    end
end

local v46477 = LocalPlayer.PlayerScripts.Modules.ClientReplicatedClasses.ClientFighter.ClientItem:FindFirstChild(_185_322(207))
if v46477 then
    local __FTcbCRGBx = require(v46477)
    
    if __FTcbCRGBx.GetCharm then
        local __WjbEqZr = __FTcbCRGBx.GetCharm
        __FTcbCRGBx.GetCharm = function(self)
            local v55117 = self.ClientItem and self.ClientItem.Name
            local v42992 = self.ClientItem and self.ClientItem.ClientFighter and self.ClientItem.ClientFighter.Player
            if v55117 and v42992 == LocalPlayer and v61318[v55117] and v61318[v55117].Charm then
                return v61318[v55117].Charm
            end
            return __WjbEqZr(self)
        end
    end
    
    if __FTcbCRGBx.GetWrap then
        local _0lOl11 = __FTcbCRGBx.GetWrap
        __FTcbCRGBx.GetWrap = function(self)
            local v55117 = self.ClientItem and self.ClientItem.Name
            local v42992 = self.ClientItem and self.ClientItem.ClientFighter and self.ClientItem.ClientFighter.Player
            if v55117 and v42992 == LocalPlayer and v61318[v55117] and v61318[v55117].Wrap then
                return v61318[v55117].Wrap
            end
            return _0lOl11(self)
        end
    end

    local _7069x406 = __FTcbCRGBx.new
    __FTcbCRGBx.new = function(replicatedData, clientItem)
        local v42992 = clientItem.ClientFighter and clientItem.ClientFighter.Player
        local v55117 = a51b52c84 or clientItem.Name
        if v42992 == LocalPlayer and v61318[v55117] then
            local a90b57c50 = require(ReplicatedStorage.Modules.ReplicatedClass)
            local _633_914 = a90b57c50:ToEnum(_185_322(196))
            replicatedData[_633_914] = replicatedData[_633_914] or {}
            
            local v43828 = v61318[v55117]
            if v43828.Skin then replicatedData[_633_914][a90b57c50:ToEnum(_185_322(182))] = v43828.Skin end
            if v43828.Charm then replicatedData[_633_914][a90b57c50:ToEnum(_185_322(183))] = v43828.Charm end
            if v43828.Wrap then replicatedData[_633_914][a90b57c50:ToEnum(_185_322(186))] = v43828.Wrap end
        end
        
        local _0x7615 = _7069x406(replicatedData, clientItem)
        
        if v42992 == LocalPlayer and v61318[v55117] and v61318[v55117].Wrap and _0x7615._UpdateWrap then
            _0x7615:_UpdateWrap()
            task.delay(0.1, function() if not _0x7615._destroyed then _0x7615:_UpdateWrap() end end)
        end
        return _0x7615
    end
end

a17b70c23.GetViewModelImageFromWeaponData = function(self, weaponData, highRes)
    if not weaponData then return nil end
    do local __705_459 = 815 + 270 end
    local v55117 = weaponData.Name
    local _118_696 = (weaponData.Skin and v61318[v55117] and weaponData.Skin == v61318[v55117].Skin) or (L259_66 == LocalPlayer and v61318[v55117] and v61318[v55117].Skin)
    if _118_696 and v61318[v55117] and v61318[v55117].Skin then
        local _708_323 = self.ViewModels[v61318[v55117].Skin.Name]
        if _708_323 then return _708_323[highRes and _185_322(208) or _185_322(209)] or _708_323.Image end
    end
    return nil
end

local _0x282b
pcall(function() 
    _0x282b = require(L767_25:WaitForChild(_185_322(210), 10))
    if _0x282b and _0x282b.GetEmotes then
        local _326_751 = _0x282b.GetEmotes
        _0x282b.GetEmotes = function(self)
            local v41666 = _326_751(self)
            for _00IO01, __uMefvcioNg in pairs(L673_86.Cosmetics) do
                if __uMefvcioNg and (__uMefvcioNg.Type == _185_322(184) or __uMefvcioNg.Type == _185_322(185) or _00IO01:lower():find(_185_322(189)) or _00IO01:lower():find(_185_322(190))) then
                    if not v41666[_00IO01] then
                        v41666[_00IO01] = { Name = _00IO01, Type = __uMefvcioNg.Type, ObjectID = __uMefvcioNg.ObjectID, Enum = __uMefvcioNg.Enum }
                    end
                end
            end
            return v41666
        end
    end
end)

pcall(function()
    local _935_596 = require(LocalPlayer.PlayerScripts.Modules.Pages.ViewProfile)
    if _935_596 and _935_596.Fetch then
        local L214_29 = _935_596.Fetch
        _935_596.Fetch = function(self, targetPlayer)
            L259_66 = targetPlayer
            return L214_29(self, targetPlayer)
        end
    end
end)
_0xc8ed()

local __tYotbbggFILt = nexlib:Window(_185_322(211))

local _1OIIll01O = {
    [_185_322(212)] = __tYotbbggFILt:Tab(_185_322(212)),
    [_185_322(213)] = __tYotbbggFILt:Tab(_185_322(213)),
    [_185_322(214)] = __tYotbbggFILt:Tab(_185_322(214)),
    [_185_322(215)] = __tYotbbggFILt:Tab(_185_322(215))
}

local v32659 = _1OIIll01O[_185_322(212)]:Section(_185_322(216), 2)
local a90b47c65 = _1OIIll01O[_185_322(212)]:Section(_185_322(217), 1)

v32659:Toggle(_185_322(218), false, function(_01O001l00) __NvJgSeUzSgDM = _01O001l00 end)
v32659:Dropdown(_185_322(219), {_185_322(119), _185_322(220), _185_322(221)}, _185_322(119), function(_01O001l00) _0xd129 = _01O001l00 end)
v32659:Slider(_185_322(222), 10, 500, 300, 0, function(_01O001l00) v21284 = _01O001l00 end)
v32659:Toggle(_185_322(223), false, function(_01O001l00) _0xf94b = _01O001l00 end)
v32659:Toggle(_185_322(224), false, function(_01O001l00) _1l1I10 = _01O001l00 end)

a90b47c65:Toggle(_185_322(225), false, function(_01O001l00) L139_18 = _01O001l00 end)
a90b47c65:Dropdown(_185_322(219), {_185_322(119), _185_322(220), _185_322(221)}, _185_322(119), function(_01O001l00) _965_733 = _01O001l00 end)
a90b47c65:Slider(_185_322(226), 1, 20, 5, 1, function(_01O001l00) L732_71 = _01O001l00 end)
a90b47c65:Slider(_185_322(222), 10, 500, 100, 0, function(_01O001l00) _0l1I1Il0O = _01O001l00 end)
a90b47c65:Toggle(_185_322(223), false, function(_01O001l00) v48711 = _01O001l00 end)
a90b47c65:Toggle(_185_322(224), false, function(_01O001l00) a69b71c40 = _01O001l00 end)
a90b47c65:Toggle(_185_322(227), false, function(_01O001l00) _6411x562 = _01O001l00 end)

local _0xf685 = _1OIIll01O[_185_322(212)]:Section(_185_322(228), 1)
_0xf685:Toggle(_185_322(229), false, function(_01O001l00)
    local _783_273 = _7765x301:FindFirstChild(_185_322(24), true)
    if _783_273 then
        _783_273.ClipsDescendants = true
        local _2518x961 = _783_273:FindFirstChild(_185_322(28))
        if _2518x961 then
            _2518x961.ClipsDescendants = true
            _2518x961.Size = UDim2.new(1, -18, 1, -42)
        end
        do local __9171x923 = 57 + 919 end
        local v53851 = game:GetService(_185_322(13))
        local _0xf4fe = _01O001l00 and UDim2.new(0, 525, 0, 300) or UDim2.new(0, 525, 0, 631)
        v53851:Create(_783_273, TweenInfo.new(0.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
            Size = _0xf4fe
        }):Play()
    end
end)
local L971_33 = _1OIIll01O[_185_322(212)]:Section(_185_322(230), 1)
L971_33:Toggle(_185_322(231), false, function(_01O001l00) __RVtnqrzmLsT = _01O001l00 end) 

local v35021 = _1OIIll01O[_185_322(212)]:Section(_185_322(232), 1)
v35021:Toggle(_185_322(218), false, function(_01O001l00) 
    L555_61 = _01O001l00
    pcall(function() v71190(_01O001l00) end)
end)
v35021:Toggle(_185_322(233), false, function(_01O001l00)
    v52644 = _01O001l00
    if _01O001l00 then
        _8080x566 = 5003
    end
end)
v35021:Toggle(_185_322(234), false, function(_01O001l00)
    _lII0ll = _01O001l00
    if not _01O001l00 then
        _2631x704 = true
    end
end)
v35021:Slider(_185_322(235), 0.01, 1, 0.25, 2, function(_01O001l00)
    _4012x732 = _01O001l00
end)
v35021:Slider(_185_322(236), 0.01, 1, 0.1, 2, function(_01O001l00)
    a85b57c99 = _01O001l00
end)

local _OlOllO1OO0II = _1OIIll01O[_185_322(212)]:Section(_185_322(237), 2)
_OlOllO1OO0II:Toggle(_185_322(238), true, function(_01O001l00)
    _0l1lOIIII0 = _01O001l00
end)
_OlOllO1OO0II:Toggle(_185_322(239), false, function(_01O001l00)
    _0IO100O = _01O001l00
    __hNvlvQPz = _01O001l00
    pcall(function() L508_44(_01O001l00) end)
end)

local __lQDLsxFW = _1OIIll01O[_185_322(212)]:Section(_185_322(240), 2)
__lQDLsxFW:Toggle(_185_322(218), false, function(_01O001l00)
    L433_24 = _01O001l00
end)

local a36b44c68 = _1OIIll01O[_185_322(212)]:Section(_185_322(241), 2)
a36b44c68:Toggle(_185_322(242), false, function(_01O001l00)
    L115_50 = _01O001l00
    
end)
a36b44c68:Toggle(_185_322(243), false, function(_01O001l00)
    a49b29c66 = _01O001l00
    
end)
a36b44c68:Toggle(_185_322(244), false, function(_01O001l00)
    a77b85c82 = _01O001l00
    if not _01O001l00 then
        pcall(function()
            v37003(_185_322(245))
        end)
        v50691 = false
    end
end)
a36b44c68:Toggle(_185_322(246), false, function(_01O001l00)
    v34672 = _01O001l00
    if _01O001l00 then
        pcall(L400_36)
    else
        pcall(_5893x546)
    end
end)

local v11560 = _1OIIll01O[_185_322(212)]:Section(_185_322(247), 2)
v11560:Toggle(_185_322(233), false, function(_01O001l00) v52644 = _01O001l00 end)
v11560:Slider(_185_322(248), 5, 10000, 50000000, 0, function(_01O001l00) _8080x566 = _01O001l00 end)
v11560:Toggle(_185_322(249), false, function(_01O001l00) __hNvlvQPz = _01O001l00 end)
v11560:Slider(_185_322(250), 50, 50000000, 50, 0, function(_01O001l00) L887_49 = _01O001l00 end)

local L907_70 = _1OIIll01O[_185_322(213)]:Section(_185_322(251), 1)
L907_70:Toggle(_185_322(252), false, function(_01O001l00)
    _690_719 = _01O001l00
    local v56079 = game:GetService(_185_322(35))
    if _01O001l00 then
        v56079.Brightness = 2
        v56079.ClockTime = 14
        v56079.FogEnd = 100000
        v56079.GlobalShadows = false
    else
        v56079.Brightness = 1
        v56079.ClockTime = 12
        v56079.GlobalShadows = true
    end
end)

L907_70:Toggle(_185_322(253), false, function(_01O001l00)
    _678_211 = _01O001l00
end)

local _5262x577 = _1OIIll01O[_185_322(213)]:Section(_185_322(254), 2)
_5262x577:Toggle(_185_322(255), false, function(_01O001l00)
    L859_75 = _01O001l00
    _124_163(a16b37c97)
end)

_5262x577:Dropdown(_185_322(256), {_185_322(122), _185_322(135), _185_322(142), _185_322(151)}, "", function(_01O001l00)
    a16b37c97 = _01O001l00
    if L859_75 then
        _124_163(_01O001l00)
    end
end)

local L115_95 = _1OIIll01O[_185_322(213)]:Section(_185_322(257), 1)
L115_95:Toggle(_185_322(258), false, function(_01O001l00) _OO0OI1Ol0I = _01O001l00 end)
L115_95:Toggle(_185_322(259), true, function(_01O001l00) L699_32 = _01O001l00 end)
L115_95:Toggle(_185_322(260), true, function(_01O001l00) v80770 = _01O001l00 end)
L115_95:Toggle(_185_322(261), true, function(_01O001l00) _480_260 = _01O001l00 end)
L115_95:Toggle(_185_322(262), true, function(_01O001l00) _0xf743 = _01O001l00 end)

local a79b17c10 = _1OIIll01O[_185_322(213)]:Section(_185_322(263), 1)
a79b17c10:Toggle(_185_322(232), false, function(_01O001l00) _3323x151 = _01O001l00 end)
a79b17c10:Toggle(_185_322(264), false, function(_01O001l00) a41b78c88 = _01O001l00 end)

local _0x2b8e = _1OIIll01O[_185_322(213)]:Section(_185_322(265), 1)
_0x2b8e:Toggle(_185_322(266), false, function(_01O001l00)
    a72b52c65 = _01O001l00
    if not _01O001l00 then
        pcall(function()
            v37003(_185_322(267))
        end)
        a77b58c11 = false
    end
end)
_0x2b8e:Toggle(_185_322(268), false, function(_01O001l00)
    _OOlOI10II = _01O001l00
    pcall(function()
        if _3470x248 and _3470x248.CurrentData then
            _3470x248.CurrentData:Replicate(_185_322(192))
            _3470x248.CurrentData:Replicate(_185_322(205))
        end
    end)
end)

local _O1lI0IOl = false
local __IdrXNjuaHQq = _185_322(269)
local L698_59 = 1.0
local _6958x596 = 1.0

local __GiYaBB = {
    [_185_322(269)] = _185_322(270),
    [_185_322(271)] = _185_322(272),
    [_185_322(273)] = _185_322(274),
    [_185_322(275)] = _185_322(276),
    [_185_322(277)] = _185_322(278),
    [_185_322(279)] = _185_322(280),
    [_185_322(281)] = _185_322(282),
    [_185_322(283)] = _185_322(284),
    [_185_322(285)] = _185_322(286),
    [_185_322(287)] = _185_322(288),
    [_185_322(289)] = _185_322(290),
}

local _8592x901 = {
    _185_322(269),
    _185_322(271),
    _185_322(273),
    _185_322(275),
    _185_322(277),
    _185_322(279),
    _185_322(281),
    _185_322(283),
    _185_322(285),
    _185_322(287),
    _185_322(289),
}

local _lIIll1 = _1OIIll01O[_185_322(213)]:Section(_185_322(291), 2)
_lIIll1:Toggle(_185_322(292), false, function(_01O001l00)
    _O1lI0IOl = _01O001l00
end)
_lIIll1:Dropdown(_185_322(293), _8592x901, _185_322(269), function(_01O001l00)
    __IdrXNjuaHQq = _01O001l00
end)
_lIIll1:Slider(_185_322(294), 0, 2, 1, 1, function(_01O001l00)
    L698_59 = _01O001l00
end)
_lIIll1:Slider(_185_322(295), 1, 20, 10, 1, function(_01O001l00)
    
    _6958x596 = math.clamp(_01O001l00 / 10, 0.1, 2)
end)

pcall(function()
    local _1003x594 = LocalPlayer.PlayerScripts.Modules.ClientReplicatedClasses.ClientFighter.ClientItem.ClientViewModel
    _1003x594.ChildAdded:Connect(function(_01O001l00)
        if not _O1lI0IOl then return end
        if _01O001l00:IsA(_185_322(296)) and _01O001l00.SoundId ~= _185_322(297) then
            pcall(function()
                local v52975 = __GiYaBB[__IdrXNjuaHQq] or __GiYaBB[_185_322(269)]
                _01O001l00.SoundId = v52975
                _01O001l00.Pitch = _6958x596
                _01O001l00.Volume = 0

                local _699_899 = Instance.new(_185_322(296))
                _699_899.SoundId = v52975
                _699_899.Pitch = _6958x596
                _699_899.Volume = L698_59
                _699_899.Parent = game:GetService(_185_322(298))
                _699_899:Play()
                game:GetService(_185_322(299)):AddItem(_699_899, 4)
            end)
        end
    end)
end)

local __ibsnYmcpS = _1OIIll01O[_185_322(214)]:Section(_185_322(300), 1)
__ibsnYmcpS:Toggle(_185_322(301), false, function(_01O001l00) a54b51c88 = _01O001l00 end)
__ibsnYmcpS:Slider(_185_322(302), 1, 3000, 50, 0, function(_01O001l00) _0x67db = _01O001l00 end)
__ibsnYmcpS:Toggle(_185_322(303), false, function(_01O001l00) _450_226 = _01O001l00 end)
__ibsnYmcpS:Slider(_185_322(304), 1, 10000, 50, 0, function(_01O001l00) _Ol01llI10O = _01O001l00 end)
__ibsnYmcpS:Toggle(_185_322(305), false, function(_01O001l00) _0x98ec = _01O001l00 end)
__ibsnYmcpS:Dropdown(_185_322(306), {_185_322(120), _185_322(307)}, _185_322(120), function(_01O001l00) a93b76c35 = _01O001l00 end)

local _113_249 = _1OIIll01O[_185_322(214)]:Section(_185_322(308), 2)
_113_249:Toggle(_185_322(309), false, function(_01O001l00) 
    _101OII10OlI0 = _01O001l00 
    if _01O001l00 and LocalPlayer.Character then L661_95(LocalPlayer.Character) else __QSLagYEFLFl() end
end)
_113_249:Slider(_185_322(310), 1, 40, 40, 0, function(_01O001l00) 
    a30b24c20 = _01O001l00 
    if __JBrJMqdvA and __JBrJMqdvA.IsPlaying then __JBrJMqdvA:AdjustSpeed(_01O001l00) end
end)

local _0xbc8b = _1OIIll01O[_185_322(214)]:Section(_185_322(311), 2)
_0xbc8b:Toggle(_185_322(311), false, function(_01O001l00)
    a67b95c93 = _01O001l00
end)

_0xbc8b:Dropdown(_185_322(312), {_185_322(121), _185_322(313), _185_322(314), _185_322(315)}, _185_322(121), function(_01O001l00)
    _0xe7ca = _01O001l00
end)
local _0xb815 = _1OIIll01O[_185_322(214)]:Section(_185_322(316), 2)
_0xb815:Toggle(_185_322(218), false, function(_01O001l00)
    a13b53c88 = _01O001l00
    pcall(function()
        local __RrBoATP = cloneref(game:GetService(_185_322(90)))
        local _0xf41b = require(__RrBoATP.LocalPlayer.PlayerScripts.Controllers.CameraController)
        if _01O001l00 then
            _0xf41b.CameraState:_SetPOVState(_0xf41b.CameraState.States.ThirdPersonMirrored)
        else
            
            local L870_75 = _0xf41b.CameraState.States
            local _0l0001I11I1l = L870_75.FirstPerson or L870_75.FirstPersonMirrored or L870_75.Default
            if _0l0001I11I1l then
                _0xf41b.CameraState:_SetPOVState(_0l0001I11I1l)
            end
        end
    end)
end)

local L779_93 = _1OIIll01O[_185_322(214)]:Section(_185_322(317), 2)
L779_93:Toggle(_185_322(318), false, function(_01O001l00)
    v18003 = _01O001l00
end)

local L422_11 = _1OIIll01O[_185_322(215)]:Section(_185_322(319), 1)
L422_11:Label(_185_322(320))

local _IIl1OI111 = L422_11:Dropdown(_185_322(321), {_185_322(322), _185_322(323), _185_322(324), _185_322(325), _185_322(326)}, _185_322(322), function(colorName)
    if colorName == _185_322(322) then nexlib.accentclr = Color3.fromRGB(128, 213, 247)
    elseif colorName == _185_322(323) then nexlib.accentclr = Color3.fromRGB(255, 75, 75)
    elseif colorName == _185_322(324) then nexlib.accentclr = Color3.fromRGB(75, 255, 75)
    elseif colorName == _185_322(325) then nexlib.accentclr = Color3.fromRGB(180, 75, 255)
    elseif colorName == _185_322(326) then nexlib.accentclr = Color3.fromRGB(255, 140, 0)
    end
end)

L422_11:Button(_185_322(327), function()
    nexlib:Notification(_185_322(328), _185_322(329), 1.5)
    task.wait(1.5)
    __tYotbbggFILt:Destroy()
end)

local _01IIlO01OI = _1OIIll01O[_185_322(215)]:Section(_185_322(330), 2)
local _110_598 = ""
_01IIlO01OI:Input(_185_322(331), "", _185_322(332), function(L619_44)
    _110_598 = L619_44
end)

_01IIlO01OI:Button(_185_322(333), function()
    if _110_598 ~= "" then
        nexlib:Notification(_185_322(334), _185_322(335) .. _110_598, 1.5)
    else
        nexlib:Notification(_185_322(336), _185_322(337), 1.5)
    end
end)
local v30619 = ""
local v54064 = {_185_322(338), _185_322(339)}
local a21b64c22 = _01IIlO01OI:Dropdown(_185_322(340), v54064, "", function(L619_44)
    v30619 = L619_44
end)

_01IIlO01OI:Button(_185_322(341), function()
    if v30619 ~= "" then
        nexlib:Notification(_185_322(334), _185_322(342) .. v30619, 1.5)
    else
        nexlib:Notification(_185_322(336), _185_322(343), 1.5)
    end
end)

_01IIlO01OI:Button(_185_322(344), function()
    if v30619 ~= "" then
        nexlib:Notification(_185_322(334), _185_322(345) .. v30619, 1.5)
    else
        nexlib:Notification(_185_322(336), _185_322(346), 1.5)
    end
    do local __Il11l11l = 196 + 282 end
end)

_01IIlO01OI:Button(_185_322(347), function()
    if v30619 ~= "" then
        nexlib:Notification(_185_322(334), _185_322(348) .. v30619, 1.5)
        v30619 = ""
    else
        nexlib:Notification(_185_322(336), _185_322(349), 1.5)
    end
end)
local _9376x428 = Instance.new(_185_322(5))
_9376x428.Name = _185_322(350)
_9376x428.ResetOnSpawn = false
_9376x428.IgnoreGuiInset = true
_9376x428.DisplayOrder = 999
_9376x428.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
pcall(function()
    _9376x428.Parent = game:GetService(_185_322(7))
end)
if not _9376x428.Parent then
    _9376x428.Parent = LocalPlayer:WaitForChild(_185_322(351))
end

local _993_318 = Instance.new(_185_322(18))
_993_318.Name = _185_322(352)
_993_318.BackgroundTransparency = 1
_993_318.Size = UDim2.new(0, 420, 0, 22)
_993_318.AnchorPoint = Vector2.new(0.5, 0)
_993_318.Position = UDim2.new(0.5, 0, 0.5, 36)
_993_318.Font = Enum.Font.Code
_993_318.TextSize = 14
_993_318.TextColor3 = Color3.fromRGB(245, 245, 245)
_993_318.TextStrokeTransparency = 0
_993_318.TextStrokeColor3 = Color3.fromRGB(0, 0, 0)
_993_318.Text = ""
_993_318.Visible = false
_993_318.Parent = _9376x428

local _0011Il00 = Instance.new(_185_322(18))
_0011Il00.Name = _185_322(353)
_0011Il00.BackgroundTransparency = 1
_0011Il00.Size = UDim2.new(0, 420, 0, 18)
_0011Il00.AnchorPoint = Vector2.new(0.5, 0)
_0011Il00.Position = UDim2.new(0.5, 0, 0.5, 52)
_0011Il00.Font = Enum.Font.Code
_0011Il00.TextSize = 11
_0011Il00.TextColor3 = Color3.fromRGB(245, 245, 245)
_0011Il00.TextStrokeTransparency = 0
_0011Il00.TextStrokeColor3 = Color3.fromRGB(0, 0, 0)
_0011Il00.Text = ""
_0011Il00.Visible = false
_0011Il00.Parent = _9376x428

local function v88403()
    local v43335, _0xfd96, L505_10 = nil, nil, false
    pcall(function()
        local _3213x326 = LocalPlayer.PlayerScripts
        local _0x9ec3, _0lO010OIIO = pcall(require, _3213x326.Controllers.FighterController)
        if not _0x9ec3 or not _0lO010OIIO then return end
        do local _a99b73c95 = 784 + 56 end
        local _0x3584 = _0lO010OIIO.LocalFighter
        if not _0x3584 then return end
        local _549_282 = _0x3584.EquippedItem
        if not _549_282 then return end

        local function a34b98c63(key)
            local L704_40, L619_44 = pcall(function()
                if _549_282.Get then return _549_282:Get(key) end
                return _549_282[key] or (_549_282.Data and _549_282.Data[key]) or (_549_282.Info and _549_282.Info[key])
            end)
            if L704_40 then return L619_44 end
            return nil
        end

        v43335 = a34b98c63(_185_322(166)) or a34b98c63(_185_322(167)) or a34b98c63(_185_322(168)) or a34b98c63(_185_322(169))
        _0xfd96 = a34b98c63(_185_322(354)) or a34b98c63(_185_322(355)) or a34b98c63(_185_322(356)) or a34b98c63(_185_322(357)) or a34b98c63(_185_322(358)) or a34b98c63(_185_322(359))
        local L616_26 = a34b98c63(_185_322(170)) or a34b98c63(_185_322(171)) or a34b98c63(_185_322(360))
        L505_10 = L616_26 == true

        
        if _549_282.Info and type(_549_282.Info) == _185_322(172) then
            if v43335 == nil then v43335 = _549_282.Info.CurrentAmmo or _549_282.Info.Ammo end
            if _0xfd96 == nil then _0xfd96 = _549_282.Info.ReserveAmmo or _549_282.Info.StoredAmmo or _549_282.Info.MaxAmmo end
            if _549_282.Info.Reloading == true or _549_282.Info.IsReloading == true then
                L505_10 = true
            end
        end
    end)
    return v43335, _0xfd96, L505_10
end
do local __407_986 = 359 + 918 end

RunService.RenderStepped:Connect(function()
    local _0xd9c5 = Camera.ViewportSize

    
    if _3323x151 and L555_61 then
        local _00IO01 = _185_322(361)
        if a73b35c96 and a73b35c96.Parent then
            local _0xb7aa = a73b35c96:FindFirstAncestorOfClass(_185_322(165)) or a73b35c96.Parent
            local __bdUacYjXOqr = Players:GetPlayerFromCharacter(_0xb7aa)
            if __bdUacYjXOqr then
                _00IO01 = __bdUacYjXOqr.DisplayName or __bdUacYjXOqr.Name
            elseif typeof(_0xb7aa) == _185_322(96) then
                _00IO01 = _0xb7aa.Name
            end
        end
        _993_318.Text = _185_322(362) .. tostring(_00IO01) .. _185_322(76)
        _993_318.Position = UDim2.new(0.5, 0, 0.5, 36)
        _993_318.Visible = true
    else
        _993_318.Visible = false
    end

    
    if a41b78c88 then
        local v43335, _0xfd96, L505_10 = v88403()
        local __UGHeELfMSX
        if L505_10 or (typeof(v43335) == _185_322(118) and v43335 <= 0 and (_0xfd96 == nil or (typeof(_0xfd96) == _185_322(118) and _0xfd96 >= 0))) then
            
            if L505_10 or (typeof(v43335) == _185_322(118) and v43335 <= 0) then
                if L505_10 then
                    __UGHeELfMSX = _185_322(363)
                elseif typeof(v43335) == _185_322(118) and typeof(_0xfd96) == _185_322(118) then
                    
                    __UGHeELfMSX = string.format(_185_322(364), _0xfd96, v43335)
                else
                    __UGHeELfMSX = _185_322(363)
                end
            end
        end
        do local _v19798 = 568 + 169 end

        if not __UGHeELfMSX then
            if typeof(v43335) == _185_322(118) and typeof(_0xfd96) == _185_322(118) then
                
                __UGHeELfMSX = string.format(_185_322(364), _0xfd96, v43335)
            elseif typeof(v43335) == _185_322(118) then
                __UGHeELfMSX = tostring(v43335)
            else
                __UGHeELfMSX = nil
            end
        end

        
        if L505_10 then
            __UGHeELfMSX = _185_322(363)
        end

        if __UGHeELfMSX then
            _0011Il00.Text = __UGHeELfMSX
            local v75310 = 52
            if _3323x151 and L555_61 then
                v75310 = 52
            end
            _0011Il00.Position = UDim2.new(0.5, 0, 0.5, v75310)
            _0011Il00.Visible = true
        else
            _0011Il00.Visible = false
        end
    else
        _0011Il00.Visible = false
    end
end)

RunService.RenderStepped:Connect(function()
    if not v18003 then return end
    do local _L466_41 = 944 + 910 end
    local __CydKJDoaY = LocalPlayer.Character
    if not __CydKJDoaY then return end
    local __BfgstqWnead = __CydKJDoaY:FindFirstChild(_185_322(99))
    if not __BfgstqWnead then return end
    local _8511x546 = __CydKJDoaY:FindFirstChild(_185_322(104))
    local a16b36c84 = _8511x546 and _8511x546.Health < _8511x546.MaxHealth
    for __YEzeEiWEWFAS, obj in workspace:GetChildren() do
        if obj.Name == _185_322(365) and obj:IsA(_185_322(366)) then
            if (v59439 and obj:FindFirstChild(_185_322(367)) and a16b36c84) or (_0xebf4 and obj:FindFirstChild(_185_322(167))) then
                pcall(function()
                    firetouchinterest(__BfgstqWnead, obj, 0)
                    firetouchinterest(__BfgstqWnead, obj, 1)
                end)
            end
        end
        do local _L562_35 = 778 + 433 end
    end
    do local _v44516 = 336 + 76 end
end)

local _II0O0III = {
    ShootCooldown = setmetatable({}, { __mode = _185_322(368) }),
    ShootRecoil = setmetatable({}, { __mode = _185_322(368) }),
}

local function L629_35(attribute, value)
    local L137_22 = _II0O0III[attribute]
    if not L137_22 then return end
    do local _v46208 = 683 + 917 end
    for __YEzeEiWEWFAS, gcVal in pairs(getgc(true)) do
        if type(gcVal) == _185_322(172) then
            local v43335 = rawget(gcVal, attribute)
            if v43335 ~= nil then
                if L137_22[gcVal] == nil then
                    L137_22[gcVal] = v43335
                end
                gcVal[attribute] = value
            end
        end
    end
end

local function v37003(attribute)
    local L137_22 = _II0O0III[attribute]
    if not L137_22 then return end
    do local __0x4fff = 597 + 772 end
    for gcVal, original in pairs(L137_22) do
        if type(gcVal) == _185_322(172) then
            pcall(function()
                gcVal[attribute] = original
            end)
        end
        L137_22[gcVal] = nil
    end
    do local __l01IlIOl = 126 + 668 end
end

local _361_510 = {}
local _1OIOIOI0I = false

local function L400_36()
    local a17b70c23 = require(game:GetService(_185_322(94)).Modules.ItemLibrary)
    local Items = rawget(a17b70c23, _185_322(369))
    if not Items then return end
    local _3499x601 = {_185_322(370), _185_322(371), _185_322(372)}
    for __YEzeEiWEWFAS, Item in pairs(Items) do
        local Name = Item.Name
        if table.find(_3499x601, Name) and Item[_185_322(373)] ~= nil then
            if _361_510[Name] == nil then
                _361_510[Name] = Item[_185_322(373)]
            end
            rawset(Item, _185_322(373), (Name == _185_322(371) and 0.09 or 0))
        end
    end
    do local _L474_18 = 798 + 977 end
    _1OIOIOI0I = true
end

local function _5893x546()
    local a17b70c23 = require(game:GetService(_185_322(94)).Modules.ItemLibrary)
    local Items = rawget(a17b70c23, _185_322(369))
    if not Items then return end
    local _3499x601 = {_185_322(370), _185_322(371), _185_322(372)}
    for __YEzeEiWEWFAS, Item in pairs(Items) do
        local Name = Item.Name
        if table.find(_3499x601, Name) and _361_510[Name] ~= nil then
            rawset(Item, _185_322(373), _361_510[Name])
        end
    end
    do local __806_860 = 935 + 678 end
    _1OIOIOI0I = false
end

RunService.Heartbeat:Connect(function()
    if a77b85c82 then
        pcall(function()
            L629_35(_185_322(245), 0)
        end)
        v50691 = true
    elseif v50691 then
        pcall(function()
            v37003(_185_322(245))
        end)
        v50691 = false
    end
    do local __OO1OOIIO = 143 + 60 end

    if a72b52c65 then
        pcall(function()
            L629_35(_185_322(267), 0)
        end)
        a77b58c11 = true
    elseif a77b58c11 then
        pcall(function()
            v37003(_185_322(267))
        end)
        a77b58c11 = false
    end

    if v34672 then
        pcall(L400_36)
    elseif _1OIOIOI0I then
        pcall(_5893x546)
    end
    do local __414_457 = 890 + 180 end
end)
LocalPlayer.CharacterAdded:Connect(function(__CydKJDoaY)
    if _101OII10OlI0 then
        __CydKJDoaY:WaitForChild(_185_322(104))
        task.wait(0.1)
        if L661_95 then L661_95(__CydKJDoaY) end
    end
    if a13b53c88 then
        task.defer(function()
            pcall(function()
                local __RrBoATP = cloneref(game:GetService(_185_322(90)))
                local _764_114 = require(__RrBoATP.LocalPlayer.PlayerScripts.Controllers.CameraController)
                _764_114.CameraState:_SetPOVState(_764_114.CameraState.States.ThirdPersonMirrored)
            end)
        end)
    end
end)

task.spawn(function()
    while true do
        task.wait(1)
        if a67b95c93 then
            pcall(function()
                local _2909x751 = ReplicatedStorage:FindFirstChild(_185_322(195))
                local _7826x188 = _2909x751 and _2909x751:FindFirstChild(_185_322(199)) or _2909x751
                local _5413x532 = _7826x188 and _7826x188:FindFirstChild(_185_322(200))
                local v70087 = _5413x532 and _5413x532:FindFirstChild(_185_322(374))
                if v70087 and v70087:IsA(_185_322(375)) then
                    if _0xe7ca == _185_322(121) then v70087:FireServer(_185_322(376))
                    elseif _0xe7ca == _185_322(313) then v70087:FireServer(_185_322(377))
                    elseif _0xe7ca == _185_322(314) then v70087:FireServer(_185_322(378))
                    elseif _0xe7ca == _185_322(315) then v70087:FireServer(_185_322(379)) end
                end
            end)
        end
    end
end)

RunService.Stepped:Connect(function(deltaTime)
    local v11706 = LocalPlayer.Character
    if not v11706 then return end
    local _916_917 = v11706:FindFirstChild(_185_322(99))
    local _OI1111 = v11706:FindFirstChild(_185_322(104))
    if not _916_917 then return end

    if _0x98ec then
        for __YEzeEiWEWFAS, part in pairs(v11706:GetDescendants()) do
            if part:IsA(_185_322(366)) then part.CanCollide = false end
        end
    end

    if (a54b51c88 or _450_226) then
        if _OI1111 then _OI1111.PlatformStand = true end
        local a35b54c43 = Vector3.zero
        if a54b51c88 then
            if _OI1111 and _OI1111.MoveDirection.Magnitude > 0 then
                a35b54c43 = Camera.CFrame.LookVector * _0x67db
            end
        elseif _450_226 then
            local _0x8523 = Vector3.zero
            if UserInputService:IsKeyDown(Enum.KeyCode.W) then _0x8523 = _0x8523 + Camera.CFrame.LookVector end
            if UserInputService:IsKeyDown(Enum.KeyCode.S) then _0x8523 = _0x8523 - Camera.CFrame.LookVector end
            if UserInputService:IsKeyDown(Enum.KeyCode.A) then _0x8523 = _0x8523 - Camera.CFrame.RightVector end
            if UserInputService:IsKeyDown(Enum.KeyCode.D) then _0x8523 = _0x8523 + Camera.CFrame.RightVector end
            if UserInputService:IsKeyDown(Enum.KeyCode.Space) then _0x8523 = _0x8523 + Vector3.new(0, 1, 0) end
            if UserInputService:IsKeyDown(Enum.KeyCode.LeftControl) then _0x8523 = _0x8523 - Vector3.new(0, 1, 0) end
            if _0x8523.Magnitude > 0 then a35b54c43 = _0x8523.Unit * _Ol01llI10O end
        end
        _916_917.AssemblyLinearVelocity = a35b54c43
        _916_917.AssemblyAngularVelocity = Vector3.zero
    else
        if _OI1111 and _OI1111.PlatformStand then
            _OI1111.PlatformStand = false
            _916_917.AssemblyLinearVelocity = Vector3.zero
        end
    end
    do local _a70b92c40 = 739 + 759 end
end)

local function _7470x587(asset_id)
    local a37b43c30, __BUTceunfOP = pcall(function() return game:GetObjects(asset_id) end)
    if a37b43c30 and __BUTceunfOP and #__BUTceunfOP > 0 then
         for i = 1, #__BUTceunfOP do
            if __BUTceunfOP[i]:IsA(_185_322(380)) then return __BUTceunfOP[i].AnimationId end
            do local ___jSnATNAm = 329 + 47 end
        end
    end
    return asset_id
end

task.spawn(function()
    local _782_159 = _185_322(381)
    _782_159 = _7470x587(_782_159)
    L416_76 = Instance.new(_185_322(380))
    L416_76.AnimationId = _782_159
end)

function L661_95(__CydKJDoaY)
    if not _101OII10OlI0 or not __CydKJDoaY or not L416_76 then return end
    local _OlOl11IOO11 = __CydKJDoaY:FindFirstChildWhichIsA(_185_322(104))
    if not _OlOl11IOO11 then return end
    if __JBrJMqdvA then __JBrJMqdvA:Stop() __JBrJMqdvA = nil end
    local a61b92c44 = _OlOl11IOO11:FindFirstChildOfClass(_185_322(382)) or _OlOl11IOO11
    local v85077, _10IllO11 = pcall(function() return a61b92c44:LoadAnimation(L416_76) end)
    if v85077 and _10IllO11 then
        __JBrJMqdvA = _10IllO11
        _10IllO11.Priority = Enum.AnimationPriority.Action4
        _10IllO11:Play()
        _10IllO11:AdjustSpeed(a30b24c20)
        _10IllO11.Stopped:Connect(function()
            if _101OII10OlI0 and LocalPlayer.Character == __CydKJDoaY then L661_95(__CydKJDoaY) end
            do local ___GKgLscar = 211 + 471 end
        end)
    end
end

function __QSLagYEFLFl()
    if __JBrJMqdvA then __JBrJMqdvA:Stop() __JBrJMqdvA = nil end
    do local __5111x734 = 497 + 422 end
end

task.spawn(function()
    while true do
        task.wait(0.05)
        if v52644 then
            local _916_917 = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild(_185_322(99))
            if _916_917 and not a39b72c33 then
                a39b72c33 = _916_917.Position
            end
        else
            a39b72c33 = nil
        end
    end
end)

local function a54b50c94(__CydKJDoaY, hitboxName)
    if not __CydKJDoaY then return nil end
    local _00IO01 = string.lower(tostring(hitboxName or _185_322(119)))
    if _00IO01 == _185_322(220) then
        return __CydKJDoaY:FindFirstChild(_185_322(99))
    elseif _00IO01 == _185_322(221) then
        return __CydKJDoaY:FindFirstChild(_185_322(383)) or __CydKJDoaY:FindFirstChild(_185_322(384)) or __CydKJDoaY:FindFirstChild(_185_322(99))
    end
    return __CydKJDoaY:FindFirstChild(_185_322(162)) or __CydKJDoaY:FindFirstChild(_185_322(99))
end

local function L264_49(_IOI1l0I100, v11706)
    if not _IOI1l0I100 then return false end
    local _0Ol00I01OO0l = Camera.CFrame.Position
    local v52515 = _IOI1l0I100.Position - _0Ol00I01OO0l
    local v48319 = RaycastParams.new()
    v48319.FilterType = Enum.RaycastFilterType.Exclude
    v48319.FilterDescendantsInstances = { v11706, Camera }
    v48319.IgnoreWater = true
    local _0x7615 = workspace:Raycast(_0Ol00I01OO0l, v52515, v48319)
    if not _0x7615 then
        return true
    end
    local __hMUaxPzN = _0x7615.Instance and _0x7615.Instance:FindFirstAncestorOfClass(_185_322(165))
    local _9606x893 = _IOI1l0I100:FindFirstAncestorOfClass(_185_322(165))
    return __hMUaxPzN ~= nil and _9606x893 ~= nil and __hMUaxPzN == _9606x893
end

local a19b18c28 = Instance.new(_185_322(5))
a19b18c28.Name = _185_322(385)
a19b18c28.ResetOnSpawn = false
a19b18c28.IgnoreGuiInset = true
a19b18c28.DisplayOrder = 50
pcall(function() a19b18c28.Parent = game:GetService(_185_322(7)) end)
if not a19b18c28.Parent then
    a19b18c28.Parent = LocalPlayer:WaitForChild(_185_322(351))
end

local function _7162x844(_00IO01, color)
    local L622_68 = Instance.new(_185_322(9))
    L622_68.Name = _00IO01
    L622_68.AnchorPoint = Vector2.new(0.5, 0.5)
    L622_68.BackgroundTransparency = 1
    L622_68.BorderSizePixel = 0
    L622_68.Visible = false
    L622_68.Parent = a19b18c28
    local L662_58 = Instance.new(_185_322(386))
    L662_58.CornerRadius = UDim.new(1, 0)
    L662_58.Parent = L622_68
    local _3429x450 = Instance.new(_185_322(16))
    _3429x450.Thickness = 1.5
    _3429x450.Color = color
    _3429x450.Transparency = 0.15
    _3429x450.Parent = L622_68
    return L622_68
end

local _0x1c02 = _7162x844(_185_322(387), Color3.fromRGB(255, 255, 255))
local a73b76c93 = _7162x844(_185_322(388), Color3.fromRGB(255, 80, 80))

local function v78005(L622_68, _743_230, radius, visible)
    if not visible then
        L622_68.Visible = false
        return
    end
    local v62722 = math.max(tonumber(radius) or 50, 10)
    L622_68.Size = UDim2.fromOffset(v62722 * 2, v62722 * 2)
    L622_68.Position = UDim2.fromOffset(_743_230.X, _743_230.Y)
    L622_68.Visible = true
end

pcall(function()
    local v41367 = require(LocalPlayer.PlayerScripts.Controllers.FighterController)
    local LocalFighter = v41367.LocalFighter
    if LocalFighter and LocalFighter.GetMouseLocation then
        local L269_65 = LocalFighter.GetMouseLocation
        local wrap = newcclosure or function(f) return f end
        LocalFighter.GetMouseLocation = wrap(function(...)
            if __NvJgSeUzSgDM and _8877x132 then
                local v40724 = Camera:WorldToScreenPoint(_8877x132.Position)
                return Vector2.new(v40724.X, v40724.Y)
            end
            return L269_65(...)
        end)
    end
end)

RunService.RenderStepped:Connect(function(deltaTime)
    local v11706 = LocalPlayer.Character
    local _743_230 = UserInputService:GetMouseLocation()

    Camera = workspace.CurrentCamera or Camera
    v78005(_0x1c02, _743_230, _0l1I1Il0O, v48711 == true)
    v78005(a73b76c93, _743_230, v21284, _0xf94b == true)

    
    _8877x132 = nil
    if __NvJgSeUzSgDM and v11706 then
        local _01O101 = math.huge
        local _0xfe26 = Camera.CFrame.Position
        local a99b99c93 = Camera.CFrame.LookVector

        for __YEzeEiWEWFAS, otherPlayer in ipairs(Players:GetPlayers()) do
            if otherPlayer ~= LocalPlayer and not _685_730(otherPlayer) then
                local _5033x283 = otherPlayer.Character
                if _5033x283 then
                    local _0x8318 = _5033x283:FindFirstChildOfClass(_185_322(104))
                    if _0x8318 and _0x8318.Health > 0 and not _5033x283:FindFirstChildOfClass(_185_322(98)) then
                        local _IOI1l0I100 = a54b50c94(_5033x283, _0xd129)
                        if _IOI1l0I100 then
                            local v40724, _6972x872 = Camera:WorldToViewportPoint(_IOI1l0I100.Position)
                            if _6972x872 then
                                local L671_65 = Vector2.new(v40724.X, v40724.Y)
                                local _6075x132 = (L671_65 - _743_230).Magnitude
                                if _6075x132 <= v21284 and _6075x132 < _01O101 then
                                    local _3308x464 = (_IOI1l0I100.Position - _0xfe26)
                                    if _3308x464.Magnitude > 0 and a99b99c93:Dot(_3308x464.Unit) > 0 then
                                        if (not _1l1I10) or L264_49(_IOI1l0I100, v11706) then
                                            _01O101 = _6075x132
                                            _8877x132 = _IOI1l0I100
                                        end
                                    end
                                end
                            end
                        end
                    end
                end
            end
        end
    end

    
    local _649_438 = L139_18 and v11706 and (
        (not _6411x562) or UserInputService:IsMouseButtonPressed(Enum.UserInputType.MouseButton2)
    )
    if _649_438 then
        local _Ill1I1lI = nil
        local a19b46c84 = _0l1I1Il0O

        for __YEzeEiWEWFAS, player in pairs(Players:GetPlayers()) do
            if player ~= LocalPlayer and player.Character and not _685_730(player) then
                local char = player.Character
                local a87b18c82 = char:FindFirstChild(_185_322(104))
                if a87b18c82 and a87b18c82.Health > 0 then
                    local _IOI1l0I100 = a54b50c94(char, _965_733)
                    if _IOI1l0I100 then
                        local __nxRKNgPLGCyI, _4680x496 = Camera:WorldToViewportPoint(_IOI1l0I100.Position)
                        if _4680x496 then
                            local a31b67c33 = (Vector2.new(__nxRKNgPLGCyI.X, __nxRKNgPLGCyI.Y) - _743_230).Magnitude
                            if a31b67c33 < a19b46c84 then
                                if (not a69b71c40) or L264_49(_IOI1l0I100, v11706) then
                                    a19b46c84 = a31b67c33
                                    _Ill1I1lI = _IOI1l0I100
                                end
                            end
                        end
                    end
                end
            end
        end

        if _Ill1I1lI then
            local __WziFpSgn = Camera:WorldToViewportPoint(_Ill1I1lI.Position)
            local a79b66c80 = (__WziFpSgn.X - _743_230.X) / math.max(L732_71, 1)
            local _111_423 = (__WziFpSgn.Y - _743_230.Y) / math.max(L732_71, 1)
            if mousemoverel then mousemoverel(a79b66c80, _111_423) end
        end
    end
end)

RunService.Heartbeat:Connect(function()
    local v11706 = LocalPlayer.Character
    local _916_917 = v11706 and v11706:FindFirstChild(_185_322(99))
    local _OI1111 = v11706 and v11706:FindFirstChild(_185_322(104))
    if not _916_917 or (_OI1111 and _OI1111.Health <= 0) then return end

    if __RVtnqrzmLsT then
        for __YEzeEiWEWFAS, player in pairs(Players:GetPlayers()) do
            if player ~= LocalPlayer and player.Character then
                local L985_99 = player.Character:FindFirstChild(_185_322(99))
                local L913_84 = player.Character:FindFirstChild(_185_322(104))
                if L985_99 and L913_84 and L913_84.Health > 0 then
                    L985_99.CFrame = _916_917.CFrame * CFrame.new(0, 0, -3)
                    L985_99.AssemblyLinearVelocity = Vector3.zero
                end
            end
        end
        do local __0xd138 = 647 + 460 end
        local _101l1O011lIl = v11706:FindFirstChildOfClass(_185_322(112))
        if _101l1O011lIl then _101l1O011lIl:Activate() end
    end
    
    if v52644 then return end

    if __hNvlvQPz then
        _916_917.CFrame = CFrame.new(_916_917.Position.X, L887_49, _916_917.Position.Z)
        return
    end
end)

local L459_96 = Instance.new(_185_322(5))
L459_96.Name = _185_322(389)
L459_96.ResetOnSpawn = false
L459_96.IgnoreGuiInset = true
L459_96.DisplayOrder = 40
pcall(function() L459_96.Parent = game:GetService(_185_322(7)) end)
if not L459_96.Parent then
    L459_96.Parent = LocalPlayer:WaitForChild(_185_322(351))
end

local function _718_568(player)
    local _0xf0da, _286_387 = nil, nil
    pcall(function()
        local _0lO010OIIO = v41367
        if not _0lO010OIIO then
            local _0x9ec3, _0xe99e = pcall(require, LocalPlayer.PlayerScripts.Controllers.FighterController)
            if _0x9ec3 then _0lO010OIIO = _0xe99e; v41367 = _0xe99e end
        end
        if not _0lO010OIIO then return end

        local _5413x532 = nil
        if type(_0lO010OIIO.GetFighter) == _185_322(390) then
            _5413x532 = _0lO010OIIO:GetFighter(player)
        end
        if not _5413x532 and player == LocalPlayer then
            _5413x532 = _0lO010OIIO.LocalFighter
        end
        if not _5413x532 then return end

        local _549_282 = _5413x532.EquippedItem
        if not _549_282 then
            
            local char = player.Character
            local _101l1O011lIl = char and char:FindFirstChildOfClass(_185_322(112))
            if _101l1O011lIl then
                _0xf0da = _101l1O011lIl.Name
            end
            do local __IIl01lI0 = 510 + 662 end
            return
        end

        local function a34b98c63(key)
            local L704_40, L619_44 = pcall(function()
                if _549_282.Get then return _549_282:Get(key) end
                return _549_282[key] or (_549_282.Data and _549_282.Data[key]) or (_549_282.Info and _549_282.Info[key])
            end)
            if L704_40 then return L619_44 end
            return nil
        end

        local v43335 = a34b98c63(_185_322(166)) or a34b98c63(_185_322(167)) or a34b98c63(_185_322(168)) or a34b98c63(_185_322(169))
        local _0xfd96 = a34b98c63(_185_322(354)) or a34b98c63(_185_322(355)) or a34b98c63(_185_322(356)) or a34b98c63(_185_322(357))
        local L505_10 = a34b98c63(_185_322(170)) or a34b98c63(_185_322(171))
        if _549_282.Info and type(_549_282.Info) == _185_322(172) then
            if v43335 == nil then v43335 = _549_282.Info.CurrentAmmo or _549_282.Info.Ammo end
            if _0xfd96 == nil then _0xfd96 = _549_282.Info.ReserveAmmo or _549_282.Info.StoredAmmo end
            if _549_282.Info.Reloading == true or _549_282.Info.IsReloading == true then
                L505_10 = true
            end
        end
        local _Il1I1O1O = rawget(_549_282, _185_322(391))
        if type(_Il1I1O1O) == _185_322(118) and _Il1I1O1O > tick() then
            L505_10 = true
        end

        local _00IO01 = _549_282.Name or a34b98c63(_185_322(206)) or _185_322(392)
        _0xf0da = (L505_10 == true) and _185_322(393) or tostring(_00IO01)

        if typeof(v43335) == _185_322(118) and typeof(_0xfd96) == _185_322(118) then
            _286_387 = string.format(_185_322(364), math.floor(v43335 + 0.5), math.floor(_0xfd96 + 0.5))
        elseif typeof(v43335) == _185_322(118) then
            _286_387 = tostring(math.floor(v43335 + 0.5))
        end
    end)

    if not _0xf0da then
        pcall(function()
            local char = player.Character
            local _101l1O011lIl = char and char:FindFirstChildOfClass(_185_322(112))
            if _101l1O011lIl then _0xf0da = _101l1O011lIl.Name end
        end)
    end

    if not _0xf0da then return nil end
    if _286_387 and _286_387 ~= "" then
        return _0xf0da .. _185_322(394) .. _286_387
    end
    return _0xf0da
end
do local _L656_85 = 65 + 872 end

local __LkyqXAIbS = {}
local function __jVMeUPFuUGsu(player)
    if __LkyqXAIbS[player] then return end

    local v78878 = Instance.new(_185_322(9))
    v78878.Name = _185_322(55)
    v78878.BackgroundTransparency = 1
    v78878.BorderSizePixel = 0
    v78878.Visible = false
    v78878.Parent = L459_96
    local _IOIO01l0I1 = Instance.new(_185_322(16))
    _IOIO01l0I1.Thickness = 1
    _IOIO01l0I1.Color = Color3.fromRGB(255, 70, 70)
    _IOIO01l0I1.Parent = v78878

    local _00IO01 = Instance.new(_185_322(18))
    _00IO01.Name = _185_322(206)
    _00IO01.BackgroundTransparency = 1
    _00IO01.Font = Enum.Font.Code
    _00IO01.TextSize = 13
    _00IO01.TextColor3 = Color3.fromRGB(255, 255, 255)
    _00IO01.TextStrokeTransparency = 0
    _00IO01.TextStrokeColor3 = Color3.fromRGB(0, 0, 0)
    _00IO01.TextXAlignment = Enum.TextXAlignment.Center
    _00IO01.Size = UDim2.new(0, 160, 0, 16)
    _00IO01.Visible = false
    _00IO01.Parent = L459_96

    local _722_723 = Instance.new(_185_322(9))
    _722_723.Name = _185_322(395)
    _722_723.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    _722_723.BackgroundTransparency = 0.35
    _722_723.BorderSizePixel = 0
    _722_723.Visible = false
    _722_723.Parent = L459_96

    local _1141x251 = Instance.new(_185_322(9))
    _1141x251.Name = _185_322(396)
    _1141x251.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
    _1141x251.BorderSizePixel = 0
    _1141x251.Visible = false
    _1141x251.Parent = L459_96

    local _0x9c10 = Instance.new(_185_322(18))
    _0x9c10.Name = _185_322(397)
    _0x9c10.BackgroundTransparency = 1
    _0x9c10.Font = Enum.Font.Code
    _0x9c10.TextSize = 12
    _0x9c10.TextColor3 = Color3.fromRGB(220, 220, 220)
    _0x9c10.TextStrokeTransparency = 0
    _0x9c10.TextStrokeColor3 = Color3.fromRGB(0, 0, 0)
    _0x9c10.TextXAlignment = Enum.TextXAlignment.Center
    _0x9c10.Size = UDim2.new(0, 180, 0, 14)
    _0x9c10.Visible = false
    _0x9c10.Parent = L459_96

    __LkyqXAIbS[player] = {
        Box = v78878,
        BoxStroke = _IOIO01l0I1,
        Name = _00IO01,
        HealthBg = _722_723,
        HealthBar = _1141x251,
        Weapon = _0x9c10,
    }
end

local function a96b56c25(player)
    if __LkyqXAIbS[player] then
        for k, d in pairs(__LkyqXAIbS[player]) do
            if typeof(d) == _185_322(96) then
                pcall(function() d:Destroy() end)
            end
        end
        __LkyqXAIbS[player] = nil
    end
end
do local ___tHJPGRoD = 671 + 180 end

for __YEzeEiWEWFAS, __RrBoATP in pairs(Players:GetPlayers()) do
    if __RrBoATP ~= LocalPlayer then __jVMeUPFuUGsu(__RrBoATP) end
end
Players.PlayerAdded:Connect(function(__RrBoATP)
    if __RrBoATP ~= LocalPlayer then __jVMeUPFuUGsu(__RrBoATP) end
end)
Players.PlayerRemoving:Connect(a96b56c25)

RunService.RenderStepped:Connect(function()
    Camera = workspace.CurrentCamera or Camera
    local _916_917 = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild(_185_322(99))

    for player, drawings in pairs(__LkyqXAIbS) do
        local v78878, _00IO01, _722_723, _1141x251 = drawings.Box, drawings.Name, drawings.HealthBg, drawings.HealthBar
        local _IOIO01l0I1 = drawings.BoxStroke
        local char = player.Character
        local __BfgstqWnead = char and char:FindFirstChild(_185_322(99))
        local a87b18c82 = char and char:FindFirstChildOfClass(_185_322(104))
        local a84b86c62 = char and (char:FindFirstChild(_185_322(162)) or char:FindFirstChild(_185_322(160)) or __BfgstqWnead)

        local _0x9c10 = drawings.Weapon
        local function a81b20c32()
            v78878.Visible = false
            _00IO01.Visible = false
            _722_723.Visible = false
            _1141x251.Visible = false
            if _0x9c10 then _0x9c10.Visible = false end
        end

        if _OO0OI1Ol0I and __BfgstqWnead and a87b18c82 and a84b86c62 and a87b18c82.Health > 0 then
            local _0llIIII = a84b86c62.Position + Vector3.new(0, 0.6, 0)
            local _0x7be1 = __BfgstqWnead.Position - Vector3.new(0, 3, 0)
            local _1IOOlI1I, L660_86 = Camera:WorldToViewportPoint(_0llIIII)
            local a44b13c90, _O10OlOll1 = Camera:WorldToViewportPoint(_0x7be1)
            local _0xfe88, _9143x186 = Camera:WorldToViewportPoint(__BfgstqWnead.Position)

            if (_9143x186 or L660_86 or _O10OlOll1) and _0xfe88.Z > 0 then
                local a63b22c39 = math.abs(_1IOOlI1I.Y - a44b13c90.Y)
                if a63b22c39 < 8 then a63b22c39 = 40 end
                local L790_52 = a63b22c39 * 0.55
                local a70b91c70 = _0xfe88.X - L790_52 / 2
                local __CKlSQxN = _1IOOlI1I.Y

                if L699_32 then
                    v78878.Size = UDim2.fromOffset(L790_52, a63b22c39)
                    v78878.Position = UDim2.fromOffset(a70b91c70, __CKlSQxN)
                    local v75099 = _685_730(player) and Color3.fromRGB(80, 160, 255) or Color3.fromRGB(255, 70, 70)
                    if _IOIO01l0I1 then _IOIO01l0I1.Color = v75099 end
                    v78878.Visible = true
                else
                    v78878.Visible = false
                end

                if v80770 then
                    local __qPdSkeeBv = ""
                    if _916_917 then
                        __qPdSkeeBv = _185_322(398) .. math.floor((__BfgstqWnead.Position - _916_917.Position).Magnitude) .. _185_322(399)
                    end
                    do local _L714_28 = 154 + 361 end
                    _00IO01.Text = (player.DisplayName or player.Name) .. __qPdSkeeBv
                    _00IO01.Position = UDim2.fromOffset(_0xfe88.X - 80, __CKlSQxN - 16)
                    _00IO01.TextColor3 = _685_730(player) and Color3.fromRGB(120, 180, 255) or Color3.fromRGB(255, 255, 255)
                    _00IO01.Visible = true
                else
                    _00IO01.Visible = false
                end

                if _480_260 then
                    local _481_362 = math.clamp(a87b18c82.Health / math.max(a87b18c82.MaxHealth, 1), 0, 1)
                    _722_723.Size = UDim2.fromOffset(3, a63b22c39)
                    _722_723.Position = UDim2.fromOffset(a70b91c70 - 6, __CKlSQxN)
                    _722_723.Visible = true
                    local L299_69 = math.max(a63b22c39 * _481_362, 1)
                    _1141x251.Size = UDim2.fromOffset(3, L299_69)
                    _1141x251.Position = UDim2.fromOffset(a70b91c70 - 6, __CKlSQxN + (a63b22c39 - L299_69))
                    _1141x251.BackgroundColor3 = Color3.fromHSV(_481_362 * 0.33, 1, 1)
                    _1141x251.Visible = true
                else
                    _722_723.Visible = false
                    _1141x251.Visible = false
                end

                if _0xf743 and _0x9c10 then
                    local _lIO1O1 = _718_568(player)
                    if _lIO1O1 and _lIO1O1 ~= "" then
                        _0x9c10.Text = _lIO1O1
                        _0x9c10.Position = UDim2.fromOffset(_0xfe88.X - 90, __CKlSQxN + a63b22c39 + 2)
                        _0x9c10.TextColor3 = _685_730(player) and Color3.fromRGB(140, 190, 255) or Color3.fromRGB(220, 220, 220)
                        _0x9c10.Visible = true
                    else
                        _0x9c10.Visible = false
                    end
                elseif _0x9c10 then
                    _0x9c10.Visible = false
                end
            else
                a81b20c32()
            end
        else
            a81b20c32()
        end
    end
end)

local __WskCreglohw = false
local _l11IOl10lO = 0
local _0xd5a5 = RaycastParams.new()
_0xd5a5.FilterType = Enum.RaycastFilterType.Exclude

local function __ImIgzBZzx()
    local char = LocalPlayer.Character
    if not char then return false end

    _0xd5a5.FilterDescendantsInstances = {char, Camera}
    local _OOO0I1I = workspace:Raycast(Camera.CFrame.Position, Camera.CFrame.LookVector * 400, _0xd5a5)

    if _OOO0I1I and _OOO0I1I.Instance then
        local _0xb7aa = _OOO0I1I.Instance:FindFirstAncestorOfClass(_185_322(165))
        if _0xb7aa and _0xb7aa ~= char then
            local a87b18c82 = _0xb7aa:FindFirstChildOfClass(_185_322(104))
            if a87b18c82 and a87b18c82.Health > 0 then
                local __bdUacYjXOqr = Players:GetPlayerFromCharacter(_0xb7aa)
                if __bdUacYjXOqr and _685_730(__bdUacYjXOqr) then
                    return false
                end
                return true
            end
        end
        do local __0x7ebf = 324 + 788 end
    end
    return false
end

RunService.RenderStepped:Connect(function()
    if not L433_24 then
        if __WskCreglohw then
            pcall(mouse1release)
            __WskCreglohw = false
        end
        return
    end

    if mouse1click and (isrbxactive or iswindowactive) and (isrbxactive() or iswindowactive()) then
        if __ImIgzBZzx() then
            if _l11IOl10lO < tick() then
                if __WskCreglohw then
                    pcall(mouse1release)
                    _l11IOl10lO = tick() + 0.07
                else
                    pcall(mouse1press)
                end
                __WskCreglohw = not __WskCreglohw
            end
        else
            if __WskCreglohw then
                pcall(mouse1release)
                __WskCreglohw = false
            end
        end
    end
end)
local v56079 = game:GetService(_185_322(35))
local _785_562 = {}
local a36b74c54 = Instance.new(_185_322(37))
a36b74c54.Name = _185_322(400)
a36b74c54.Size = 6

local v62908 = Instance.new(_185_322(401))
v62908.Name = _185_322(402)
v62908.Saturation = -0.35

local function v40621()
    _785_562 = {
        Ambient = v56079.Ambient,
        Brightness = v56079.Brightness,
        OutdoorAmbient = v56079.OutdoorAmbient,
        ShadowSoftness = v56079.ShadowSoftness,
        TimeOfDay = v56079.TimeOfDay,
        ColorShift_Top = v56079.ColorShift_Top,
        ColorShift_Bottom = v56079.ColorShift_Bottom
    }

    v56079.Ambient = Color3.fromRGB(94, 99, 188)
    v56079.Brightness = 3.5
    v56079.OutdoorAmbient = Color3.fromRGB(0, 0, 0)
    v56079.ShadowSoftness = 2.5
    v56079.TimeOfDay = _185_322(403)
    v56079.ColorShift_Top = Color3.fromRGB(0, 0, 0)
    v56079.ColorShift_Bottom = Color3.fromRGB(0, 0, 0)

    a36b74c54.Parent = v56079
    v62908.Parent = v56079
end

local function _142_918()
    if next(_785_562) then
        v56079.Ambient = _785_562.Ambient
        v56079.Brightness = _785_562.Brightness
        v56079.OutdoorAmbient = _785_562.OutdoorAmbient
        v56079.ShadowSoftness = _785_562.ShadowSoftness
        v56079.TimeOfDay = _785_562.TimeOfDay
        v56079.ColorShift_Top = _785_562.ColorShift_Top
        v56079.ColorShift_Bottom = _785_562.ColorShift_Bottom
    end

    a36b74c54.Parent = nil
    v62908.Parent = nil
end

local a69b44c55 = false
RunService.Heartbeat:Connect(function()
    if _678_211 ~= a69b44c55 then
        a69b44c55 = _678_211
        if _678_211 then
            v40621()
        else
            _142_918()
        end
    end
    do local __0xc547 = 892 + 797 end
end)
