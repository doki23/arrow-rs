(function() {var type_impls = {
"arrow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Tensor%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#115-304\">source</a><a href=\"#impl-Tensor%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowPrimitiveType.html\" title=\"trait arrow::datatypes::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt; <a class=\"struct\" href=\"arrow/tensor/struct.Tensor.html\" title=\"struct arrow::tensor::Tensor\">Tensor</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#117-202\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.try_new\" class=\"fn\">try_new</a>(\n    buffer: <a class=\"struct\" href=\"arrow/buffer/struct.Buffer.html\" title=\"struct arrow::buffer::Buffer\">Buffer</a>,\n    shape: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    strides: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    names: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;\n) -&gt; <a class=\"type\" href=\"arrow/error/type.Result.html\" title=\"type arrow::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>Tensor</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_row_major\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#205-219\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.new_row_major\" class=\"fn\">new_row_major</a>(\n    buffer: <a class=\"struct\" href=\"arrow/buffer/struct.Buffer.html\" title=\"struct arrow::buffer::Buffer\">Buffer</a>,\n    shape: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    names: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;\n) -&gt; <a class=\"type\" href=\"arrow/error/type.Result.html\" title=\"type arrow::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new Tensor using row major memory layout</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_column_major\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#222-236\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.new_column_major\" class=\"fn\">new_column_major</a>(\n    buffer: <a class=\"struct\" href=\"arrow/buffer/struct.Buffer.html\" title=\"struct arrow::buffer::Buffer\">Buffer</a>,\n    shape: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    names: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;\n) -&gt; <a class=\"type\" href=\"arrow/error/type.Result.html\" title=\"type arrow::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new Tensor using column major memory layout</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_type\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#239-241\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.data_type\" class=\"fn\">data_type</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"arrow/datatypes/enum.DataType.html\" title=\"enum arrow::datatypes::DataType\">DataType</a></h4></section></summary><div class=\"docblock\"><p>The data type of the <code>Tensor</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shape\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#244-246\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.shape\" class=\"fn\">shape</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>The sizes of the dimensions</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#249-251\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"arrow/buffer/struct.Buffer.html\" title=\"struct arrow::buffer::Buffer\">Buffer</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the underlying <code>Buffer</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.strides\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#254-256\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.strides\" class=\"fn\">strides</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>The number of bytes between elements in each dimension</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.names\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#259-261\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.names\" class=\"fn\">names</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>The names of the dimensions</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ndim\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#264-269\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.ndim\" class=\"fn\">ndim</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>The number of dimensions</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dim_name\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#272-274\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.dim_name\" class=\"fn\">dim_name</a>(&amp;self, i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>The name of dimension i</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#277-282\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>The total number of elements in the <code>Tensor</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_contiguous\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#285-287\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.is_contiguous\" class=\"fn\">is_contiguous</a>(&amp;self) -&gt; <a class=\"type\" href=\"arrow/error/type.Result.html\" title=\"type arrow::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Indicates if the data is laid out contiguously in memory</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_row_major\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#290-295\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.is_row_major\" class=\"fn\">is_row_major</a>(&amp;self) -&gt; <a class=\"type\" href=\"arrow/error/type.Result.html\" title=\"type arrow::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Indicates if the memory layout row major</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_column_major\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#298-303\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/tensor/struct.Tensor.html#tymethod.is_column_major\" class=\"fn\">is_column_major</a>(&amp;self) -&gt; <a class=\"type\" href=\"arrow/error/type.Result.html\" title=\"type arrow::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Indicates if the memory layout column major</p>\n</div></details></div></details>",0,"arrow::tensor::BooleanTensor","arrow::tensor::Date32Tensor","arrow::tensor::Date64Tensor","arrow::tensor::Decimal128Tensor","arrow::tensor::Decimal256Tensor","arrow::tensor::DurationMicrosecondTensor","arrow::tensor::DurationMillisecondTensor","arrow::tensor::DurationNanosecondTensor","arrow::tensor::DurationSecondTensor","arrow::tensor::Float16Tensor","arrow::tensor::Float32Tensor","arrow::tensor::Float64Tensor","arrow::tensor::Int8Tensor","arrow::tensor::Int16Tensor","arrow::tensor::Int32Tensor","arrow::tensor::Int64Tensor","arrow::tensor::IntervalDayTimeTensor","arrow::tensor::IntervalMonthDayNanoTensor","arrow::tensor::IntervalYearMonthTensor","arrow::tensor::Time32MillisecondTensor","arrow::tensor::Time32SecondTensor","arrow::tensor::Time64MicrosecondTensor","arrow::tensor::Time64NanosecondTensor","arrow::tensor::TimestampMicrosecondTensor","arrow::tensor::TimestampMillisecondTensor","arrow::tensor::TimestampNanosecondTensor","arrow::tensor::TimestampSecondTensor","arrow::tensor::UInt8Tensor","arrow::tensor::UInt16Tensor","arrow::tensor::UInt32Tensor","arrow::tensor::UInt64Tensor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Tensor%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#73\">source</a><a href=\"#impl-Debug-for-Tensor%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowPrimitiveType.html\" title=\"trait arrow::datatypes::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow/tensor/struct.Tensor.html\" title=\"struct arrow::tensor::Tensor\">Tensor</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/tensor.rs.html#73\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow::tensor::BooleanTensor","arrow::tensor::Date32Tensor","arrow::tensor::Date64Tensor","arrow::tensor::Decimal128Tensor","arrow::tensor::Decimal256Tensor","arrow::tensor::DurationMicrosecondTensor","arrow::tensor::DurationMillisecondTensor","arrow::tensor::DurationNanosecondTensor","arrow::tensor::DurationSecondTensor","arrow::tensor::Float16Tensor","arrow::tensor::Float32Tensor","arrow::tensor::Float64Tensor","arrow::tensor::Int8Tensor","arrow::tensor::Int16Tensor","arrow::tensor::Int32Tensor","arrow::tensor::Int64Tensor","arrow::tensor::IntervalDayTimeTensor","arrow::tensor::IntervalMonthDayNanoTensor","arrow::tensor::IntervalYearMonthTensor","arrow::tensor::Time32MillisecondTensor","arrow::tensor::Time32SecondTensor","arrow::tensor::Time64MicrosecondTensor","arrow::tensor::Time64NanosecondTensor","arrow::tensor::TimestampMicrosecondTensor","arrow::tensor::TimestampMillisecondTensor","arrow::tensor::TimestampNanosecondTensor","arrow::tensor::TimestampSecondTensor","arrow::tensor::UInt8Tensor","arrow::tensor::UInt16Tensor","arrow::tensor::UInt32Tensor","arrow::tensor::UInt64Tensor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()