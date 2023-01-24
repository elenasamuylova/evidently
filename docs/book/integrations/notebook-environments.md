---
description: Using Evidently in Colab and other notebook environments.
---

You can use Evidently Python library to generate visual HTML reports, JSON, and Python dictionary output directly in the notebook environment. You can also save the HTML reports externally and open them in the browser.

By default, Evidently is tested to work in **Jupyter notebook** on MAC OS and Linux and **Google Colab**.

Generating visual reports might work differently in other notebook environments. 

# Jupyter notebooks 

You can generate the visual reports in **Jupyter notebooks** on MAC OS and Linux. 

{% hint style="info" %}
If you want to display the dashboards in Jupyter notebook, make sure that in addition to installing Evidently you [installed](../installation/install-evidently.md) the Jupyter **nbextension**. It will be used for visualizations.
{% endhint %}

You should then follow the steps described in the User Guide to [generate reports](../tests-and-reports/get-reports.md) and [run test suites](../tests-and-reports/run-tests.md).

# Google Colab 

You can also generate visual reports in **Google Collaboratory**.

To install `evidently`, run the following command in the notebook cell:

```
!pip install evidently
```

Then follow the steps described in the User Guide.

# Other notebook environments 

You can also use Evidently in other notebook environments, including **Jupyter notebooks on Windows**, **Jupyter lab** and hosted notebooks such as **Kaggle Kernel**, **Databricks** or **Deepnote** notebooks. Consult the [installation instructions for details](../installation/install-evidently.md).

For most hosted environments, you would need to run the following command in the notebook cell:

```
!pip install evidently
```

**Note**: Nbextension is not available on Windows and in hosted notebook environments. Evidently will use a different visualization method in this case.  However, it is not possible to thoroughly test in all different environments, and the ability to generate visual reports is **not guaranteed**. 

## Visual reports in the notebook cell

To get the visual reports in different notebook environments, you should explicitly add an argument to display the report or test suite `inline` when calling it:

```python
report.show(mode='inline')
```

You can also use this method if you cannot install nbextension. 

Here is a complete example of how you can call the report after installation, imports, and data preparation:

```python
report = Report(metrics=[
    DataDriftPreset(), 
])

report.run(reference_data=reference, current_data=current)
report.show(mode='inline')
```

## Standalone HTML

If the report does not appear in the cell, consider generating a standalone HTML file and opening it in a browser. 

```python
report = Report(metrics=[
    DataDriftPreset(), 
])

report.run(reference_data=reference, current_data=current)
report.save_html("file.html")
```

You can also specify the path where to save the file.

## Troubleshooting 

The `show()` method has the argument `mode` which can take the following options:

* **auto** - the default option. Ideally, you will not need to specify the value for `mode` and can use the default. But if it does not work (in case Evidently failed to determine the environment automatically), consider setting the correct value explicitly.
* **nbextention** - to show the UI using nbextension. Use this option to display dashboards in Jupyter notebooks (it should work automatically).
* **inline** - to insert the UI directly into the cell. Use this option for Google Colab (it should work automatically), Kaggle Kernels, Databricks and Deepnote. 
